import React, { Fragment } from 'react';
import SaccoTable from "./Table";
import { caption, head } from "../data/sacco/SaccoLayoutdata"


const Sacco = () => {
  return (
    <Fragment>
      <SaccoTable caption={caption} head={head} mno="zamtel" report="sacco" />
    </Fragment>
  );
}
export default Sacco