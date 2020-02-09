import React, { Fragment } from 'react';
import Sec from "./Table";
import { caption, head, SecLayout } from "../data/sec/secLayoutdata";

export const ZamtelSec = () => {
  return (
    <Fragment>
      <Sec caption={caption} head={head} rows={SecLayout("zamtel", "sec")} />
    </Fragment>
  );
};

export const AirtelSec = () => {
  return (
    <Fragment>
      <Sec caption={caption} head={head} rows={SecLayout("airtel", "sec")} />
    </Fragment>
  );
}
export const MtnSec = () => {
  return (
    <Fragment>
      <Sec caption={caption} head={head} rows={SecLayout("mtn", "sec")} />
    </Fragment>
  );
}