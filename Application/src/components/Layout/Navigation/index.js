import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FraudConfig from "../../FraudManagement/FraudAdmin";
import UserManagement from "../../Admin/AdminManagement/UserManagement";
import RolesManagement from "../../Admin/AdminManagement/RolesManagement";
import AdminInboxPage from "../../Admin/AdminInboxPage";

const NavigationBar = () => {
  return (
    <div className="container-fluid">
      <div className="admin-nav close">
        <img
          className="profilePic"
          alt="profile-img"
          src={process.env.PUBLIC_URL + "/images/profileAdm.png"}
        />
        <h2>Eliza</h2>
        <h3>Petronas Digital</h3>
        <div className="links">
          <ul>
            <li>
              <a href="/">
                <img
                  src={process.env.PUBLIC_URL + "/images/dashbd.png"}
                  className="dashboardLogo"
                  alt="dashboard"
                />
                <span className="link-name">Dashboard</span>
                <br />
              </a>
            </li>
            <li>
              <div className="drawerbar">
                <a href="/users">
                  <img
                    className="images-3"
                    alt="user-img"
                    src={process.env.PUBLIC_URL + "/images/users.png"}
                  />
                  <span className="link-name">
                    Users
                    <img
                      src={process.env.PUBLIC_URL + "/images/arrowdown.png"}
                      className="whitedown"
                      alt="arrowdown"
                    />
                  </span>
                </a>
              </div>
              <ul className="sub-menu">
                <li>
                  <a href="/users">Users</a>
                </li>
                <li>
                  <a href="/roles">Roles</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/auditlog">
                <img
                  className="images-4"
                  alt="audit-img"
                  src={process.env.PUBLIC_URL + "/images/audit.png"}
                />
                <span className="link-name">Audit Log</span>
                <br />
              </a>
            </li>
            <li>
              <a href="/configuration">
                <img
                  className="images-5"
                  alt="configure-img"
                  src={process.env.PUBLIC_URL + "/images/configure.png"}
                />
                <span className="link-name">
                  Configuration
                  <img
                    src={process.env.PUBLIC_URL + "/images/arrowdown.png"}
                    className="whitedown-2"
                    alt="arrowdown"
                  />
                </span>
              </a>
              <ul className="sub-menu-2">
                <li>
                  <a href="">Application</a>
                </li>
                <li>
                  <a href="">Setting</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="/fraud">Fraud</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/notification">
                <img
                  className="images-6"
                  alt="noti-img"
                  src={process.env.PUBLIC_URL + "/images/notification.png"}
                />
                <span className="link-name">Notification</span>
                <br />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Router>
        <Switch>
          <Route path="/user">
            <UserManagement />
          </Route>
          <Route path="/roles">
            <RolesManagement />
          </Route>
          <Route path="/fraud">
            <FraudConfig />
          </Route>
          <Route path="/notification">
            <AdminInboxPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavigationBar;
