import React, { Fragment } from "react";

import ManagementCard from "../components/ManagementCard";
const Zamtel: React.FC = () => {
  return (
    <Fragment>
      <h1 style={{ color: "#0000009c" }}>Zamtel Reports</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <ManagementCard link="/zamtel/sec-reports" title="SEC Reports" />
        <ManagementCard link="/zamtel/monthly-units" title="Monthly Units" />
        <ManagementCard link="/zamtel/daily-units" title="Daily Unit Price" />
        <ManagementCard link="/zamtel/sacco" title="SACCO Reports" />
      </div>
    </Fragment>
  );
};

export default Zamtel;
