import "./Content.css";
import UserNavigation from "./Navigation/UserNavigation.js";
import UserHeader from "./Navigation/UserHeader.js";
import NormalEditor from "./Editor/NormalEditor.js";
import Index from "./Details/index.js";
import FeedbackListCCRN from "../Feedback/FeedbackListCCRN";

function Content() {
  return (
    <div className="Content-Root">
      <div className="Content-Nav">
        <UserNavigation />
      </div>
      <div className="Content-Header">
        <UserHeader />
      </div>
      <div className="Content-NormalEditor">
        <NormalEditor />
      </div>
      <div className="Content-App">
        <Index />
      </div>
      <div className="Content-Feedback">
        <FeedbackListCCRN />
      </div>
    </div>
  );
}

export default Content;
