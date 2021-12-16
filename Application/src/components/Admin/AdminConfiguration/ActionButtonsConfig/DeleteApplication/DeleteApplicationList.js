import React from "react";
import "../style.css";
import Buttons from "../../../Buttons/Buttons";

export default function DeleteApplicationList() {
  const button = [
    {
      type: "button-blue-small",
      text: "Delete",
    },
    {
      type: "button-red",
      text: "Cancel",
    },
  ];

  return (
    <div class="container-deleteapp">
      <p className="title-deleteapp">Delete Application</p>
      <br />
      <label className="float-left" for="question">
        Application Name
      </label>
      <textarea
        className="textarea-question-del"
        name="question"
        placeholder="Enter an answer"
      >
        Alpha Oil
      </textarea>
      <label className="float-left" for="answer">
        Application URL
      </label>
      <textarea
        className="textarea-answer-del"
        name="answer"
        placeholder="Enter an answer."
      >
        petronas.com/AlphaOil
      </textarea>
      <br />
      <br />
      <div className="float-center">
        <p>Confirm Delete?</p>
        <Buttons button={button[0]}></Buttons>
        <Buttons button={button[1]}></Buttons>
      </div>
    </div>
  );
}
