import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../../Buttons/Buttons";
import "./ApplicationList.css";

function ApplicationList() {
  const [appList, setAppList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/apps/listapplications")
      .then((res) => {
        if (res.status === 200) setAppList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const button = [
    {
      type: "button-green",
      text: "Edit",
    },
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
      <div className="app-list">
        <h1>List of Application</h1>
        <div className="button-float-right">
          <Button button={button[2]} />
        </div>
      </div>
      <div>
        <table id="applist">
          <thead>
            <th>Application ID</th>
            <th>Application Name</th>
            <th>Application URL</th>
            <th>Action</th>
          </thead>
          <tbody>
            {appList.map((app, i) => (
              <tr key={i}>
                <td>{app.id}</td>
                <td>{app.name}</td>
                <td>{app.url}</td>
                <td className="action-column">
                  <Button button={button[0]}></Button>
                  <Button button={button[1]}></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplicationList;
