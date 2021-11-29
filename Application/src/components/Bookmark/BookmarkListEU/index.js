import React from "react";
import ReactDOM from "react-dom";

function BookmarkIcon(props) {
  const userbookmark = this.props.userbookmark;
  if (userbookmark == 1) {
    return <Bookmarked />;
  }
  return <Unbookmarked />;
}

function Bookmarked() {
  return <img src={linkwithopaquebookmarkicon} />;
}

function Unbookmarked() {
  return <img src={linkwithseethroughbookmarkicon} onClick={BookmarkPopup} />;
}

ReactDOM.render(<BookmarkIcon />, document.getElementById("root"));
