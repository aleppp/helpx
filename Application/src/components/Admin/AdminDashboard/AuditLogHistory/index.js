import React from "react";
import "./style.css";

function AuditLogHistory() {
  return (
    <div class="AuditLogHistory">
      <h1>Audit Log</h1>

      <table>
        <tr>
          <th>Date & Time</th>
          <th>User</th>
          <th>Category</th>
          <th>Changes</th>
          <th>Changed Object</th>
          <th>Action</th>
        </tr>

        <tr>
          <td>1/11/2021 9:00PM</td>
          <td>Admin 1</td>
          <td>User</td>
          <td>Assign Role</td>
          <td>Balqis</td>
          <a href="a">Show More</a>
        </tr>
        <tr>
          <td>1/11/2021 9:21PM</td>
          <td>Admin 2</td>
          <td>Application</td>
          <td>New Content Added</td>
          <td>Alpha Oil</td>
          <a href="a">Show More</a>
        </tr>
      </table>
    </div>
  );
}

export default AuditLogHistory;
