import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";
import "./TemplateEditor.css";
import TemplatePopup from "./TemplatePopup";

const TEMPLATES = [
  { name: "Template 1.0" },
  { name: "Template 2.0" },
  { name: "Template 3.0" },
];

function TemplateEditor() {
  return (
    <div className="App">
      <div className="editor-background">
        <button className="button-newtemplate"> Save as New Template</button>
        <div>
          <form>
            <select className="template">
              {" "}
              {TEMPLATES.map((item) => {
                return <option> {item.name}</option>;
              })}
            </select>
          </form>
        </div>
        <h3 className="h3">Title </h3>
        <form>
          <input className="textfield" type="text" value="Release Note 3.2" />
        </form>
        <img
          className="spell-icon"
          src={process.env.PUBLIC_URL + "/images/spellCheck.png"}
          alt="spell-icon"
        />
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
      <TemplatePopup />
    </div>
  );
}
export default TemplateEditor;
