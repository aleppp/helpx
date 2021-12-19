import "./style.css";
import Button from "./button";

export default function App() {
  const button = [
    {
      type: "button-green",
      text: "Save",
    },
    {
      type: "button-red",
      text: "Cancel",
    },
  ];

  return (
    <div class="container">
      <label for="question">Term</label>
      <textarea id="term" name="term" placeholder="Enter a term."></textarea>
      <br />
      <br />
      <Button button={button[0]}></Button>
      <Button button={button[1]}></Button>
    </div>
  );
}
