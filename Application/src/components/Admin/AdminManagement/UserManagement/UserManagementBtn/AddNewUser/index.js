import React from "react";
import "./style.css";
import Button from "../../../../../Buttons/Buttons";

const button = [
  {
    type: "button-red",
    text: "Delete",
  },
  {
    type: "button-blue-small",
    text: "Submit",
  },
];
export default function App() {
  return (
    <div class="container">
      <h2> Add New User </h2>

      <br />
      <label for="username">Name</label>
      <textarea id="name" name="name" placeholder="Enter user name."></textarea>

      <label for="useremail">Email</label>
      <textarea
        id="useremail"
        name="answer"
        placeholder="Enter an email."
      ></textarea>
      <label for="appn">Application</label>
      <textarea id="app" name="app" placeholder="Application."></textarea>
      <br />
      <div className="center">
        <Button button={button[1]}></Button>
        <Button button={button[0]}></Button>
      </div>
    </div>
  );
}
