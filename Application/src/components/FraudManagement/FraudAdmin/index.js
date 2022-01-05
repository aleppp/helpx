import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Button from "../../Buttons/Buttons";
//import Pagination from "../Pagination/pagination";

function FraudConfig() {
  const [fraudManagement, setFraudManagement] = useState([]);

  useEffect(() => {
    axios
      .get("/fraudmanagement/sel")
      .then((res) => {
        if (res.status === 200) setFraudManagement(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

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

  return (
    <div>
      <div className="fraud-config-component">
        <h1>Fraud Management</h1>
        <Button button={Buttons[0]}></Button>
      </div>

      <table>
        <tr>
          <th>ID</th>
          <th>Term</th>
          <th>Action</th>
        </tr>

        <tbody>
          {fraudManagement.map((fraud, index) => (
            <tr key={index}>
              <td>{fraud.id}</td>
              <td>{fraud.term}</td>
              <td>
                <center>
                  <Button button={Buttons[1]}></Button>{" "}
                  <Button button={Buttons[2]}></Button>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FraudConfig;
