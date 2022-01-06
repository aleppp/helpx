import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BookmarkListEU() {
  const [BookmarkEUList, setBookmarkListEU] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/bookmarks/sel_user", {
        book: {
          userid: 2,
        },
      })
      .then((res) => {
        if (res.status === 200) setBookmarkListEU(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      id="container"
      style={{
        margin: `30px`,
      }}
    >
      <h1>
        <b>{"Bookmark"}</b>
      </h1>
      <table
        className="table table-borderless text-center"
        style={{
          border: `1px solid black`,
        }}
      >
        <thead>
          <tr>
            <td colSpan={4}></td>
          </tr>

          <tr style={{}}>
            <th>Date</th>
            <th>Title</th>
            <th>Link (url)</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {BookmarkEUList.map((bm, i) => (
            <tr key={i}>
              <td>{bm.DateCreated}</td>
              <td>{bm.BookmarkName}</td>
              <td>
                <a href={bm.URL}>{bm.URL}</a>
              </td>
              <td>
                <button1 type="button" class="btn btn-info">
                  Save
                </button1>{" "}
                <button2 type="button" class="btn btn-danger">
                  Delete
                </button2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
