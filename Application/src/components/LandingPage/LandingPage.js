import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import "./LandingPage.css";
import VerticalBar from "./VerticalBar/VerticalBar";
import Header from "./Header/Header";
import HorizontalBar from "./HorizontalBar/HorizontalBar";
import Menu from "./Menu/Menu";
import Auth from "../../Services/Auth/Auth";

class LandingPage extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;

    return (
      <div className="container">
        <div className="nav">
          <VerticalBar />
        </div>
        <div className="body">
          <div className="header">
            <Route
              path="/"
              exact
              render={(props) => <Header auth={this.auth} {...props} />}
            />
          </div>
          <div className="navhor">
            <HorizontalBar />
          </div>
          <div className="menu">
            {isAuthenticated() ? <p>Sucess</p> : <Menu />}
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
