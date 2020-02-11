
export const caption = "Sec ";

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
        key: "fundManagementFees",
        content: "Fund Management Fees",
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 13 : undefined
      },
      {
        key: "custodianFees",
        content: "Custodian Fees",
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 13 : undefined
      },
      {
        key: "secLevyFees",
        content: "Sec Levy Fees",
        shouldTruncate: false,
        width: withWidth ? 13 : undefined
      },
      {
        key: "trustFees",
        content: "Trust Fees",
        shouldTruncate: false
      }
    ]
  };
};

export const head = createHead(true);
