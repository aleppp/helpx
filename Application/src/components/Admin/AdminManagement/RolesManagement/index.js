import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Button from "../../../Buttons/Buttons";

function RolesManagement() {
  const [RolesManagement, setRolesManagement] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/userroles/sel")
      .then((res) => {
        if (res.status === 200) setRolesManagement(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

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

  return (
    <div>
      <div className="roles-management-component">
        <h1>Roles Management</h1>
        <Button button={button[1]}></Button>
      </div>

      <table>
        <tr>
          <th>
            Role ID{" "}
            <img
              className="dropdown"
              src={process.env.PUBLIC_URL + "/images/expandMore.png"}
            />
          </th>
          <th>
            Role Name{" "}
            <img
              className="dropdown"
              src={process.env.PUBLIC_URL + "/images/expandMore.png"}
            />
          </th>
          <th> Description </th>
          <th> Number of Users </th>
          <th> Action </th>
        </tr>
        {RolesManagement.map((roles, i) => (
          <tr key={i}>
            <td>{roles.ID} </td>
            <td> {roles.Name} </td>
            <td> {roles.Description} </td>
            <td> {roles.Number} </td>
            <td>
              <Button button={button[2]}></Button>
              <Button button={button[0]}></Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default RolesManagement;
