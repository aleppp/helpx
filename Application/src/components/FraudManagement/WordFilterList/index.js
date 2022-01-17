import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Button from "../../Buttons/Buttons";

export default function WordFilterList() {
  const [FraudCCList, setFraudCCList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/fraudmanagement/sel")
      .then((res) => {
        if (res.status === 200) setFraudCCList(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const button = [
    {
      type: "button-blue",
      text: "Add New",
    },
  ];

  return (
    <>
      <div className="WordFilterListCC">
        <table className="table table-borderless">
          <thead>
            <tr className="tdashboard">
              <td colSpan={2}>
                <div className="title">Word Filter List</div>
                <div className="desc">
                  <p>
                    {" "}
                    Words you specify below will be filtered from all user input
                    (e.g. release notes, documentation and FAQ). All filtered
                    words will be highlighted during creation of new content and
                    cannot be submit for approval until the highlighted words
                    are removed.
                  </p>
                  <Button button={button[0]}></Button>
                </div>
              </td>
            </tr>
            <tr>
              <th>ID</th>
              <th>Term</th>
            </tr>
          </thead>
          <tbody>
            {FraudCCList.map((fraudcc, i) => (
              <tr key={i}>
                <td>{fraudcc.id}</td>
                <td>{fraudcc.term}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>
                <p className="foot"></p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
