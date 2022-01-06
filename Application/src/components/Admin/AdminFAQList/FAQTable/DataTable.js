import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DataTable.css";
import Button from "../../../Buttons/Buttons";

function DataTable() {
  const [FAQAdminList, setFAQAdminList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/faq/sel")
      .then((res) => {
        if (res.status === 200) setFAQAdminList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const button = [
    {
      type: "button-white",
      text: "Preview",
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
      type: "button-blue",
      text: "Add New",
    },
  ];
  return (
    <div>
      <div className="faq-list-component">
        <h1>Frequently Asked Question</h1>
        <Button button={button[3]}></Button>
      </div>
      <div>
        <table id="faq">
          <tr>
            <th>FAQ ID</th>
            <th>Application Section</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Visibility</th>
            <th>Action</th>
          </tr>
          {FAQAdminList.map((fq, i) => (
            <tr key={i}>
              <td>{fq.ID}</td>
              <td>{fq.Name}</td>
              <td>{fq.Question}</td>
              <td>{fq.Answer}</td>
              <td>{fq.IsVisible}</td>
              <td className="action-column">
                <Button button={button[0]}></Button>
                <Button button={button[1]}></Button>
                <Button button={button[2]}></Button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default DataTable;
