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
  return (
    <div className="container-lg m-3">
      <div
        className="d-flex flex-column"
        id="RecentAppConfigList"
        data-testid="divShows"
      >
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
              {recentApp.slice(0, 3).map((app, i) => (
                <tr key={i}>
                  <td>{app.Datetime}</td>
                  <td>{app.ApplicationName}</td>
                  <td>{app.Changes}</td>
                  <td>{app.User}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecentAppConfigList;
