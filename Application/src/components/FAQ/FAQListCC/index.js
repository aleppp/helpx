import React from "react";
import "./style.css";
//import {Pagination} from "@material-ui/lab";
import Button from "../../Buttons/Buttons";

export default function FAQListCC(props) {
  const data = [
    {
      FAQID: "F001",
      FAQSection: "Petronas Digital",
      Question: "Question 1",
      Answer: "Answer 1",
      Visibility: "On",
    },
    {
      FAQID: "F002",
      FAQSection: "Alpha Oil",
      Question: "Question 2",
      Answer: "Answer 2",
      Visibility: "On",
    },
    {
      FAQID: "F003",
      FAQSection: "Setel",
      Question: "Question 3",
      Answer: "Answer 3",
      Visibility: "On",
    },
    {
      FAQID: "F004",
      FAQSection: "Petronas Oil",
      Question: "Question 4",
      Answer: "Answer 4",
      Visibility: "On",
    },
    {
      FAQID: "F005",
      FAQSection: "Petronas Digital",
      Question: "Question 5",
      Answer: "Answer 5",
      Visibility: "On",
    },
  ];

  const button = [
    {
      type: "button-white",
      text: "Publish",
    },
    {
      type: "button-green",
      text: "Edit",
    },
    {
      type: "button-red",
      text: "Delete",
    },
  ];

  return (
    <>
      <div className="overall">
        <table className="table table-borderless">
          <thead>
            <tr className="tdashboard">
              <td colSpan={4}>
                <div className="title">Frequently Asked Questions</div>
              </td>
            </tr>

            <tr>
              <th>FAQ ID</th>
              <th>FAQ Section</th>
              <th>Question</th>
              <th>Answer</th>
              <th>Visibility</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{data[0].FAQID}</td>
              <td>{data[0].FAQSection}</td>
              <td>{data[0].Question}</td>
              <td>{data[0].Answer}</td>
              <td>{data[0].Visibility}</td>
              <td>
                <Button button={button[0]}></Button>
                <Button button={button[1]}></Button>
                <Button button={button[2]}></Button>
              </td>
            </tr>
            <tr>
              <td>{data[1].FAQID}</td>
              <td>{data[1].FAQSection}</td>
              <td>{data[1].Question}</td>
              <td>{data[1].Answer}</td>
              <td>{data[1].Visibility}</td>
              <td>
                <Button button={button[0]}></Button>
                <Button button={button[1]}></Button>
                <Button button={button[2]}></Button>
              </td>
            </tr>
            <tr>
              <td>{data[2].FAQID}</td>
              <td>{data[2].FAQSection}</td>
              <td>{data[2].Question}</td>
              <td>{data[2].Answer}</td>
              <td>{data[2].Visibility}</td>
              <td>
                <Button button={button[0]}></Button>
                <Button button={button[1]}></Button>
                <Button button={button[2]}></Button>
              </td>
            </tr>
            <tr>
              <td>{data[3].FAQID}</td>
              <td>{data[3].FAQSection}</td>
              <td>{data[3].Question}</td>
              <td>{data[3].Answer}</td>
              <td>{data[3].Visibility}</td>
              <td>
                <Button button={button[0]}></Button>
                <Button button={button[1]}></Button>
                <Button button={button[2]}></Button>
              </td>
            </tr>
            <tr>
              <td>{data[4].FAQID}</td>
              <td>{data[4].FAQSection}</td>
              <td>{data[4].Question}</td>
              <td>{data[4].Answer}</td>
              <td>{data[4].Visibility}</td>
              <td>
                <Button button={button[0]}></Button>
                <Button button={button[1]}></Button>
                <Button button={button[2]}></Button>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={6}>
                <p className="foot"></p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

