import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CSVLink } from "react-csv";
import Button from "@atlaskit/button";
import DynamicTable from "@atlaskit/dynamic-table";
import axios from "axios"
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
    shouldTruncate?: boolean | undefined,
    isSortable?: boolean | undefined,
    width?: number | undefined
}

interface HeadRow {
    cells: Head[];
}

export interface TableProps {
    rows: CellRow[];
    caption: string;
    head: HeadRow;
}


const Table: React.FC<TableProps> = ({ rows, caption, head }) => {
    const [startDate, setStartDate] = useState<string>("2020-01-01");
    const [endDate, setEndDate] = useState<string>("2020-02-31");

    useEffect(() => {

        axios.post(`http://localhost:5000/mtn/start`, {
            "start": startDate,
            "end": endDate
        },
            { headers: { 'Content-Type': 'application/json' } })
        axios.post(`http://localhost:5000/zamtel/start`, {
            "start": startDate,
            "end": endDate
        },
            { headers: { 'Content-Type': 'application/json' } })
        axios.post(`http://localhost:5000/airtel/start`, {
            "start": startDate,
            "end": endDate
        },
            { headers: { 'Content-Type': 'application/json' } })

    }, [startDate, endDate])
    const rowData: CellRow[] = rows

    return (
        < >
            <Label htmlFor="react-select-datepicker-1--input" label="From" />
            <DatePicker id="datepicker-1" defaultValue="2020-01-01" onChange={setStartDate} />
            <Label htmlFor="react-select-datepicker-2--input" label="To" />
            <DatePicker id="datepicker-2" defaultValue="2020-01-01" onChange={setEndDate} />
            <Wrapper>
                <DynamicTable
                    caption={caption}
                    head={head}
                    rows={rowData}
                    rowsPerPage={10}
                    defaultPage={1}
                    loadingSpinnerSize="large"
                    isLoading={false}
                    isFixedSize
                    defaultSortKey="term"
                    defaultSortOrder="ASC"
                />
            </Wrapper>
            <CSVLink
                style={{ textDecoration: "none", float: "right" }}
                data={rowData.map(rowData => rowData.cells.map(cells => cells.content))}
                headers={head.cells.map(head => head.content)}
                filename={`SACCOdata.csv`}
            >
                <Button appearance="primary">Download</Button>
            </CSVLink>
        </ >
    );
};

export default Table;
