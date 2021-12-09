import React from "react";
import ReactDOM from "react-dom";
import FAQNew from "./";

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FAQNew />, div);
  ReactDOM.unmountComponentAtNode(div);
});