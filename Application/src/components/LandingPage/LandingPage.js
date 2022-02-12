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
      <div className="container-fluid" id="landing-page">
        <div className="row p-0">
          <div className="col p-0 d-none d-sm-block">
            <div>
              <VerticalBar />
            </div>
          </div>
          <div className="col-lg-10 col-sm-1 p-0 g-0">
            <div className="row">
              <div className="header">
                <Header auth={this.auth} />
              </div>
              <div className="navhor d-none d-sm-block">
                <HorizontalBar />
              </div>
              <div className="body d-none d-sm-block">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
