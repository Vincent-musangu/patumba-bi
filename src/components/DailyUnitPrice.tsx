import React, { Fragment } from 'react';
import DailyUnitPrice from "./Table";
import { caption, head, rows, } from "../data/dailyUnits/dailyLayoutdata";

export const ZamtelDailyUnitPrice = () => {
    return (
        <Fragment>
            <DailyUnitPrice caption={caption} head={head} rows={rows} />
        </Fragment>
    );
};

export const AirtelDailyUnitPrice = () => {
    return (
        <Fragment>
            <DailyUnitPrice caption={caption} head={head} rows={rows} />
        </Fragment>
    );
}
export const MtnDailyUnitPrice = () => {
    return (
        <Fragment>
            <DailyUnitPrice caption={caption} head={head} rows={rows} />
        </Fragment>
    );
}