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
      <h2> Add New Role </h2>

      <br />
      <label for="rolename">Role Name</label>
      <textarea
        id="rolename"
        name="rolename"
        placeholder="Enter the role."
      ></textarea>

      <br />
      <label for="roledesc">Role Description</label>
      <textarea
        id="roledesc"
        name="roledesc"
        placeholder="Role Description."
      ></textarea>

      <div className="center">
        <Button button={button[1]}></Button>
        <Button button={button[0]}></Button>
      </div>
    </div>
  );
}
