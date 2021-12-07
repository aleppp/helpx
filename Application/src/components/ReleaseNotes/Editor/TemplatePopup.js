import React, { useState } from "react";
import "./TemplateEditor.css";

function TemplatePopup() {
  const [name, setName] = useState("");
  return (
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
        <button className="button-save">Save</button>

        <button className="button-cancel">Cancel</button>
      </div>
    </div>
  );
}
export default TemplatePopup;
