import React from "react";
import "./style.css";
import bookmarkedicon from "..public/icons/bookmarked.svg";
import unbookmarkedicon from "..public/icons/unbookmarked.svg";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

function BookmarkIcon() {
  var userbookmark = 0;
  //Coding that will fetch bookmark data from database that will determine either the user saved the bookmark or not
  if (userbookmark === 1) {
    return <Bookmarked />;
  } else {
    return <BookmarkPopup />;
  }
}

function Bookmarked() {
  return (
    <>
      <h1>Release Notes </h1>
      <img src={bookmarkedicon} />
    </>
  );
}

function BookmarkPopup() {
  return (
    <>
      <div>
        <h1>Release Notes</h1>
        <Popup
          trigger={
            <img
              className="image"
              src={unbookmarkedicon}
              alt={"Bookmark this icon"}
            />
          }
          modal
        >
          {(close) => (
            <div className="modal">
              <div className="header">
                {" "}
                Bookmark Added<br></br>{" "}
              </div>

              <div className="content">
                {" "}
                <form>
                  <div id="container1">
                    <label for="bname">Name : </label>
                    <input type="text" id="bname" name="bname"></input>
                  </div>
                </form>
              </div>

              <div className="actions">
                <button
                  className="button2"
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="button1"
                  onClick={() => {
                    //Coding here to save Bookmark in database according to release note and the user
                    console.log("modal closed ");
                    close();
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </>
  );
}

export default BookmarkIcon;