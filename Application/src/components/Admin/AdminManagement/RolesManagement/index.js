import React from "react";
import "./style.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "../../../Buttons/Buttons";

const button = [
  {
    type: "button-red",
    text: "Delete",
  },
  {
    type: "button-blue",
    text: "Add New",
  },
  {
    type: "button-green",
    text: "Edit",
  },
];

function RolesManagement() {
  return (
    <div>
      <div className="roles-management-component">
        <h1>Roles Management</h1>
        <Button button={button[1]}></Button>
      </div>

      <table>
        <tr>
          <th>
            Role ID <ExpandMoreIcon />
          </th>
          <th>
            Role Name <ExpandMoreIcon />
          </th>
          <th> Description </th>
          <th> Number of Users </th>
          <th> Action </th>
        </tr>
        <tr>
          <td> R001 </td>
          <td> Content Approver </td>
          <td> Approved Content </td>
          <td> 12 </td>
          <td>
            <Button button={button[2]}></Button>
            <Button button={button[0]}></Button>
          </td>
        </tr>
        <tr>
          <td> R002 </td>
          <td> Content Contributor </td>
          <td> Edit and delete their own posts, but they can not edit or … </td>
          <td> 07 </td>
          <td>
            <Button button={button[2]}></Button>
            <Button button={button[0]}></Button>
          </td>
        </tr>

        <tr>
          <td> R003 </td>
          <td> System Admin </td>
          <td> Administer the content </td>
          <td> 11 </td>
          <td>
            <Button button={button[2]}></Button>
            <Button button={button[0]}></Button>
          </td>
        </tr>

        <tr>
          <td> R004 </td>
          <td> End User </td>
          <td> Consume the content </td>
          <td> 137 </td>
          <td>
            <Button button={button[2]}></Button>
            <Button button={button[0]}></Button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default RolesManagement;
