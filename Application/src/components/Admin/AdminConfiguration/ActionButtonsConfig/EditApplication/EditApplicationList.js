import "../style.css";
import Buttons from "../../../Buttons/Buttons";

export default function EditListOfApp() {
  const button = [
    {
      type: "button-blue-small",
      text: "Save",
    },
    {
      type: "button-red",
      text: "Cancel",
    },
  ];

  return (
    <div class="container-editapp-1">
      <h2 className="title-editapp">Edit Application</h2>
      <br></br>
      <div className="display-column">
        <label className="float-left">Application Name</label>
        <textarea
          className="textarea-app"
          name="question"
          placeholder="Apha Oil"
        ></textarea>
        <br></br>
        <label className="float-left" for="answer">
          Application URL
        </label>
        <textarea
          className="textarea-app"
          name="answer"
          placeholder="petronas.com/AlphaOil"
        ></textarea>
      </div>
      <div className="float-center-app">
        <Buttons button={button[0]}></Buttons>
        <Buttons button={button[1]}></Buttons>
      </div>
    </div>
  );
}
