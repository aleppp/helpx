import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UsersPanel.css";

function UsersPanel() {
  const [listUsersWithoutRoles, setListUsersWithoutRoles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users/1")
      .then((res) => {
        if (res.status === 200) setListUsersWithoutRoles(res.data[0]);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="user-panel">
      <h2 className="users-without-roles">Users without roles</h2>
      {listUsersWithoutRoles.map((user, i) => {
        return (
          <div key={i}>
            <div class="green-circle"></div>
            <span>{user.Name}</span>
          </div>
        );
      })}
      <h2 className="not-active-users">Not active user</h2>
      <div class="gray-circle"></div>
      <span>User216</span>
    </div>
  );
}

export default UsersPanel;
