import React, { useState } from "react";
import "./style.css";

export const AddFraud = () => {
  const [fraudadd, setFraudadd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const main = { fraudadd };

    fetch("http://localhost:8080/fraudmanagement/", {
      method: "POST",
      headers: "Content-Type: application/json",
      fraudadd: JSON.stringify(main),
    }).then(() => {
      console.log("new fraud added");
    });
  };

  return (
    <div class="container-addfraud">
      <p className="title-addfraud">Add New</p>
      <br />
      <label className="float-left" for="name">
        Term
      </label>
      <textarea
        className="textarea-name-del"
        name="term"
        placeholder="Enter a term."
      ></textarea>

      <br />
      <br />
      <div className="float-center">
        <button className="button-blue-small" onClick={handleSubmit}>
          Create
        </button>
        <button className="button-red" onClick={handleSubmit}>
          Cancel
        </button>
      </div>
    </div>
  );
};
