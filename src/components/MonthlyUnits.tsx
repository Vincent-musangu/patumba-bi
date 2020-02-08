import React, { Fragment } from 'react';
import MonthlyUnitPrice from "./Table";
import { caption, head, rows, } from "../data/monthlyUnits/monthlyUnitsLayoutdata";

export const ZamtelMonthlyUnitPrice = () => {
  return (
    <Fragment>
      <MonthlyUnitPrice caption={caption} head={head} rows={rows} />
    </Fragment>
  );
};

export const AirtelMonthlyUnitPrice = () => {
  return (
    <Fragment>
      <MonthlyUnitPrice caption={caption} head={head} rows={rows} />
    </Fragment>
  );
}
export const MtnMonthlyUnitPrice = () => {
  return (
    <Fragment>
      <MonthlyUnitPrice caption={caption} head={head} rows={rows} />
    </Fragment>
  );
}