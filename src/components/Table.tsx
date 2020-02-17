import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CSVLink } from "react-csv";
import Button from "@atlaskit/button";
import DynamicTable from "@atlaskit/dynamic-table";
import axios from "axios";
import { Label } from "@atlaskit/field-base";
import { DatePicker } from "@atlaskit/datetime-picker";

const Wrapper = styled.div`
  min-width: 600px;
`;

interface Cell {
  key: string | number;
  content: string | number;
}

export interface CellRow {
  cells: Cell[];
}

interface Head {
  key: string;
  content: string;
  shouldTruncate?: boolean | undefined;
  isSortable?: boolean | undefined;
  width?: number | undefined;
}

interface HeadRow {
  cells: Head[];
}

export interface TableProps {
  caption: string;
  head: HeadRow;
  mno: string;
  report: string;
}

const Table: React.FC<TableProps> = ({ caption, head, mno, report }) => {
  const [startDate, setStartDate] = useState<string>("2020-02-01");
  const [endDate, setEndDate] = useState<string>("2020-03-01");
  const [rowData, setRowData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${mno}/${report}/${startDate}/${endDate}`)
      .then(res => setRowData(res.data));
  }, [startDate, endDate, mno, report]);

  const rows = rowData.map(data => {
    let keys = Object.keys(data);
    let cells = keys.map(val => ({
      key: val,
      content: data[val]
    }));

    return {
      cells: cells
    };
  });
  console.log(rows);

  return (
    <>
      <Label htmlFor="react-select-datepicker-1--input" label="From" />
      <DatePicker id="datepicker-1" defaultValue="2020-02-01" onChange={setStartDate} />
      <Label htmlFor="react-select-datepicker-2--input" label="To" />
      <DatePicker id="datepicker-2" defaultValue="2020-03-01" onChange={setEndDate} />
      <Wrapper>
        <DynamicTable
          caption={caption}
          head={head}
          rows={rows}
          rowsPerPage={10}
          defaultPage={1}
          loadingSpinnerSize="large"
          isLoading={rowData.length === 0 ? true : false}
          isFixedSize
          defaultSortKey="term"
          defaultSortOrder="ASC"
        />
      </Wrapper>
      <CSVLink
        style={{ textDecoration: "none", float: "right" }}
        data={rows.map(data => data.cells.map(cells => cells.content))}
        headers={head.cells.map(head => head.content)}
        filename={`${mno.toUpperCase()} ${report.toUpperCase()} Report.csv`}
      >
        <Button appearance="primary">Download</Button>
      </CSVLink>
    </>
  );
};

export default Table;
