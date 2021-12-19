import React from "react";
import "./style.css";
import Button from "./button";
import Pagination from "../Pagination/pagination";

const Buttons = [
  {
    type: "button-blue",
    text: "Add New",
  },
  {
    type: "button-green",
    text: "Edit",
  },
  {
    type: "button-red",
    text: "Delete",
  },
];

const fraud = [
  { ID: "001", Term: "Petronas Digital" },
  { ID: "002", Term: "Alpha Oil" },
  { ID: "003", Term: "Petronas Up" },
  { ID: "004", Term: "Petronas Digital" },
  { ID: "005", Term: "Petronas Up" },
  { ID: "006", Term: "Alpha Oil" },
];

function FraudConfig() {
  return (
    <div>
      <div className="fraud-config-component">
        <h1>Fraud Management</h1>
        <Button button={Buttons[0]}></Button>
      </div>

      <table>
        <tr>
          <th>
            ID
            {/*<img
              className="dropdown"
              alt="dropdown arrow"
              src={process.env.PUBLIC_URL + "/images/expandMore.png"}
            />*/}
          </th>
          <th>Term</th>
          <th>Action</th>
        </tr>

        <tbody>
          {fraud.map((item) => {
            return (
              <tr>
                <td>{item.ID}</td>
                <td>{item.Term}</td>
                <td>
                  <center>
                    <Button button={Buttons[1]}></Button>{" "}
                    <Button button={Buttons[2]}></Button>
                  </center>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default FraudConfig;
