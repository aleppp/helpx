import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Auth from "./services/Auth/Auth";
import Callback from "./services/Auth/Callback";
import EndUserHomePage from "./components/HomePage/EndUserHomePage/EndUserHomePage";
import AuditLogDatatable from "./components/Admin/AdminAuditLog/AuditLogDatatable";
import AdminHomePage from "./components/Admin/AdminDashboard";
import Content from "./components/ReleaseNotes/Content";
import ProtectedRoute from "./services/ProtectedRoute";
import DashboardCV from "./components/ReleaseNotes/Dashboard/DashboardCC";
import UserNavigation from "./components/ReleaseNotes/Navigation/UserNavigation";
import Header from "./components/LandingPage/Header/Header";
import NavigationBar from "./components/Layout/Navigation/AdminNavigation";
import FeedbackEUList from "./components/Feedback/FeedbackListEU/FeedbackListEU";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    const isAdmin = localStorage.getItem("isAdmin");
    return (
      <div className="chunk">
        {(window.location.href.toString() === "http://localhost:3000/") ? null:<Header />}
        {((window.location.href.toString() === "http://localhost:3000/") ?
         null:(isAdmin === "true") ? <NavigationBar />:<UserNavigation/> )}
        <Switch>
            <Route
              exact
              path="/"
              render={(props) => <LandingPage {...props} />}
            />
            <Route
              exact
              path="/callback"
              render={(props) => <Callback auth={this.auth} {...props} />}
            />
            <ProtectedRoute
              exact
              path="/admin/home"
              render={(props) => <AdminHomePage {...props}  />}
            />
            <ProtectedRoute
              exact
              path="/homepage"
              render={(props) => (
                <EndUserHomePage auth={this.auth} {...props}  />
              )}
            />
            <ProtectedRoute
              exact
              path="/admin/audit-logs"
              render={(props) => (
                <AuditLogDatatable auth={this.auth} {...props}  />
              )}
            />
            <ProtectedRoute
              exact
              path="/creator/dashboard"
              render={(props) => (
                <DashboardCV auth={this.auth} {...props}  />
              )}
            />
            <ProtectedRoute
              exact
              path="/editor/normal"
              render={(props) => (
                <Content auth={this.auth} {...props}  />
              )}
            />
            <ProtectedRoute
              exact
              path="/content/feedback"
              render={(props) => (
                <FeedbackEUList auth={this.auth} {...props}  />
              )}
            />
        </Switch>
      </div>
    );
  }
}

export default App;
