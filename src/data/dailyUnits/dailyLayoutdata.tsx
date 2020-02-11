
export const caption = "Daily Units Price";

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
        key: "unitPrice",
        content: "Unit Price",
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 13 : undefined
      }
    ]
  };
};

export const head = createHead(true);
