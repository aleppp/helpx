import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AuditLogHistory() {
  const [AuditLogHistory, setAuditLogHistory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/auditlogs/datatable")
      .then((res) => {
        if (res.status === 200) setAuditLogHistory(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="audit-1">
        <h1>Audit Log History</h1>
        <img src="images/export.png" alt="Download" className="export"></img>
      </div>

      <table>
        <tr>
          <th>
            Date & Time <ExpandMoreIcon />
          </th>
          <th>
            User <ExpandMoreIcon />
          </th>
          <th>
            {" "}
            Category <ExpandMoreIcon />{" "}
          </th>
          <th>
            {" "}
            Changes <ExpandMoreIcon />{" "}
          </th>
          <th>
            {" "}
            Changed Object <ExpandMoreIcon />{" "}
          </th>
          <th> Action </th>
        </tr>
        {AuditLogHistory.map((auditlog, i) => (
          <tr key={i}>
            <td> {auditlog.DateTime} </td>
            <td> {auditlog.User} </td>
            <td> {auditlog.Category} </td>
            <td> {auditlog.Changes} </td>
            <td> {auditlog.ChangedObject} </td>
          </tr>
        ))}
      </table>
      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#" class="active">
          4
        </a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  );
}

export default AuditLogHistory;
