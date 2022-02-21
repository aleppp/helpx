import "./index.css";

function Detail() {
  return (
    <div className="superContain">
      <div className="container-details">
        <h2>Details</h2>

        <button className="darkgreen-detail" onclick="preview()">
          Preview
        </button>

        <div className="form-check form-switch d-flex detail-input">
          <input 
            className="form-check-input align-self-center mt-2" 
            type="checkbox" 
            id="visiblity"
          />
          <label 
            className="form-check-label ms-3 mt-2"
            htmlFor="visiblity"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="On: End user can view the content&#013;Off: Only Content creator, Content approval and Admin can
            view this content"
          >
            Visible to End-User
            <img
              src={process.env.PUBLIC_URL + "/images/helpIcon.png"}
              className="helpIcon"
            />
          </label>
        </div>
      
        <div className="form-check form-switch d-flex detail-input">
          <input 
            className="form-check-input align-self-center mt-2" 
            type="checkbox" 
            id="fbutton"
          />
          <label 
            className="form-check-label align-self-center ms-3 mt-3" 
            htmlFor="fbutton"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-html="true"
            title="Feedback On: End user can give feedback about the content&#10;Feedback Off:
              End user cannot give feedback about the content"
          >
            Feedback Button
            <img
              src={process.env.PUBLIC_URL + "/images/helpIcon.png"}
              className="helpIcon"
            />
          </label>
        </div>
        
        <div className="detail-input">
          <label htmlFor="schedule">Schedule</label>
          <input type="date" id="schedule" />
        </div>
      </div>

      <div className="buttonContainer">
        <button className="blue-detail" onclick="sendForApproval()">
          Send for Approval
        </button>
        <button className="red-detail" onclick="delete()">
          Delete
        </button>
        <button className="green-detail" onclick="saveAsDraft()">
          Save as Draft
        </button>
      </div>
    </div>
  );
}

export default Detail;
