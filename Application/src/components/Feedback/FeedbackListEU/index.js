import React from "react";
import "./style.css";
import Button from "../../Buttons/Buttons";

export default function FeedbackList(props) {
  const data = [
    {
      Content: "Release Note 1",
      Date: "22/10/2021 09:21AM",
      Feedback: "The release note is so helpful.",
    },
    {
      Content: "Release Note 2",
      Date: "26/10/2021 21:56PM",
      Feedback: "I don't understand the content of the release note.",
    },
    {
      Content: "Release Note 3",
      Date: "02/11/2021 17:34PM",
      Feedback:
        "How do I reach out to the admin to give a role to me for editing content?",
    },
    {
      Content: "Release Note 4",
      Date: "14/11/2021 08:11AM",
      Feedback: "Is there any modifications made to address the bug?",
    },
    {
      Content: "Release Note 5",
      Date: "17/11/2021 13:46PM",
      Feedback: "Whats's the key feature for the latest release note?",
    },
  ];

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
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{data[0].Content}</td>
              <td>{data[0].Date}</td>
              <td>{data[0].Feedback}</td>
              <td>
                <Button button={button[0]}></Button>
              </td>
            </tr>
            <tr>
              <td>{data[1].Content}</td>
              <td>{data[1].Date}</td>
              <td>{data[1].Feedback}</td>
              <td>
                <Button button={button[0]}></Button>
              </td>
            </tr>
            <tr>
              <td>{data[2].Content}</td>
              <td>{data[2].Date}</td>
              <td>{data[2].Feedback}</td>
              <td>
                <Button button={button[0]}></Button>
              </td>
            </tr>
            <tr>
              <td>{data[3].Content}</td>
              <td>{data[3].Date}</td>
              <td>{data[3].Feedback}</td>
              <td>
                <Button button={button[0]}></Button>
              </td>
            </tr>
            <tr>
              <td>{data[4].Content}</td>
              <td>{data[4].Date}</td>
              <td>{data[4].Feedback}</td>
              <td>
                <Button button={button[0]}></Button>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={4}>
                <p className="foot"></p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

