import React from "react";
import "./style.css";
import Button from "../../Buttons/Buttons";

export default function WordFilterNew() {
  const button = [
    {
      type: "button-red",
      text: "Delete",
    },
    {
      type: "button-green",
      text: "Create",
    },
  ];
  return (
    <div class="container">
      <p>FR01</p>
      <label for="term">Term</label>
      <textarea id="term" name="term" placeholder="Enter a term."></textarea>
      <br />
      <div class="row">
        <Button button={button[0]}></Button>
        <Button button={button[1]}></Button>
      </div>
    </div>
  );
}

