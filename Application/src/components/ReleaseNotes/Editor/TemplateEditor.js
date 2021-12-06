import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
import "./TemplateEditor.css";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import Popup from "reactjs-popup";

function TemplateEditor() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <div className="editor-background">
        <Popup
          trigger={
            <button className="button-newtemplate">
              {" "}
              Save as New Template
            </button>
          }
          modal
        >
          {(close) => (
            <div className="template-popup">
              {" "}
              <h2> New Template </h2>
              <form>
                <label className="label">Name</label>
                <input
                  className="name-field"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </form>{" "}
              <div className="actions">
                <button
                  className="button-save"
                  onClick={() => {
                    console.log("modal closed ");

                    close();
                  }}
                >
                  Save
                </button>

                <button
                  className="button-cancel"
                  onClick={() => {
                    console.log("modal closed ");

                    close();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </Popup>

        <button className="button-template" onClick="myFunction()">
          Template
        </button>
        <h3 className="h3">Title </h3>
        <form>
          <input className="textfield" type="text" value="Release Note 3.2" />
        </form>
        <SpellcheckIcon className="spell-icon" />
        <h3 className="h3">Body Content</h3>
        <CKEditor
          editor={ClassicEditor}
          data="<h2>What is New</h2>
                <p>Insert a lot of text here. Here  is the edited form for the detailed discussion or question that asked by enduser.  Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
                <h2>Purpose of The Change</h2>
                <p>Insert a lot of text here. Here  is the edited form for the detailed discussion or question that asked by enduser.  Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
                "
        />
        <button className="button-delete">Delete</button>
        <button className="button-update">Update</button>
        <button className="button-draft">Save to Draft</button>
      </div>
    </div>
  );
}
export default TemplateEditor;
