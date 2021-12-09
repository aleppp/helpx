import React from "react";
import "./Menu.css";
import Buttons from "../../Buttons/Buttons";

const Button = [
  {
    type: "button-green-big",
    text: "Release Notes",
  },
  {
    type: "button-green-big",
    text: "Documentation",
  },
];

function Menu() {
  return (
    <div>
      <div className="content">
        <div className="content-1">
          <img
            className="images-1"
            src={process.env.PUBLIC_URL + "/images/doc.png"}
          />
          <Buttons button={Button[0]}></Buttons>
        </div>
        <div className="content-2">
          {" "}
          <img
            className="images-1"
            src={process.env.PUBLIC_URL + "/images/note.png"}
          />
          <Buttons button={Button[1]}></Buttons>
        </div>
      </div>
    </div>
  );
}

export default Menu;
