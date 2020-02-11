import React, { Fragment } from 'react';
import DailyUnitPrice from "./Table";
import { caption, head, } from "../data/dailyUnits/dailyLayoutdata";

export const ZamtelDailyUnitPrice = () => {
    return (
        <Fragment>
            <DailyUnitPrice caption={caption} head={head} mno="zamtel" report="units-price" />
        </Fragment>
    );
};

export const AirtelDailyUnitPrice = () => {
    return (
        <Fragment>
            <DailyUnitPrice caption={caption} head={head} mno="airtel" report="units-price" />
        </Fragment>
    );
}
export const MtnDailyUnitPrice = () => {
    return (
        <Fragment>
            <DailyUnitPrice caption={caption} head={head} mno="mtn" report="units-price" />
        </Fragment>
    );
}