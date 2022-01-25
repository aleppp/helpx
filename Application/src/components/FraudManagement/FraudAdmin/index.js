import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Pagination from "../../Layout/Navigation/Pagination/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { EditFraud } from "./FraudSlide";

function FraudConfig() {
  const [fraudManagement, setFraudManagement] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/fraudmanagement/sel")
      .then((res) => {
        if (res.status === 200) setFraudManagement(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="fraud-config-component">
        <h1>Fraud Management</h1>
        <button className="button-blue">Add New</button>
      </div>

      <table>
        <tr>
          <th>
            ID
            <img
              className="dropdown"
              src={process.env.PUBLIC_URL + "/images/expandMore.png"}
            />
          </th>
          <th>Term</th>
          <th>Action</th>
        </tr>

        <tbody>
          {fraudManagement.map((fraud, index) => (
            <tr key={index}>
              <td>{fraud.id}</td>
              <td>{fraud.term}</td>
              <td>
                <button className="button-green" onClick={() => setShow(!show)}>
                  Edit
                </button>
                <button className="button-red">Delete</button>
              </td>
              <td>
                {show ? (
                  <div>
                    <EditFraud />
                  </div>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Pagination />
      </div>
    </div>
  );
}

export default FraudConfig;
