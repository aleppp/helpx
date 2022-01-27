import "./Content.css";
import UserNavigation from "./Navigation/UserNavigation.js";
import UserHeader from "./Navigation/UserHeader.js";
import NormalEditor from "./Editor/NormalEditor.js";
import Index from "./Details/index.js";
import FeedbackListCCRN from "../Feedback/FeedbackListCCRN";

function Content() {
  return (
    <div class="container-fluid g-0">
      <div class="row" id="content-gap">
        <div class="col-sm-1 col-md-2 col-lg-1">
          <UserNavigation />
        </div>

        <div class="col-sm g-0">
          <div class="col-sm-3 col-md-9 col-lg-12">
            <UserHeader />

            <div class="row">
              <div class="col-sm col-md-5 col-lg-7">
                <NormalEditor />
              </div>

              <div class="col-sm">
                <div class="col-sm col-md-3 col-lg-8 ">
                  <Index />
                </div>
                <div class="row">
                  <div class="col-sm-2 col-md-9 col-lg-12">
                    <FeedbackListCCRN />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
