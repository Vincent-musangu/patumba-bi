import { sec } from "./mockSec";
import
// React, 
{
  useState,
  //  Fragment,
  useEffect
} from 'react'
import axios from "axios"


// let real: [];

export const Rows = () => {
  const [secData, setSecData] = useState()

  useEffect(() => {

    axios.get("http://localhost:5000/zamtel/sec").then(res => {
      // let datas = Object.keys(res.data).map(x => res.data[x])
      // console.log(res.data);

      setSecData(res.data);
      // console.log(secData);
      // real = secData

    })
  })

  const rows = secData.map((sec: Sec) => ({
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



  return rows
};



// console.log(results);
interface Sec {
  date: string;
  fundManagementFees: number;
  custodianFees: number;
  secLevyFees: number;
  trustFees: number;
}

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
// export const rows = Secdata()
// export const rows = sec.map((sec: Sec) => ({
//   cells: [
//     {
//       key: sec.date,
//       content: sec.date
//     },
//     {
//       key: sec.fundManagementFees,
//       content: sec.fundManagementFees
//     },
//     {
//       key: sec.custodianFees,
//       content: sec.custodianFees
//     },
//     {
//       key: sec.secLevyFees,
//       content: sec.secLevyFees
//     },
//     {
//       key: sec.trustFees,
//       content: sec.trustFees
//     }
//   ]
// }));