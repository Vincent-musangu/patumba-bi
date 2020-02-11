import React, { Fragment } from 'react';
import Sec from "./Table";
import { caption, head } from "../data/sec/secLayoutdata";

export const ZamtelSec = () => {
  return (
    <Fragment>
      <Sec caption={caption} head={head} mno="zamtel" report="sec" />
    </Fragment>
  );
};

export const AirtelSec = () => {
  return (
    <Fragment>
      <Sec caption={caption} head={head} mno="airtel" report="sec" />
    </Fragment>
  );
}
export const MtnSec = () => {
  return (
    <Fragment>
      <Sec caption={caption} head={head} mno="mtn" report="sec" />
    </Fragment>
  );
}