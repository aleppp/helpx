import React from "react";
import "./style.css";
import Button from "../../Buttons/Buttons";

export default function FAQNew() {
  const button = [
    {
      type: "button-blue",
      text: "Submit",
    },
    {
      type: "button-red",
      text: "Cancel",
    },
  ];

  return (
    <div class="container">
      <br />

      <h1 class="head">Edit Role</h1>
      <br></br>
      <label for="question">Role Name</label>
      <textarea
        id="question"
        name="question"
        placeholder="Role Name"
      ></textarea>
      <label for="answer">Role Description</label>
      <textarea
        id="answer"
        name="answer"
        placeholder="Role Description"
      ></textarea>
      <br />
      <Button button={button[0]}></Button>
      <Button button={button[1]}></Button>
    </div>
  );
}
