import { units } from "./mockMonthUnits";

interface Units {
  date: string;
  totalUnitsRedeemed: number;
  totalUnitsIssued: number;
}

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

export const rows = units.map((units: Units) => ({
  cells: [
    {
      key: units.date,
      content: units.date
    },
    {
      key: units.totalUnitsRedeemed,
      content: units.totalUnitsRedeemed
    },
    {
      key: units.totalUnitsIssued,
      content: units.totalUnitsIssued
    }
  ]
}));
