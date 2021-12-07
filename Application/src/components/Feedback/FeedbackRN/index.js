import React from "react";
import "./style.css";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";

import Emoji1 from "./Emoji1.png";
import Emoji2 from "./Emoji2.png";
import Emoji3 from "./Emoji3.png";
import Emoji4 from "./Emoji4.png";
import Emoji5 from "./Emoji5.png";

function FeedbackRN() {
  return (
    <div class="center">
      <h2>
        If you find this documentation helpful, please give us a feedback.{" "}
      </h2>
      <br />

      <div>
        <h3>Rating:</h3>
        <RadioGroupRating />
        <h3>Feedback:</h3>

        <input type="text" placeholder="Enter your feedback here" />

        <br />
        <Popup trigger={<button class="button"> Submit</button>} modal>
          {(close) => (
            <div className="modal">
              <div className="content">
                {" "}
                Thank you! Your feedback has been recorded
              </div>
              <div className="actions"></div>
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                Done
              </button>
            </div>
          )}
        </Popup>

        <br />
      </div>
    </div>
  );
}

const customIcons = {
  1: {
    icon: <img src={Emoji3} alt="3" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <img src={Emoji4} alt="4" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <img src={Emoji5} alt="5" />,
    label: "Neutral",
  },
  4: {
    icon: <img src={Emoji1} alt="1" />,
    label: "Satisfied",
  },
  5: {
    icon: <img src={Emoji2} alt="2" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function RadioGroupRating() {
  return (
    <Rating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      //highlightSelectedOnly={true}
      //onChangeActive={true}
    />
  );
}

export default FeedbackRN;
