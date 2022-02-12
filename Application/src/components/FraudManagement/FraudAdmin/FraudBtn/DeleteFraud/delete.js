import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Button from "../../../../Buttons/Buttons";

export const DeleteFraud = (props) => {
  const [fraud, setFraud] = useState(props.fraud);
  const editAdminFraud = (fraudData) => {
    axios
      .post("/fraudmanagement/upd", {
        fraudData,
      })
      .catch((error) => {
        console.log("Failed to edit the term", error);
      });
  };

  const button = [
    {
      type: "button-blue-small",
      text: "Confirm",
    },
    {
      type: "button-red",
      text: "Cancel",
    },
  ];

  return (
    <div class="container-deletefraud">
      <p className="title-deletefraud">Delete</p>
      <label className="float-center" for="name">
        Confirm to delete?
      </label>
      <br />
      <br />
      <div className="float-center">
        <Button button={button[0]}></Button>
        <Button button={button[1]}></Button>
      </div>
    </div>
  );
};
