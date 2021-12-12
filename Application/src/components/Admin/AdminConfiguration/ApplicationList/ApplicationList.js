import Button from "../../../Buttons/Buttons";
import "./ApplicationSettingsList.css";

function ApplicationSettingsList() {
  const data = [
    {
      appName: "AlphaOil",
      backgroundColor: "Blue",
      fontSize: "12",
      fontFamily: "Mulish",
      theme: "Default",
      navBar: "Horizontal",
    },
    {
      appName: "Petronas Up",
      backgroundColor: "Emerald Green",
      fontSize: "12",
      fontFamily: "Mulish",
      theme: "Monothematic",
      navBar: "Vertical",
    },
    {
      appName: "Setel",
      backgroundColor: "Emerald Green",
      fontSize: "12",
      fontFamily: "Sans Serif",
      theme: "Default",
      navBar: "Vertical",
    },
  ];
  const button = [
    {
      type: "button-green",
      text: "Edit",
    },
    {
      type: "button-blue",
      text: "Add New",
    },
  ];
  return (
    <div>
      <div className="app-settings">
        <h1>Applications Settings</h1>
        <div className="button-float-right">
          <Button button={button[1]}></Button>
        </div>{" "}
      </div>
      <div>
        <table id="appSettings">
          <tr>
            <th>Application Name</th>
            <th>Background Color</th>
            <th>Font Size</th>
            <th>Font Family</th>
            <th>Theme</th>
            <th>Navigation Bar</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>{data[0].appName}</td>
            <td>{data[0].backgroundColor}</td>
            <td>{data[0].fontSize}</td>
            <td>{data[0].fontFamily}</td>
            <td>{data[0].theme}</td>
            <td>{data[0].navBar}</td>
            <td className="action-column">
              <Button button={button[0]}></Button>
            </td>
          </tr>
          <tr>
            <td>{data[1].appName}</td>
            <td>{data[1].backgroundColor}</td>
            <td>{data[1].fontSize}</td>
            <td>{data[1].fontFamily}</td>
            <td>{data[1].theme}</td>
            <td>{data[1].navBar}</td>
            <td className="action-column">
              <Button button={button[0]}></Button>
            </td>
          </tr>
          <tr>
            <td>{data[2].appName}</td>
            <td>{data[2].backgroundColor}</td>
            <td>{data[2].fontSize}</td>
            <td>{data[2].fontFamily}</td>
            <td>{data[2].theme}</td>
            <td>{data[2].navBar}</td>
            <td className="action-column">
              <Button button={button[0]}></Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ApplicationSettingsList;
