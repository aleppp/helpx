import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../../Buttons/Buttons";
import "./style.css";
import { EditRole } from "./RolesManagementBtn/EditRole";
import { DeleteRole } from "./RolesManagementBtn/DeleteRole";

function RolesManagement() {
  const [RolesManagement, setRolesManagement] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showDel, setShowDel] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/userroles/sel")
      .then((res) => {
        if (res.status === 200) setRolesManagement(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="roles-management-component">
          <h1>Roles Management</h1>
          <button className="button-blue">Add New</button>
        </div>
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
              <button
                className="button-green"
                onClick={() => setShowEdit(!showEdit)}
              >
                Edit
              </button>
              <button
                className="button-red"
                onClick={() => setShowDel(!showDel)}
              >
                Delete
              </button>
            </td>
            <td>
              {showEdit ? (
                <div>
                  <EditRole />
                </div>
              ) : null}
              {showDel ? (
                <div>
                  <DeleteRole />
                </div>
              ) : null}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default RolesManagement;
