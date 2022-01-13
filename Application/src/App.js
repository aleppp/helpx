import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Auth from "./services/Auth/Auth";
import Callback from "./services/Auth/Callback";
import EndUserHomePage from "./components/HomePage/EndUserHomePage/EndUserHomePage";
import AuditLogDatatable from "./components/Admin/AdminAuditLog/AuditLogDatatable";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <>
        {/* <EndUserHomePage /> */}
        {/* <Header auth={this.auth} />  */}{" "}
        <Switch>
          <div className="App">
            <Route
              path="/"
              exact
              render={(props) => <LandingPage {...props} />}
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
          </div>
        </Switch>
      </>
    );
  }
}

export default App;
