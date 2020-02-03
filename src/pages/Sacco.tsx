import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { CSVLink } from "react-csv";
import Button from "@atlaskit/button";
import DynamicTable from "@atlaskit/dynamic-table";
import { caption, head, rows } from "../data/layoutdata";

import { Label } from "@atlaskit/field-base";
import { DatePicker } from "@atlaskit/datetime-picker";
const Wrapper = styled.div`
	min-width: 600px;
`;

const Sacco: React.FC = () => {
	const [Period, setPeriod] = useState<
		{ cells: { key: string; content: string }[] }[]
	>(rows);

	const [SecondDate, setSecondDate] = useState();
	const dateFilterTo = (secondDate: string) => {
		return setSecondDate(secondDate);
	};

	const dateFilter = (inputDate: string) => {
		let date: { cells: { key: string; content: string }[] }[] = rows.filter(
			rows =>
				(rows.cells[0].content <= inputDate &&
					rows.cells[0].content >= SecondDate) ||
				(rows.cells[0].content >= inputDate &&
					rows.cells[0].content <= SecondDate)
		);

		return setPeriod(date);
	};

	return (
		<Fragment>
			<Label htmlFor="react-select-datepicker-1--input" label="from" />
			<DatePicker
				id="datepicker-1"
				defaultValue="2020-01-01"
				onChange={dateFilterTo}
			/>
			<Label htmlFor="react-select-datepicker-2--input" label="TO" />
			<DatePicker
				id="datepicker-2"
				defaultValue="2020-01-01"
				onChange={dateFilter}
			/>
			<Wrapper>
				<DynamicTable
					caption={caption}
					head={head}
					rows={Period}
					rowsPerPage={10}
					defaultPage={1}
					loadingSpinnerSize="large"
					isLoading={false}
					isFixedSize
					defaultSortKey="term"
					defaultSortOrder="ASC"
					// onSort={() => console.log("onSort")}
					// onSetPage={() => console.log("onSetPage")}
				/>
			</Wrapper>
			<CSVLink
				style={{ textDecoration: "none", float: "right" }}
				data={Period.map(period => period.cells.map(cells => cells.content))}
				headers={head.cells.map(head => head.content)}
				filename={`SACCO data`}
			>
				<Button appearance="primary">Download</Button>
			</CSVLink>
		</Fragment>
	);
};

export default Sacco;
