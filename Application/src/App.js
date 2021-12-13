import React, { Component } from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Auth from "./services/Auth/Auth";
import Header from "./components/LandingPage/Header/Header";
// import Callback from "./services/Auth/Callback";
// import ListOfReleaseNotes from "./components/UserHomepage/UserHomepage";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header auth={this.auth} />
          <div className="App">
            <Route
              path="/"
              exact
              render={(props) => <LandingPage {...props} />}
            />
            {/* <Route path="/UserHomepage" component={ListOfReleaseNotes} /> */}
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
