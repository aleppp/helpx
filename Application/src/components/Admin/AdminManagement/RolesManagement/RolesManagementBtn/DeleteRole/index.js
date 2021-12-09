import React from "react";
import "./style.css";
import Button from "../../../Buttons/Buttons";

export default function FAQNew() {
  const button = [
    {
      type: "button-blue",
      text: "Yes",
    },
    {
      type: "button-red",
      text: "No",
    },
  ];

  return (
    <div class="container">
      <br />

      <h1 class="head">Delete User</h1>
      <br></br>
      <label for="question">User Name</label>
      <textarea
        id="question"
        name="question"
        placeholder="Nisa Asri"
      ></textarea>
      <label for="answer">Roles Description</label>
      <textarea
        id="answer"
        name="answer"
        placeholder="Content Contributor"
      ></textarea>
      <br />
      <Button button={button[0]}></Button>
      <Button button={button[1]}></Button>
    </div>
  );
}
