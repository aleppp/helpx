import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContentBody.css";

function ContentBody() {
  /*const data = [
    {
      title: "What is New",
      body: "Release notes are documents that people receive when they buy and/or download software products. Nowadays, they're often distributed virtually. In the modern world, release notes are more important than ever. This is because buying software products isn't as straightforward a process as it used to be. Buying software products is now an ongoing process as you can count on the fact that you'll be sent product updates, bug fixes, new features, and more after your initial purchase.",
    },
    {
      title: "Purpose of the Change",
      body: " Release Notes are written to inform customers about changes to products, specifically adjustments likely to affect their experience, both major and minor.",
    },
    {
      title: "How are you affected",
      body: " A release note is usually a terse summary of recent changes, enhancements and bug fixes in a particular software release.",
    },
    {
      title: "Action needed",
      body: " Keep in mind that you're communicating with other humans. Format your release notes in a way that they're easy to read and comprehend.",
    },
    {
      title: "History",
      body: " A complete release history is available on GitHub. Documentation for recent releases can also be found below.",
    },
  ];*/

  const [contentBodyRN, setContentBodyRN] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/configuredapps/2")
      .then((res) => {
        if (res.status === 200) setContentBodyRN(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {/*<div className="center">
        <div className="scroll">
          <div className="page-header">
            <h1>
              <strong>Release Note 6.0</strong>
            </h1>
          </div>
          <div className="list-content">
            <ul>
              <li className="contents-h2">
                <a href="#content1">What is New</a>
              </li>
              <li className="contents-h2">
                <a href="#content2">Purpose of the Change</a>
              </li>
              <li className="contents-h2">
                <a href="#content3">How are you affected</a>
              </li>
              <li className="contents-h2">
                <a href="#content4">Action needed</a>
              </li>
              <li className="contents-h2">
                <a href="#content5">History</a>
              </li>
            </ul>
          </div>
          <div className="note">
            <h2>What is New</h2>
            <p id="content1">{data[0].body}</p>
            <h2>Purpose of the Change</h2>
            <p id="content2">{data[1].body}</p>
            <h2>How are you Affected</h2>
            <p id="content3">{data[2].body}</p>
            <h2>Action needed</h2>
            <p id="content4">{data[3].body}</p>
            <h2>History</h2>
            <p id="content5">{data[4].body}</p>
          </div>
        </div>
  </div>*/}
      <div className="page-header">
        <h1>
          <strong>Release Note 6.0</strong>
        </h1>
      </div>
      {contentBodyRN.map((post, index) => (
        <>
          <ul>
            <li key={index}>
              <a href="#">{post.title}</a>
            </li>
          </ul>
          <div className="scroll">
            <div key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

const posts = [
  {
    id: 1,
    title: "What is new",
    content:
      "Release notes are documents that people receive when they buy and/or download software products. Nowadays, they 're often distributed virtually. In the modern world, release notes are more important than ever. This is because buying software products isn't as straightforward a process as it used to be. Buying software products is now an ongoing process as you can count on the fact that you'll be sent product updates, bug fixes, new features, and more after your initial purchase.",
  },
  {
    id: 2,
    title: "Purpose of the change",
    content:
      "Release Notes are written to inform customers about changes to products, specifically adjustments likely to affect their experience, both major and minor.",
  },
  {
    id: 3,
    title: "How are you affected",
    content: "You can install React from npm.",
  },
  { id: 4, title: "Action needed", content: "Welcome to learning React!" },
  { id: 5, title: "Installation", content: "You can install React from npm." },
];
//ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));
