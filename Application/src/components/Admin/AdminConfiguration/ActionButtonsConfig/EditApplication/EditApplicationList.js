import "../style.css";

export default function EditListOfApp({ appList, ...props }) {
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
        <button className="button-blue-small">Save</button>
        <button className="button-red" onClick={() => props.changeState(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
