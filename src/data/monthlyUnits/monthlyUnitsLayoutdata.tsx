
export const caption = "Monthly Units ";

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
        key: "totalUnitsRedeemed",
        content: "Total Units Redeemed",
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 13 : undefined
      },
      {
        key: "totalunitsIssued",
        content: "Total units Issued",
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 13 : undefined
      }
    ]
  };
};

export const head = createHead(true);
