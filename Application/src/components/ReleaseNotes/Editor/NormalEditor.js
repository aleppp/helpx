import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
//import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import "./NormalEditor.css";

function NormalEditor() {
  const clicked = () => {};
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="NormalEditor">
        <div className="background">
          <a className="button-usetemplate" href="/template-editor">
            Use Template
          </a>
          <h3 className="h3">Title </h3>
          <form>
            <input
              type="text"
              value={title}
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
              data={text}
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NormalEditor;
