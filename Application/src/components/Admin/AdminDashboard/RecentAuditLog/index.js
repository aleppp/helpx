import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function RecentAuditLog() {
  const [RecentAuditLog, setRecentAuditLog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/recentauditlog/history")
      .then((res) => {
        if (res.status === 200) setRecentAuditLog(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-lg my-3 bg-light">
      <div id="recent-1">
        <h2>Latest Audit Log History</h2>
      </div>

      <table className="container-lg" id="recent-audit-log">
        <tr>
          <th>Date & Time</th>
          <th>Category</th>
          <th>Changed Object</th>
          <th>User</th>
        </tr>
        {RecentAuditLog.map((recentlog, i) => (
          <tr key={i}>
            <td> {recentlog.DateTime} </td>
            <td> {recentlog.Category} </td>
            <td> {recentlog.ChangedObject} </td>
            <td> {recentlog.User} </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default RecentAuditLog;
