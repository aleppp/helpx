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
    <table>
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
  );
}

export default RecentAuditLog;
