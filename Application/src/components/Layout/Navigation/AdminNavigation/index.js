import React from "react";
import "./style.css";

function VerticalBar() {
  return (
    <div>
      <div className="admin-nav">
        <img
          className="images-1"
          alt="profile-img"
          src={process.env.PUBLIC_URL + "/images/profile.png"}
        />
        <h2>Admin's Name</h2>
        <div className="links">
          <img
            className="images-2"
            alt="dashboard-img"
            src={process.env.PUBLIC_URL + "/images/dashboard.png"}
          />
          <span>
            <a href="/">Dashboard</a>
          </span>{" "}
          <br />
          <img
            className="images-3"
            alt="user-img"
            src={process.env.PUBLIC_URL + "/images/users.png"}
          />
          <span>
            <a href="/users">Users</a>
          </span>{" "}
          <br />
          <img
            className="images-4"
            alt="audit-img"
            src={process.env.PUBLIC_URL + "/images/audit.png"}
          />
          <span>
            <a href="/auditlog">Audit Log</a>
          </span>{" "}
          <br />
          <img
            className="images-5"
            alt="configure-img"
            src={process.env.PUBLIC_URL + "/images/configure.png"}
          />
          <span>
            <a href="/configuration">Configuration</a>
          </span>{" "}
          <br />
          <img
            className="images-6"
            alt="notification-img"
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
