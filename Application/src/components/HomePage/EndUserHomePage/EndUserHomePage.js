import React, { useState, useEffect } from "react";
import "./EndUserHomePage.css";
import UserHeader from "../../ReleaseNotes/Navigation/UserHeader";
import UserNavigation from "../../ReleaseNotes/Navigation/UserNavigation";

import axios from "axios";

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
        <b className="list">List of Release Notes</b>
        <br />
        {releaseNotes.map((releaseNotes) => (
          <ul>
            <li>
              <a href="#">{releaseNotes.Title}</a>
            </li>
          </ul>
        ))}

        {/* <li>
            
            <a href={releaseNotes.Title}> </a>
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
        </ul>*/}
      </div>
    </div>
  );
}

export default EndUserHomePage;
