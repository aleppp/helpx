import React, { useState, useEffect } from "react";
import "../style.css";
import axios from "axios";

export default function DeleteFraud() {
  const [fraudDelete, setFraudDelete] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8080/content/ins")
      .then((res) => {
        if (res.status === 200) {
          alert("success!");
        }
      })
      .catch((err) => console.log(err));
  });

  const handleDelete = () => {};

  return (
    <div class="container-deletefraud">
      <label className="title-deletefraud">Delete Term</label>
      <br />
      <br />
      <h5 className="float-center-text">Confirm to delete?</h5>
      <br />
      <br />
      <div className="float-center">
        <button className="button-blue-small" onClick={handleDelete}>
          Confirm
        </button>
        <button className="button-red">Cancel</button>
      </div>
    </div>
  );
}
