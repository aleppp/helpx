import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Button from "../../../Buttons/Buttons";

function UserManagement() {
  const [UserManagement, setUserManagement] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/sel")
      .then((res) => {
        if (res.status === 200) setUserManagement(res.data[0]);
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
  ];

  return (
    <div>
      <div className="user-management-component">
        <h1>User Management</h1>
        <Button button={button[1]}></Button>

        <div>
          <table>
            <tr>
              <th>
                <div className="img-expandMore">
                  User ID
                  <img
                    className="dropdown"
                    src={process.env.PUBLIC_URL + "/images/expandMore.png"}
                  />
                </div>
              </th>
              <th>
                User Name{" "}
                <img
                  className="dropdown"
                  src={process.env.PUBLIC_URL + "/images/expandMore.png"}
                />
              </th>
              <th>
                User Email{" "}
                <img
                  className="dropdown"
                  src={process.env.PUBLIC_URL + "/images/expandMore.png"}
                />
              </th>
              <th>
                Application{" "}
                <img
                  className="dropdown"
                  src={process.env.PUBLIC_URL + "/images/expandMore.png"}
                />
              </th>
              <th> Content Contributor </th>
              <th> Content Approver </th>
              <th> System Admin </th>
              <th> Action </th>
            </tr>
            {UserManagement.map((user, i) => (
              <tr key={i}>
                <td> {user.id} </td>
                <td> {user.FirstName}</td>
                <td> {user.Email} </td>
                <td> {user.Name} </td>
                <td>
                  <img
                    className="checkbox"
                    src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                  />
                </td>
                <td>
                  <img
                    className="checkbox"
                    src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                  />
                </td>
                <td>
                  <img
                    className="checkbox"
                    src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                  />
                </td>
                <td>
                  <Button button={button[0]}></Button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
