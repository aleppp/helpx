import "./App.css";
import Button from "./button";

export default function App() {
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
    <div class="container">
      <div>
        <label class="switch">
          <input type="checkbox"></input>
          <span class="slider round"></span>
        </label>
        <p id="visible">Visibility</p>
      </div>
      <br />
      <label for="faqsection">FAQ Section</label>
      <select id="faqsection" name="faqsection">
        <option value="ao">Alpha Oil</option>
        <option value="pd">Petronas Digital</option>
        <option value="pu">Petronas Up</option>
        <option value="se">Setel</option>
      </select>
      <label for="question">Question</label>
      <textarea
        id="question"
        name="question"
        placeholder="Enter a question."
      ></textarea>
      <label for="answer">Answer</label>
      <textarea
        id="answer"
        name="answer"
        placeholder="Enter an answer."
      ></textarea>
      <Button button={button[0]}></Button>
      <Button button={button[1]}></Button>
    </div>
  );
}


