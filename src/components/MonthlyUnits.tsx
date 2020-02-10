import React, { Fragment } from 'react';
import MonthlyUnitPrice from "./Table";
import { caption, head, MonthlyUnits, } from "../data/monthlyUnits/monthlyUnitsLayoutdata";

export const ZamtelMonthlyUnitPrice = () => {
  return (
    <Fragment>
      <MonthlyUnitPrice caption={caption} head={head} rows={MonthlyUnits("zamtel", "monthly-units")} />
    </Fragment>
  );
};

export const AirtelMonthlyUnitPrice = () => {
  return (
    <Fragment>
      <MonthlyUnitPrice caption={caption} head={head} rows={MonthlyUnits("airtel", "monthly-units")} />
    </Fragment>
  );
}
export const MtnMonthlyUnitPrice = () => {
  return (
    <Fragment>
      <MonthlyUnitPrice caption={caption} head={head} rows={MonthlyUnits("mtn", "monthly-units")} />
    </Fragment>
  );
}