import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Button from "../../Buttons/Buttons";

export default function FeedbackList() {
  const [FeedbackEUList, setFeedbackEUList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/feedback/sel")
      .then((res) => {
        if (res.status === 200) setFeedbackEUList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const button = [
    {
      type: "button-green-center",
      text: "Edit",
    },
  ];

  return (
    <>
      <div className="overall">
        <table className="table table-borderless">
          <thead>
            <tr className="tdashboard">
              <td colSpan={4}>
                <div className="title">Feedback List</div>
              </td>
            </tr>

            <tr>
              <th>Content</th>
              <th>Date</th>
              <th>Rating</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {FeedbackEUList.map((fb, i) => (
              <tr key={i}>
                <td>{fb.title}</td>
                <td>{fb.DateCreated}</td>
                <td>{fb.Rating}</td>
                <td>{fb.Feedback}</td>
                <td>
                  <Button button={button[0]}></Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>
                <p className="foot"></p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
