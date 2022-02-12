import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FeedbackListCCA from "../../Feedback/FeedbackListCCA";
import FeedbackEUList from "../../Feedback/FeedbackListEU/FeedbackListEU";
import DashboardCV from "../Dashboard/DashboardCC";
import "./UserNavigation.css";

const UserNavigation = () => {
  return (
    <div className="container-fluid m-0 g-0">
      <div className="row flex-nowrap g-0">
        <div className="d-flex flex-row">
          <div className="col-auto">
            <div className="UserNav sticky-top">
              {/* profile section */}
              <img
                src={process.env.PUBLIC_URL + "/images/profile.png"}
                className="profilpic"
              />
              <h2>Shahmy</h2>
              <h3>Petronas Digital</h3>

              <div className="link">
                <ul>
                  {/* dashboard */}
                  <li>
                    <a href="/creator-dashboard">
                      <img
                        src={process.env.PUBLIC_URL + "/images/dashboard.png"}
                        className="dashboardLogo"
                      />
                      <br />
                      Dashboard
                    </a>
                  </li>
                  {/* feedback */}
                  <li>
                    <a href="/feedback">
                      <img
                        src={process.env.PUBLIC_URL + "/images/thumbUp.png"}
                      />
                      <img
                        src={process.env.PUBLIC_URL + "/images/thumbDown.png"}
                      />
                      <br />
                      Feedback
                    </a>
                  </li>
                  {/* bookmark */}
                  <li>
                    <a href="/bookmark">
                      <img
                        src={process.env.PUBLIC_URL + "/images/bookmark.png"}
                      />
                      <br />
                      Bookmark
                    </a>
                  </li>
                  {/* contact admin */}
                  <li>
                    <a href="/contact">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/contactAdmin.png"
                        }
                      />
                      <br />
                      Contact Admin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* call component */}
          <Router>
            <Switch>
              <Route path="/creator-dashboard">
                <DashboardCV />
              </Route>
              <Route path="/feedback">
                <FeedbackEUList />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default UserNavigation;
