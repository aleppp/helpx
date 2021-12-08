import React from "react";
import "../style.css";
import Buttons from "../../../../Buttons/Buttons";

export default function AddNewFAQ() {
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
    <div class="container-addnew-admin">
      <div>
        <label class="switch">
          <input type="checkbox"></input>
          <span class="slider round"></span>
        </label>
        <p id="visible">Visibility</p>
      </div>
      <br />
      <br />
      <br />
      <div className="display-row">
        <label className="section-label" for="faqsection">
          FAQ Section
        </label>
        <select className="select-section" id="faqsection" name="faqsection">
          <option value="ao">Alpha Oil</option>
          <option value="pd">Petronas Digital</option>
          <option value="pu">Petronas Up</option>
          <option value="se">Setel</option>
        </select>

        <label for="faqorder">FAQ Order</label>
        <select className="select-order" id="faqorder" name="faqorder">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <label className="float-left" for="question">
        Question
      </label>
      <textarea
        id="question"
        name="question"
        placeholder="Enter a question."
      ></textarea>
      <label className="float-left" for="answer">
        Answer
      </label>
      <textarea
        id="answer"
        name="answer"
        placeholder="Enter an answer."
      ></textarea>
      <div className="button-float">
        <Buttons button={button[0]}></Buttons>
        <Buttons button={button[1]}></Buttons>
      </div>
    </div>
  );
}
