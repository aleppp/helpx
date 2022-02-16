import FeedbackListCCRN from "../Feedback/FeedbackListCCRN";
import UserHeader from "../ReleaseNotes/Navigation/UserHeader";
import UserNavigation from "../ReleaseNotes/Navigation/UserNavigation";
import FAQList from "./FAQListEU";

function FAQCCPage() {
  return (
    <div className=" container-fluid g-0">
      <div className="row g-0">
        <div className="col-lg-12 col-md-6 col-sm-3">
          <UserNavigation />
          <div className="col-lg-12">
            <UserHeader />
          </div>

          <div className="row g-0">
            <div className="col-lg-6">
              <FAQList />
            </div>
            <div className="col-lg-6">
              <FeedbackListCCRN />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQCCPage;
