import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";

function RecentAppConfigList() {
  const [recentApp, setRecentApp] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/configuredapps/2")
      .then((res) => {
        if (res.status === 200) setRecentApp(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  // const data = [
  //   {
  //     date: "Date & Time",
  //     appName: "Application Name",
  //     changes: "Changes",
  //     user: "User",
  //   },
  //   {
  //     date: "1/11/2021 9:00PM",
  //     appName: "AlphaOil",
  //     changes: "Background Color Changed",
  //     user: "Admin 1",
  //   },
  //   {
  //     date: "3/11/2021 2:30PM",
  //     appName: "Petronas Up",
  //     changes: "URL Defined",
  //     user: "Admin 2",
  //   },
  // ];
  return (
    <div className="RecentAppConfigList" data-testid="divShows">
      <h2>
        Recent Configuration <br />
        Application
      </h2>
      <div>
        <table id="recent-app">
          <thead>
            <th>Date & Time</th>
            <th>Application Name</th>
            <th>Changes</th>
            <th>User</th>
          </thead>
          <tbody>
            {recentApp.map((app, i) => (
              <tr key={i}>
                <td>{app.Datetime}</td>
                <td>{app.ApplicationName}</td>
                <td width="500px">{app.Changes}</td>
                <td>{app.User}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentAppConfigList;
