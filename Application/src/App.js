import React, { Component } from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Auth from "./services/Auth/Auth";
import Callback from "./services/Auth/Callback";
import EndUserHomePage from "./components/HomePage/EndUserHomePage/EndUserHomePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <>
        {/* <EndUserHomePage /> */}
        <BrowserRouter>
          {/* <Header auth={this.auth} />  */}
          <div className="App">
            <Route
              path="/"
              exact
              render={(props) => <LandingPage {...props} />}
            />
            <Route
              path="/callback"
              render={(props) => <Callback auth={this.auth} {...props} />}
            />
            {/* <Route
              path="/homepage"
              exact
              render={(props) => <EndUserHomePage {...props} />}
            /> */}
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
