import React from "react";
import "./style.css";
import Button from "../../../Buttons/Buttons";

export const EditFraud = (props) => {
  /*const [fraud, setFraud] = useState(props.fraud); //just disabled the comment if this still needed
  const editAdminFraud = (fraudData) => {
    axios
      .post("/fraudmanagement/upd", {
        fraudData,
      })
      .catch((error) => {
        console.log("Failed to edit the term", error);
      });
  }; */ 

  const button = [
    {
      type: "button-blue-small",
      text: "Save",
    },
    {
      type: "button-red",
      text: "Cancel",
    },
  ];

  return (
    <div class="container-editfraud">
      <p className="title-editfraud">Edit Fraud</p>
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
        <Button button={button[0]}></Button>
        <Button button={button[1]}></Button>
      </div>
    </div>
  );
};
