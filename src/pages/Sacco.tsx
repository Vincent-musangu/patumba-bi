import React, { Fragment, useState } from "react";
import styled from "styled-components";
import CsvDownload from "react-json-to-csv";
import DynamicTable from "@atlaskit/dynamic-table";
import { caption, head, rows } from "../data/layoutdata";
// import { presidents } from "../data/mockSacco";
import { Label } from "@atlaskit/field-base";
import { DatePicker } from "@atlaskit/datetime-picker";
const Wrapper = styled.div`
	min-width: 600px;
`;

const Sacco: React.FC = () => {
	const [Period, setPeriod] = useState(rows);

	// const secondDate = (inputDateTo: string) => inputDateTo;
	const dateFilter = (inputDate: string) => {
		let date = rows.filter(rows => rows.cells[0].content === inputDate);
		// console.log(inputDate);
		// console.log(" inputDate type :", typeof inputDate);
		// console.log(date);

		return setPeriod(date);
	};
	return (
		<Fragment>
			<Label htmlFor="react-select-datepicker-1--input" label="from" />
			<DatePicker
				id="datepicker-1"
				defaultValue="2020-01-01"
				// value={Value}
				// defaultValue="1/1/2020"
				onChange={dateFilter}
			/>
			{/* <Label htmlFor="react-select-datepicker-2--input" label="TO" />
			<DatePicker id="datepicker-2" value={Value} onChange={dateFilter} /> */}
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
			<CsvDownload data={Period} filename="SaccoDdata.csv" />
		</Fragment>
	);
};

export default Sacco;
