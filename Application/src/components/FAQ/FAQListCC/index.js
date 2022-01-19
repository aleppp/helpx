import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
//import {Pagination} from "@material-ui/lab";
import Button from "../../Buttons/Buttons";
import UserHeader from "../../ReleaseNotes/Navigation/UserHeader";
import UserNavigation from "../../ReleaseNotes/Navigation/UserNavigation";

export default function FAQListCC() {
  const [FAQList, setFAQList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/faq/sel")
      .then((res) => {
        if (res.status === 200) setFAQList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

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
    {
      type: "button-addnew",
      text: "Add New",
    },
  ];

  return (
    <>
      <div className="Content-Nav">
        <UserNavigation />
      </div>
      <div className="Content-Header">
        <UserHeader />
      </div>
      <div className="FAQListCC">
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
              {FAQList.map((fql, i) => (
                <tr key={i}>
                  <td>{fql.ID}</td>
                  <td>{fql.Name}</td>
                  <td>{fql.Question}</td>
                  <td>{fql.Answer}</td>
                  <td>{fql.IsVisible}</td>
                  <td>
                    <Button button={button[0]}></Button>
                    <Button button={button[1]}></Button>
                    <Button button={button[2]}></Button>
                  </td>
                </tr>
              ))}
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
      </div>
    </>
  );
}
