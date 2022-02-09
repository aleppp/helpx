import React, { useState, useEffect } from "react";
import axios from "axios";

import "./style.css";
import DeleteButton from "./UserManagementBtn/DeleteUser/DeleteButton";

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

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="user-management-component">
            <h1>User Management</h1>
            <button className="button-blue">Add New</button>
          </div>
        </div>

        <div>
          <table>
            <thead>
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
              <th></th>
            </thead>
            <tbody>
              {UserManagement.map((userDelete, i) => (
                <DeleteButton userDelete={userDelete} i={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
