import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import Button from "../../../../Buttons/Buttons";

function PendingAppConfigList() {
  const [unconfiguredApps, setUnconfiguredApps] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/configuredapps/1")
      .then((res) => {
        if (res.status === 200) setUnconfiguredApps(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const button = [
    {
      type: "button-blue-small",
      text: "Configure",
    },
  ];
  return (
    <div className="container-lg m-3">
      <div id="PendingAppConfigList" className="d-flex flex-column">
        <h2>
          Pending Configuration <br />
          Application
        </h2>
        <div>
          <table id="pending-app">
            <thead>
              <th>Application</th>
              <th>Description</th>
              <th>Action</th>
            </thead>
            <tbody>
              {unconfiguredApps.slice(0, 3).map((unconfigured, i) => (
                <tr key={i}>
                  <td>{unconfigured.Application}</td>
                  <td>{unconfigured.Description}</td>
                  <td>
                    <Button button={button[0]}></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PendingAppConfigList;
