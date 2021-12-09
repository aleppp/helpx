import React from "react";
import "./VerticalBar.css";

function VerticalBar() {
  return (
    <div>
      <div className="admin-nav">
        <img
          className="images-1"
          src={process.env.PUBLIC_URL + "/images/profile.png"}
        />
        <h2>Admin's Name</h2>
        <div className="links">
          <img
            className="images-2"
            src={process.env.PUBLIC_URL + "/images/dashboard.png"}
          />
          <span>
            <a href="/">Dashboard</a>
          </span>{" "}
          <br />
          <img
            className="images-3"
            src={process.env.PUBLIC_URL + "/images/users.png"}
          />
          <span>
            <a href="/users">Users</a>
          </span>{" "}
          <br />
          <img
            className="images-4"
            src={process.env.PUBLIC_URL + "/images/audit.png"}
          />
          <span>
            <a href="/auditlog">Audit Log</a>
          </span>{" "}
          <br />
          <img
            className="images-5"
            src={process.env.PUBLIC_URL + "/images/configure.png"}
          />
          <span>
            <a href="/configuration">Configuration</a>
          </span>{" "}
          <br />
          <img
            className="images-6"
            src={process.env.PUBLIC_URL + "/images/notification.png"}
          />
          <span>
            <a href="/notification">Notification</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default VerticalBar;
