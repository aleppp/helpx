import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../../Buttons/Buttons";
import "./ApplicationSettingsList.css";

function ApplicationSettingsList() {
  const [appSettingsList, setAppSettingsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/appattributes/listappattributes")
      .then((res) => {
        if (res.status === 200) setAppSettingsList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const button = [
    {
      type: "button-green",
      text: "Edit",
    },
    {
      type: "button-blue",
      text: "Add New",
    },
  ];
  return (
    <div>
      <div className="app-settings">
        <h1>Applications Settings</h1>
        <div className="button-float-right">
          <Button button={button[1]}></Button>
        </div>{" "}
      </div>
      <div>
        <table id="appSettings">
          <thead>
            <th>Application Name</th>
            <th>Background Color</th>
            <th>Font Size</th>
            <th>Font Family</th>
            <th>Theme</th>
            <th>Navigation Bar</th>
            <th>Action</th>
          </thead>
          <tbody>
            {appSettingsList.map((appSettings, i) => (
              <tr key={i}>
                <td>{appSettings.Name}</td>
                <td>{appSettings.BackgroundColor}</td>
                <td>{appSettings.FontSize}</td>
                <td>{appSettings.FontFamily}</td>
                <td>{appSettings.Theme}</td>
                <td>{appSettings.NavigationBar}</td>
                <td className="action-column">
                  <Button button={button[0]}></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplicationSettingsList;
