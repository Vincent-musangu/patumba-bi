
export const caption = "SACCO ";

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
				width: withWidth ? 10 : undefined
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
				key: "AmountDue",
				content: "Amount Due ",
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
