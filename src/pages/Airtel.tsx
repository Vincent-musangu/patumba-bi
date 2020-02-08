import React from "react";

import ManagementCard from "../components/ManagementCard";
const Airtel: React.FC = () => {
  return (
    <div>
      <h1 style={{ color: "#0000009c" }}>Airtel Reports</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <ManagementCard link="/airtel/sec-reports" title="SEC Reports" />
        <ManagementCard link="/airtel/monthly-units" title="Monthly Units" />
        <ManagementCard link="/airtel/daily-units" title="Daily Unit Price" />
      </div>
    </div>
  );
};

export default Airtel;
