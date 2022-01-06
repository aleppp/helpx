import React from "react";
import "./style.css";

function CounterWidget(props) {
  return (
    <div className="counter-widget">
      <div className="title">
        <td>
          <div> {props.title}</div>
        </td>
      </div>
      <div className="count">
        <td>
          <div> {props.count} </div>
        </td>
      </div>
    </div>
  );
}

export default CounterWidget;
