import React, { Component } from "react";
// import { Route, Redirect } from "react-router-dom";
import "./LandingPage.css";
import Header from "./Header/Header";
import VerticalBar from "./VerticalBar/VerticalBar";
import HorizontalBar from "./HorizontalBar/HorizontalBar";
import Menu from "./Menu/Menu";
import Auth from "../../services/Auth/Auth";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    // const { isAuthenticated, login } = this.props.auth;

    return (
      <div className="container">
        <div className="nav">
          <VerticalBar />
        </div>
        <Header auth={this.auth} />
        <div className="body">
          <div className="navhor">
            <HorizontalBar />
          </div>
          <div className="menu">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
