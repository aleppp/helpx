import React, { useState, useEffect } from "react";
import "./EndUserHomePage.css";
import UserHeader from "../../ReleaseNotes/Navigation/UserHeader";
import UserNavigation from "../../ReleaseNotes/Navigation/UserNavigation";

import axios from "axios";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

function EndUserHomePage() {
  const [releaseNotes, setreleaseNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/releasenotes/list")
      .then((res) => {
        if (res.status === 200) setreleaseNotes(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <UserNavigation />
      <UserHeader />
      <div className="LandingPage">
        <div className="rectangle">
          <div className="TopLeft">
            <b> RELEASE NOTES</b>
          </div>

          <div className="row row-1">
            <div className="col-md-6 col-6 col-s-6" padding-0>
              <input
                type="text"
                id="myInput"
                placeholder="Search.."
                title="Type in a name"
                src="../../../../public/images/search-icon.png"
              ></input>
              <p>Sort by: Date</p>
            </div>
            <div className="vl"></div>{" "}
            <div className="col-md-6 col-6 col-s-6" padding-0>
              <p className="desc">
                Release notes provide information on the features and
                improvements in each release. This page includes release notes
                for platform releases and feature releases (you'll find bug fix
                release notes after opening one of the versions below)
              </p>
            </div>
          </div>
        </div>
        <div className="Row">
          <div className="col-12 col-s-12">
            <b className="list">List of Release Notes</b>
            <br />
            {releaseNotes.map((releaseNotes) => (
              <ul>
                <li>
                  <a href="#">{releaseNotes.Title}</a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndUserHomePage;
