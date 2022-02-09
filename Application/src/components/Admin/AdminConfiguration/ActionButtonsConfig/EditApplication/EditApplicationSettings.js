import "../style.css";

export default function EditApplicationSettings() {
  return (
    <div class="container-editapp">
      <h2 className="title-editapp">Edit Application</h2>
      <div className="display-column">
        <label for="appconfig">Background Color</label>
        <select id="appconfig" name="appconfig">
          <option value="ao">Green</option>
          <option value="pd">Yellow</option>
          <option value="pu">Red</option>
          <option value="se">Blue</option>
        </select>
        <label for="appconfig">Font Size</label>
        <select id="appconfig" name="appconfig">
          <option value="ao">12</option>
          <option value="pd">14</option>
          <option value="pu">18</option>
          <option value="se">20</option>
        </select>
        <label for="appconfig">Font Family</label>
        <select id="appconfig" name="appconfig">
          <option value="ao">San Serif</option>
          <option value="pd">Arial</option>
          <option value="pu">Mulish</option>
          <option value="se">Times New Roman</option>
        </select>
        <label for="appconfig">Theme</label>
        <select id="appconfig" name="appconfig">
          <option value="ao">Default</option>
          <option value="pd">Night Mode</option>
        </select>
        <label for="appconfig">Navigation Bar</label>
        <select id="appconfig" name="appconfig">
          <option value="ao">Horizontal</option>
          <option value="pd">Vertical</option>
        </select>
        <div className="float-center-app">
          <button className="button-blue-small">Save</button>
          <button className="button-red">Cancel</button>
        </div>
      </div>
    </div>
  );
}
