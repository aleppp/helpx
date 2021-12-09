import React from "react";
import "./Header.css";
import "../../Buttons/Buttons.css";
import Buttons from "../../Buttons/Buttons";

const Button = [
  {
    type: "button-green",
    text: "Login",
  },
];

function Header() {
  return (
    <div className="canvas">
      <div className="container-1">
        <div className="col-1">Helpx</div>
        <div className="col-2"></div>
        <div className="col-3">
          <Buttons button={Button[0]}></Buttons>
        </div>
      </div>
    </div>
  );
}

export default Header;
