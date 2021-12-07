import "../style.css";

function RecentAppConfigList() {
  const data = [
    {
      date: "Date & Time",
      appName: "Application Name",
      changes: "Changes",
      user: "User",
    },
    {
      date: "1/11/2021 9:00PM",
      appName: "AlphaOil",
      changes: "Background Color Changed",
      user: "Admin 1",
    },
    {
      date: "3/11/2021 2:30PM",
      appName: "Petronas Up",
      changes: "URL Defined",
      user: "Admin 2",
    },
  ];
  return (
    <div className="RecentAppConfigList" data-testid="divShows">
      <h2>
        Recent Configuration <br />
        Application
      </h2>
      <div>
        <table id="recent-app">
          <tr>
            <th>{data[0].date}</th>
            <th>{data[0].appName}</th>
            <th>{data[0].changes}</th>
            <th>{data[0].user}</th>
          </tr>
          <tr>
            <td>{data[1].date}</td>
            <td>{data[1].appName}</td>
            <td>{data[1].changes}</td>
            <td>{data[1].user}</td>
          </tr>
          <tr>
            <td>{data[2].date}</td>
            <td>{data[2].appName}</td>
            <td>{data[2].changes}</td>
            <td>{data[2].user}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default RecentAppConfigList;
