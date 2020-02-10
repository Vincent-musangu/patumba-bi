import { units } from "./mockMonthUnits";
import { useState, useEffect } from "react";
import axios from "axios"

interface UnitPrice {
  date: string;
  totalUnitsRedeemed: number;
  totalUnitsIssued: number;
}
export const MonthlyUnits = (mno: string, report: string) => {
  const [unitPriceData, setUnitPriceData] = useState([])

  useEffect(() => {

    axios.get(`http://localhost:5000/${mno}/${report}`).then((unitPrice) => setUnitPriceData(unitPrice.data))

  })

  return unitPriceData.map((unitPrice: UnitPrice) => ({
    cells: [
      {
        key: unitPrice.date,
        content: unitPrice.date
      },
      {
        key: unitPrice.totalUnitsRedeemed,
        content: unitPrice.totalUnitsRedeemed
      },
      {
        key: unitPrice.totalUnitsIssued,
        content: unitPrice.totalUnitsIssued
      }
    ]
  }));
};

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

export const rows = units.map((units: UnitPrice) => ({
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
