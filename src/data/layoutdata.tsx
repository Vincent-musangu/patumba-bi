import { presidents } from "./mockSacco";

interface President {
	id: Number;
	date: string;
	transRef: string;
	name: string;
	period: string;
	principle: string;
	acc: string;
	repaymentDate: string;
	interestRate: string;
	interestAmount: string;
	totalRepayAmount: string;
}

export const caption = "SACCO Reports";

export const createHead = (withWidth: boolean) => {
	return {
		cells: [
			{
				key: "date",
				content: "Date",
				isSortable: true,
				width: withWidth ? 13 : undefined
			},
			{
				key: "transRef",
				content: "Reference",
				shouldTruncate: true,
				isSortable: true,
				width: withWidth ? 13 : undefined
			},
			{
				key: "acc",
				content: "A/C No",
				shouldTruncate: true,
				isSortable: true,
				width: withWidth ? 13 : undefined
			},
			{
				key: "name",
				content: "Name",
				shouldTruncate: false,
				width: withWidth ? 13 : undefined
			},
			{
				key: "period",
				content: "Period",
				shouldTruncate: false
			},
			{
				key: "principle",
				content: "Principle",
				shouldTruncate: true
			},
			{
				key: "repaymentDate",
				content: "Repayment Date",
				shouldTruncate: true,
				width: withWidth ? 13 : undefined
			},
			{
				key: "interestRate",
				content: "Interest Rate",
				shouldTruncate: true
			},
			{
				key: "interestAmount",
				content: "Interest Amount",
				shouldTruncate: true
			},
			{
				key: "totalRepayAmount",
				content: "total Repay ",
				shouldTruncate: true
			}
		]
	};
};

export const head = createHead(true);

export const rows = presidents.map((president: President, index: number) => ({
	cells: [
		{
			key: president.date,
			content: president.date
		},
		{
			key: president.transRef,
			content: president.transRef
		},

		{
			key: president.acc,
			content: president.acc
		},
		{
			key: president.name,
			content: president.name
		},
		{
			key: president.period,
			content: president.period
		},
		{
			key: president.principle,
			content: president.principle
		},

		{
			key: president.repaymentDate,
			content: president.repaymentDate
		},
		{
			key: president.interestRate,
			content: president.interestRate
		},

		{
			key: president.interestAmount,
			content: president.interestAmount
		},
		{
			key: president.totalRepayAmount,
			content: president.totalRepayAmount
		}
	]
}));
