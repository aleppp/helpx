import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
//import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import "./NormalEditor.css";

/*const contentdummy = () => {
  const [conntentdummy, setConntentdummy] = useState("");
};
const handleClick = () => {
  // update the conntentdummy state property by adding a new data
  updateContentdummy([
    ...contentdummy,
    {
      userid: 1,
      contenttypeid: 1,
      statusid: 1,
      isfeebackallowed: 1,
      isvisible: 1,
      datecreated: "...",
      datemodified: "...",
      datepublished: "...",
    },
  ]);
};*/

/*const setDraft = () => {
  axios
    .post("http://localhost:8080/content/ins")
    .then((res) => {
      if (res.status === 200) setTitle(res.data[0]);
    })
    .catch((err) => console.log(err));
};*/
const content = {
  appid: 1,

  userid: 1,

  contenttypeid: 1,

  statusid: 1,

  isfeebackallowed: 1,

  isvisible: 1,

  datecreated: "2021-07-28 12:12:12",

  datemodified: "2021-07-30 12:12:12",

  datepublished: "2021-08-28 12:12:12",
};
const NormalEditor = () => {
  const clicked = () => {};
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [sessionData, setSessionData] = useState(content);

  const setContent = () => {
    setSessionData({ ...sessionData, body: body });
    setSessionData({ ...sessionData, title: title });
    axios
      .post("http://localhost:8080/content/ins", {
        sessionData,
      })
      .then((res) => {
        if (res.status === 200) setTitle(res.data[0]);
      })
      .catch((err) => console.log(err));
  };

  /*axios
      .post("http://localhost:8080/content/ins")
      .then((res) => {
        if (res.status === 200) setTitle(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
    this.setState({
      userid: "1",
      contenttypeid: "1",
      statusid: "1",
      isfeedbackallowed: "1",
      isvisible: "1",
      datecreated: "2022-02-14 00:00:00",
      datemodified: "2022-02-14 00:00:00",
      datepublished: "2022-02-14 00:00:00",
    });
  });*/

  return (
    <>
      <div className="NormalEditor">
        <div className="background">
          <button className="button-usetemplate" onClick={clicked}>
            Use Template
          </button>
          <h3 className="h3">Title </h3>
          <form>
            <input
              type="text"
              value={title}
              onSubmit={() => setContent()}
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
          <img
            className="spell-icon"
            src={process.env.PUBLIC_URL + "/images/spellCheck.png"}
          />
          <div className="editor">
            <h3 className="h3">Body Content</h3>
            <CKEditor
              editor={ClassicEditor}
              data={body}
              onSubmit={setContent}
              onChange={(event, editor) => {
                const data = editor.getData();
                setBody(data);
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NormalEditor;
