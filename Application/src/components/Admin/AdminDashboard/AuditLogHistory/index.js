import React from "react";
import "./style.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AuditLogHistory() {
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
        <tr>
          <td> 1/11/2021 9:00PM </td>
          <td> Admin 1 </td>
          <td> User </td>
          <td> Assign Role </td>
          <td> Balqis </td>
          <a href="a">Show More</a>
        </tr>
        <tr>
          <td> 1/11/2021 9:20PM </td>
          <td> Admin 2 </td>
          <td> Application </td>
          <td> Change Database </td>
          <td> Amir </td>
          <a href="a">Show More</a>
        </tr>

        <tr>
          <td> 1/11/2021 9:420PM </td>
          <td> Admin 3 </td>
          <td> User </td>
          <td> Delete User </td>
          <td> Nisa </td>
          <a href="a">Show More</a>
        </tr>

        <tr>
          <td> 2/11/2021 10:01AM </td>
          <td> Admin 3 </td>
          <td> Application </td>
          <td> Add New Application </td>
          <td> Setel </td>
          <a href="a">Show More</a>
        </tr>
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
