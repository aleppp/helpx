import React from "react";
import "./HorizontalBar.css";
import Buttons from "../../Buttons/Buttons";

const Button = [
  {
    type: "button-white-big",
    text: "Release Notes",
  },
  {
    type: "button-white-big",
    text: "Documentation",
  },
  {
    type: "button-white-big",
    text: "FAQ",
  },
];

function HorizontalBar() {
  return (
    <div className="midnav">
      <div className="container-nav">
        <div className="nav-1">
          {" "}
          <Buttons button={Button[0]}></Buttons>
        </div>
        <div className="nav-2">
          {" "}
          <Buttons button={Button[1]}></Buttons>
        </div>
        <div className="nav-3">
          {" "}
          <Buttons button={Button[2]}></Buttons>
        </div>
      </div>
    </div>
  );
}

export default HorizontalBar;
