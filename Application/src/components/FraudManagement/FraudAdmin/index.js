import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Pagination from "../../Layout/Navigation/Pagination/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { EditFraud } from "./FraudBtn";
import { DeleteFraud } from "./FraudBtn/delete";

function FraudConfig() {
  const [fraudManagement, setFraudManagement] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showDel, setShowDel] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/fraudmanagement/sel")
      .then((res) => {
        if (res.status === 200) setFraudManagement(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="fraud-config-component">
          <h1>Fraud Management</h1>
          <button className="button-blue">Add New</button>
        </div>
      </div>
      <table id="fraud">
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
                <button
                  className="button-green"
                  onClick={() => setShowEdit(!showEdit)}
                >
                  Edit
                </button>
                <button
                  className="button-red"
                  onClick={() => setShowDel(!showDel)}
                >
                  Delete
                </button>
              </td>
              <td>
                {showEdit ? (
                  <div>
                    <EditFraud />
                  </div>
                ) : null}
                {showDel ? (
                  <div>
                    <DeleteFraud />
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
