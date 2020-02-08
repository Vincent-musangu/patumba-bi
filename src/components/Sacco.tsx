import React, { Fragment } from 'react';
import SaccoTable from "./Table";
import { caption, head, rows, } from "../data/sacco/SaccoLayoutdata"


const Sacco = () => {
  return (
    <Fragment>
      <SaccoTable caption={caption} head={head} rows={rows} />
    </Fragment>
  );
}
export default Sacco