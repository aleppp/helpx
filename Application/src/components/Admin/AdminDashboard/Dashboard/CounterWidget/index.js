import React from "react";
import "./style.css";

function CounterWidget(props) {
  return (
    <div className="container-fluid" id="counter-widget">
      <div className="d-flex">
        <div className="col-sm text-center mx-5 my-4"> {props.title}</div>
        <div className="col-sm p-3 text-center my-4"> {props.count}</div>
      </div>
    </div>
  );
}

export default CounterWidget;
