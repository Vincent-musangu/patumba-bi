import React, { Fragment } from 'react';
import MonthlyUnitPrice from "./Table";
import { caption, head, } from "../data/monthlyUnits/monthlyUnitsLayoutdata";

export const ZamtelMonthlyUnitPrice = () => {
  return (
    <Fragment>
      <MonthlyUnitPrice caption={caption} head={head} mno="zamtel" report="monthly-units" />
    </Fragment>
  );
};

export const AirtelMonthlyUnitPrice = () => {
  return (
    <Fragment>
      <MonthlyUnitPrice caption={caption} head={head} mno="airtel" report="monthly-units" />
    </Fragment>
  );
}
export const MtnMonthlyUnitPrice = () => {
  return (
    <Fragment>
      <MonthlyUnitPrice caption={caption} head={head} mno="mtn" report="monthly-units" />
    </Fragment>
  );
}