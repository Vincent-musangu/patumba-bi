import React, { Fragment } from 'react';
import Sec from "./Table";
import { caption, head, rows, } from "../data/sec/secLayoutdata";

export const ZamtelSec = () => {
  return (
    <Fragment>
      <Sec caption={caption} head={head} rows={rows} />
    </Fragment>
  );
};

export const AirtelSec = () => {
  return (
    <Fragment>
      <Sec caption={caption} head={head} rows={rows} />
    </Fragment>
  );
}
export const MtnSec = () => {
  return (
    <Fragment>
      <Sec caption={caption} head={head} rows={rows} />
    </Fragment>
  );
}