import "./index.css";

const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };

function Index() {
  return (
    <div class="superContain">
      <div className="container-details">
        <h2>Details</h2>
        <button className="darkgreen" onclick="preview()">
          Preview
        </button>
        <div className="word">
          <input type="checkbox" />
          <label htmlFor="Visibility"> Visibility </label>
          <div className="tooltip">
            <img
              src={process.env.PUBLIC_URL + "/images/helpIcon.png"}
              className="helpIcon"
            />
            <span className="tooltiptext">
              <p>Visible On: End user can view the content</p>
              <br />
              Visible Off: Only Content creator, Content approval and Admin can
              view this content
            </span>
          </div>
        </div>
        <div className="word">
          <input type="checkbox" />
          <label htmlFor="Show Feedback Button"> Show Feedback Button </label>
          <div className="tooltip">
            <img
              src={process.env.PUBLIC_URL + "/images/helpIcon.png"}
              className="helpIcon"
            />
            <span className="tooltiptext">
              <p>Feedback On: End user can give feedback about the content</p>
              <br />
              Feedback Off: End user cannot give feedback about the content
            </span>
          </div>
        </div>
        <div className="word">
          <img
            src={process.env.PUBLIC_URL + "/images/calendar.png"}
            className="calendar"
          />
          <label htmlFor="Schedule">Schedule: 30/2/2022 </label>
          <a href="www.editlink.com">Edit</a>
        </div>
      </div>
      <div class="buttonContainer">
        <button className="blue" onclick="sendForApproval()">
          Send for Approval
        </button>
        <button className="red" onclick="delete()">
          Delete
        </button>
        <button className="green" onclick="saveAsDraft()">
          Save as Draft
        </button>
      </div>
    </div>
  );
}

export default Index;
