import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Auth from "./services/Auth/Auth";
import Callback from "./services/Auth/Callback";
import EndUserHomePage from "./components/HomePage/EndUserHomePage/EndUserHomePage";
import AuditLogDatatable from "./components/Admin/AdminAuditLog/AuditLogDatatable";
import AdminHomePage from "./components/Admin/AdminDashboard";
import NavigationBar from "./components/Layout/Navigation/AdminNavigation";
import Dashboard from "./components/ReleaseNotes/Dashboard";
import Content from "./components/ReleaseNotes/Content";
import ApplicationSettingsList from "./components/Admin/AdminConfiguration/ApplicationSettings/ApplicationSettingsList";
import UserManagement from "./components/Admin/AdminManagement/UserManagement";
import RolesManagement from "./components/Admin/AdminManagement/RolesManagement";
import TemplateEditor from "./components/ReleaseNotes/Editor/TemplateEditor";
import NormalEditor from "./components/ReleaseNotes/Editor/NormalEditor";
import FraudConfig from "./components/FraudManagement/FraudAdmin";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <div className="chunk">
        <Router>
          <NavigationBar />
          <Switch>
            <div className="App">
              <Route
                path="/"
                exact
                render={(props) => <LandingPage {...props} />}
              />
              <Route
                path="/admin-home"
                exact
                render={(props) => <AdminHomePage {...props} />}
              />
              <Route
                path="/callback"
                exact
                render={(props) => <Callback auth={this.auth} {...props} />}
              />
              <Route
                path="/homepage"
                exact
                render={(props) => (
                  <EndUserHomePage auth={this.auth} {...props} />
                )}
              />
              <Route
                path="/audit-logs"
                exact
                render={(props) => (
                  <AuditLogDatatable auth={this.auth} {...props} />
                )}
              />
              <Route
                path="/creator-dashboard"
                exact
                render={(props) => <Dashboard auth={this.auth} {...props} />}
              />
              <Route
                path="/normal-editor"
                exact
                render={(props) => <Content auth={this.auth} {...props} />}
              />
              <Route
                path="/app-settings"
                exact
                render={(props) => (
                  <ApplicationSettingsList auth={this.auth} {...props} />
                )}
              />
              <Route
                path="/user-management"
                exact
                render={(props) => (
                  <UserManagement auth={this.auth} {...props} />
                )}
              />
              <Route
                path="/roles-management"
                exact
                render={(props) => (
                  <RolesManagement auth={this.auth} {...props} />
                )}
              />
              <Route
                path="/template-editor"
                exact
                render={(props) => (
                  <TemplateEditor auth={this.auth} {...props} />
                )}
              />
              <Route
                path="/fraud-management"
                exact
                render={(props) => <FraudConfig auth={this.auth} {...props} />}
              />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
