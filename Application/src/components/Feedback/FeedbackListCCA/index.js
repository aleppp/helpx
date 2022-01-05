import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

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
              <th>Title</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {FeedbackCCAList.map((fb, i) => (
              <tr key={i}>
                <td>{fb.ID}</td>
                <td>{fb.UserName}</td>
                <td>
                  {(function () {
                    if (fb.Rating == "1") {
                      return (
                        <img
                          src={process.env.PUBLIC_URL + "/images/rate_1.png"}
                          alt="Very Dissatisfied"
                        />
                      );
                    } else if (fb.Rating == "2") {
                      return (
                        <img
                          src={process.env.PUBLIC_URL + "/images/rate_2.png"}
                          alt="Dissatisfied"
                        />
                      );
                    } else if (fb.Rating == "3") {
                      return (
                        <img
                          src={process.env.PUBLIC_URL + "/images/rate_3.png"}
                          alt="Neutral"
                        />
                      );
                    } else if (fb.Rating == "4") {
                      return (
                        <img
                          src={process.env.PUBLIC_URL + "/images/rate_4.png"}
                          alt="Satisfied"
                        />
                      );
                    } else {
                      return (
                        <img
                          src={process.env.PUBLIC_URL + "/images/rate_5.png"}
                          alt="Very Satisfied"
                        />
                      );
                    }
                  })()}
                </td>
                <td>{fb.Feedback}</td>
                <td>{fb.title}</td>
                <td>{fb.DateCreated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
