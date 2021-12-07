import "./components/ReleaseNotes/Details/index.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };

function index() {
  return (
    <div className="superContain">
      <div className="container">
        <h2>Details</h2>

        <button className="darkgreen" onclick="preview()">
          Preview
        </button>

        <div className="word">
          {/* <Switch {...label} size="small" /> */}
          <input type="checkbox" />
          <label htmlFor="Visibility"> Visibility </label>
          <div className="tooltip">
            <HelpOutlineIcon fontSize="extrasmall" />
            <span className="tooltiptext">
              <p>Visible On: End user can view the content</p>
              <br />
              Visible Off: Only Content creator, Content approval and Admin can
              view this content
            </span>
          </div>
        </div>

        <div className="word">
          {/* <Switch {...label} size="small" /> */}
          <input type="checkbox" />
          <label htmlFor="Show Feedback Button"> Show Feedback Button </label>
          <div className="tooltip">
            <HelpOutlineIcon fontSize="extarasmall" />
            <span className="tooltiptext">
              <p>Feedback On: End user can give feedback about the content</p>
              <br />
              Feedback Off: End user cannot give feedback about the content
            </span>
          </div>
        </div>

        <div className="word">
          <div className="calander">
            <DateRangeOutlinedIcon />
          </div>
          <label htmlFor="Schedule">Schedule: 30/2/2022 </label>
          <a href="www.editlink.com">Edit</a>
        </div>
      </div>

      <div className="buttonContainer">
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

export default index;
