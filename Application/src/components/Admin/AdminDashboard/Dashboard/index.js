import React, { useState, useEffect } from "react";
import axios from "axios";
import CounterWidget from "./CounterWidget";
import "./style.css";

function Dashboard() {
  const [countApp, setCountApp] = useState([]);
  const [countUser, setCountUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/integratedapps/sel")
      .then((res) => {
        if (res.status === 200) setCountApp(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/countUser/sel")
      .then((res) => {
        if (res.status === 200) setCountUser(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const counter = [
    { title: "Active Users" },
    { title: "Number of Integrated Application" },
  ];

  return (
    <div className="dashboard">
      <div className="ActiveUser">
        <CounterWidget
          title={counter[0].title}
          count={countUser.map((user) => user.ActiveUser)}
        />
      </div>
      <div className="IntegratedApp">
        <CounterWidget
          title={counter[1].title}
          count={countApp.map((app) => app.IntegratedApp)}
        />
      </div>
    </div>
  );
}

export default Dashboard;
