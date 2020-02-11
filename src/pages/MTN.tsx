import React from "react";
import ManagementCard from "../components/ManagementCard";
const MTN: React.FC = () => {
  return (
    <div>
      <h1 style={{ color: "#0000009c" }}>MTN Reports</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
        <ManagementCard link="/mtn/sec-reports" title="SEC Reports" />
        <ManagementCard link="/mtn/daily-units" title="Daily Unit Price" />
        <ManagementCard link="/mtn/monthly-units" title="Monthly Units" />
      </div>
    </div>
  );
};

export default MTN;
