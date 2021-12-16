import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";
import "./TemplateEditor.css";
import TemplatePopup from "./TemplatePopup.js";

const TEMPLATES = [
  { name: "Template 1.0" },
  { name: "Template 2.0" },
  { name: "Template 3.0" },
];

function TemplateEditor() {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="editor-background">
        <input
          type="button"
          value="Save As New Template"
          className="button-newtemplate"
          onClick={togglePopup}
        />
        <div>
          <select className="template">
            {" "}
            {TEMPLATES.map((item) => {
              return <option> {item.name}</option>;
            })}
          </select>
        </div>
        <h3 className="h3">Title </h3>
        <input className="textfield" type="text" value="Release Note 3.2" />
        <img
          className="spell-icon"
          src={process.env.PUBLIC_URL + "/images/spellCheck.png"}
          alt="spell-icon"
        />
        <h3 className="h3">Body Content</h3>
        <div>
          <CKEditor
            editor={ClassicEditor}
            data="<h2>What is New</h2>
                <p>Insert a lot of text here. Here  is the edited form for the detailed discussion or question that asked by enduser.  Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
                <h2>Purpose of The Change</h2>
                <p>Insert a lot of text here. Here  is the edited form for the detailed discussion or question that asked by enduser.  Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
                "
          />
          <div />
        </div>
        {isOpen && (
          <TemplatePopup
            content={
              <>
                <h2> New Template </h2>
                <label className="label">Name</label>
                <input
                  className="name-field"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />{" "}
                <div className="actions">
                  <button className="button-save">Save</button>

                  <button className="button-cancel">Cancel</button>
                </div>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
}
export default TemplateEditor;
