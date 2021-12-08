import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div
      id="container"
      style={{
        margin: `30px`,
      }}
    >
      <h1>
        <b>{"Bookmark"}</b>
      </h1>
      <table
        className="table table-borderless text-center"
        style={{
          border: `1px solid black`,
        }}
      >
        <thead>
          <tr>
            <td colSpan={4}></td>
          </tr>

          <tr style={{}}>
            <th>Date</th>
            <th>Title</th>
            <th>Link (url)</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.Date}</td>
                <td>{item.Title}</td>
                <td>
                  <a href={item.Link}>{item.Link}</a>
                </td>
                <td>
                  <button1 type="button" class="btn btn-info">
                    Save
                  </button1>{" "}
                  <button2 type="button" class="btn btn-danger">
                    Delete
                  </button2>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const data = [
  {
    Date: "21/2/2021",
    Title: "Release Note 1",
    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-10-x-upgrade-notes-1004945639.html",
    Action: "",
  },
  {
    Date: "22/2/2021",
    Title: "Release Note 2",

    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html",
    Action: "Draft",
  },
  {
    Date: "23/2/2021",
    Title: "Release Note 3",
    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html",
    Action: "Approved",
  },
  {
    Date: "24/2/2021",
    Title: "Release Note 4",

    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html",
    Action: "Pending",
  },
  {
    Date: "25/2/2021",
    Title: "Release Note 5",
    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html",
    Action: "Pending",
  },
  {
    Date: "26/2/2021",
    Title: "Release Note 6",
    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html",
    Action: "Draft",
  },
  {
    Date: "27/2/2021",
    Title: "Release Note 7",
    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html",
    Action: "Pending",
  },
  {
    Date: "28/2/2021",
    Title: "Release Note 8",
    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html",
    Action: "Draft",
  },
  {
    Date: "29/2/2021",
    Title: "Release Note 9",
    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html",
    Action: "Pending",
  },
  {
    Date: "30/2/2021",
    Title: "Release Note 10",
    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html",
    Action: "Draft",
  },
  {
    Date: "31/2/2021",
    Title: "Release Note 11",
    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html",
    Action: "Approved",
  },
  {
    Date: "1/2/2021",
    Title: "Release Note 12",
    Link: "https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html",
    Action: "Approved",
  },
];


