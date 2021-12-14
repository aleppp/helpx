import React from "react";
import "./EndUserHomePage.css";
import UserHeader from "../../ReleaseNotes/Navigation/UserHeader";
import UserNavigation from "../../ReleaseNotes/Navigation/UserNavigation";

function EndUserHomePage() {
  return (
    <div>
      <UserNavigation />
      <UserHeader />
      <div className="LandingPage">
        <div className="rectangle">
          <div className="TopLeft">
            <b> RELEASE NOTES</b>
          </div>
          <div className="row">
            <div className="column">
              <input
                type="text"
                id="myInput"
                placeholder="Search.."
                title="Type in a name"
                src="../../../../public/images/search-icon.png"
              ></input>

              <p>Sort by: Date</p>
            </div>
            <div className="row">
              <div className="vl"></div>
              <p className="desc">
                {" "}
                Release notes provide information on the features and
                improvements in each release. This page includes release notes
                for platform releases and feature releases (you'll find bug fix
                release notes after opening one of the versions below)
              </p>
            </div>
          </div>
        </div>

        <ul className="list">
          {" "}
          <b>List of Release Notes</b>
          <li>
            <a href="#">Release Note 7.5 </a>
          </li>
          <li>
            <a href="#">Release Note 7.4 </a>
          </li>
          <li>
            <a href="#">Release Note 7.3 </a>
          </li>
          <li>
            <a href="#">Release Note 7.2 </a>
          </li>
          <li>
            <a href="#">Release Note 7.1 </a>
          </li>
          <li>
            <a href="#">Release Note 7.0 </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EndUserHomePage;
