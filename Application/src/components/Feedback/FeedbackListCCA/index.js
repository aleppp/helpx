import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Button from "../../Buttons/Buttons";
import emoji_1 from "./emoji/emoji_1.png";
import emoji_2 from "./emoji/emoji_2.png";
import emoji_3 from "./emoji/emoji_3.png";
import emoji_4 from "./emoji/emoji_4.png";
import emoji_5 from "./emoji/emoji_5.png";

export default function FeedbackListCCA() {
  const [FeedbackCCAList, setFeedbackCCAList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/feedbackcc/sel")
      .then((res) => {
        if (res.status === 200) setFeedbackCCAList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div id="container">
        <h1>Feedback List</h1>
        <table className="table table-borderless text-center">
          <thead>
            <tr>
              <td colSpan={6}></td>
            </tr>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Rating</th>
              <th>Feedback</th>
              <th>Content</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {FeedbackCCAList.map((fb, i) => {
              <tr key={i}>
                <td>{fb.ID}</td>
                <td>{fb.UserName}</td>
                <td>{fb.Rating}</td>
                <td>{fb.Feedback}</td>
                <td>
                  <a href={fb.Content}>{fb.Content}</a>
                </td>
                <td>{fb.Time}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
