import { useState, useEffect } from 'react';
import { sec } from "./mockSec";
import axios from "axios"

interface Sec {
  date: string;
  fundManagementFees: number;
  custodianFees: number;
  secLevyFees: number;
  trustFees: number;
}



export const SecLayout = (mno: string, report: string) => {
  const [secData, setSecData] = useState([])
  // axios.get(`http://localhost:5000/${mno}/sec`).then((sec) => setSecData(sec.data))

  useEffect(() => {

    axios.get(`http://localhost:5000/${mno}/${report}`).then((sec) => setSecData(sec.data))

  })

  return secData.map((sec: Sec) => ({
    cells: [
      {
        key: sec.date.slice(0, 10),
        content: sec.date.slice(0, 10)
      },
      {
        key: sec.fundManagementFees,
        content: sec.fundManagementFees
      },
      {
        key: sec.custodianFees,
        content: sec.custodianFees
      },
      {
        key: sec.secLevyFees,
        content: sec.secLevyFees
      },
      {
        key: sec.trustFees,
        content: sec.trustFees
      }
    ]
  }));
};



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

export const rows = sec.map((sec: Sec) => ({
  cells: [
    {
      key: sec.date,
      content: sec.date
    },
    {
      key: sec.fundManagementFees,
      content: sec.fundManagementFees
    },
    {
      key: sec.custodianFees,
      content: sec.custodianFees
    },
    {
      key: sec.secLevyFees,
      content: sec.secLevyFees
    },
    {
      key: sec.trustFees,
      content: sec.trustFees
    }
  ]
}));
