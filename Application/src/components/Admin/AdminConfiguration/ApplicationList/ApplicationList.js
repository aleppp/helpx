import Button from "../../../Buttons/Buttons";
import "./ApplicationList.css";

function ApplicationList() {
  const data = [
    {
      id: "APP01",
      appName: "AlphaOil",
      AppURL: "petronas.com/alphaoil",
    },
    {
      id: "APP02",
      appName: "Petronas Up",
      AppURL: "petronas.com/petronasup",
    },
    {
      id: "APP03",
      appName: "Setel",
      AppURL: "petronas.com/setel",
    },
  ];
  const button = [
    {
      type: "button-green",
      text: "Edit",
    },
    {
      type: "button-red",
      text: "Delete",
    },
    {
      type: "button-blue",
      text: "Add New",
    },
  ];
  return (
    <div>
      <div className="app-list">
        <h1>List of Application</h1>
        <div className="button-float-right">
          <Button button={button[2]} />
        </div>
      </div>
      <div>
        <table id="applist">
          <tr>
            <th>Application ID</th>
            <th>Application Name</th>
            <th>Application URL</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>{data[0].id}</td>
            <td>{data[0].appName}</td>
            <td>{data[0].AppURL}</td>
            <td className="action-column">
              <Button button={button[0]}></Button>
              <Button button={button[1]}></Button>
            </td>
          </tr>
          <tr>
            <td>{data[1].id}</td>
            <td>{data[1].appName}</td>
            <td>{data[1].AppURL}</td>
            <td className="action-column">
              <Button button={button[0]}></Button>
              <Button button={button[1]}></Button>
            </td>
          </tr>
          <tr>
            <td>{data[2].id}</td>
            <td>{data[2].appName}</td>
            <td>{data[2].AppURL}</td>
            <td className="action-column">
              <Button button={button[0]}></Button>
              <Button button={button[1]}></Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ApplicationList;
