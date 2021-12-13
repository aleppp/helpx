import { Route, Redirect } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Auth from "./Services/Auth/Auth";
import { Component } from "react";
import Header from "./components/LandingPage/Header/Header";
import Callback from "./Services/Auth/Callback";
import ListOfReleaseNotes from "./components/UserHomepage/UserHomepage";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <>
        <Header auth={this.auth} />
        <div className="App">
          <Route
            path="/"
            exact
            render={(props) => <LandingPage auth={this.auth} {...props} />}
          />
          <Route path="/UserHomepage" component={ListOfReleaseNotes} />
        </div>
      </>
    );
  }
}

export default App;
