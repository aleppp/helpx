import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import "./NormalEditor.css";

function NormalEditor() {
  const clicked = () => {};
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
          <SpellcheckIcon className="spell-icon" />
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
