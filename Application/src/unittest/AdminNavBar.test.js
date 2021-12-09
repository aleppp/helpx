import React from "react";
import ReactDOM from "react-dom";
import VerticalBar from "./VerticalBar";

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VerticalBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
