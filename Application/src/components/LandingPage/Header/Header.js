import React, { Component } from "react";
import "./Header.css";
import "../../Buttons/Buttons.css";
// import { Link } from "react-router-dom";
import Auth from "../../../services/Auth/Auth";

class Header extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
    // const { isAuthenticated, login, logout } = this.props.auth;
  }
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
      <div className="canvas">
        <div className="container-1">
          <div className="col-1">Helpx</div>
          <div className="col-2"></div>
          <div className="col-3">
            <button onClick={isAuthenticated() ? logout : login}>
              {isAuthenticated() ? "Log Out" : "Log In"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
