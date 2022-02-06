import React, { useState } from "react";
import "./style.css";
import Button from "../../Buttons/Buttons";
<<<<<<< HEAD
=======
import { Form } from "react-bootstrap";
>>>>>>> 8eed5e8c9f7a2a99c0d5afa420f7f6ae0c25d57e

export const EditFAQCC = (props) => {
  const [fql, setFAQ] = useState(props.fql);
  const [showEdit, setShowEdit] = useState(false);
<<<<<<< HEAD
  const handleCloseEdit = (props) => setShowEdit(false);
=======
  const handleCloseEdit = () => setShowEdit(false);
>>>>>>> 8eed5e8c9f7a2a99c0d5afa420f7f6ae0c25d57e

  const button = [
    {
      type: "button-red",
      text: "Cancel",
    },
    {
      type: "button-green",
      text: "Save",
    },
  ];

  return (
    <div class="container-editfaq-cc">
<<<<<<< HEAD
      <h2 className="title-editfaq">Edit FAQ</h2>
=======
      <h2 className="title-addfaq">Edit FAQ</h2>
>>>>>>> 8eed5e8c9f7a2a99c0d5afa420f7f6ae0c25d57e
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
      <div className="display-column">
        <label className="float-left">Question</label>
        <textarea
          className="textarea-question"
          name="question"
          placeholder="Enter a question."
        >
          What is a release notes?
        </textarea>
        <label className="float-left" for="answer">
          Answer
        </label>
        <textarea
          className="textarea-answer"
          name="answer"
          placeholder="Enter an answer."
        >
          Release notes are documents that are distributed with software
          products
        </textarea>
      </div>
      <div className="button-float float-right">
        <Button button={button[1]}></Button>
<<<<<<< HEAD
=======
        <button onClick={handleCloseEdit} className="button-red">
          Cancel
        </button>
>>>>>>> 8eed5e8c9f7a2a99c0d5afa420f7f6ae0c25d57e
      </div>
    </div>
  );
};

export default EditFAQCC;
