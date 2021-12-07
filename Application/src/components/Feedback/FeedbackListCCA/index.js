import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import emoji_1 from "./emoji/emoji_1.png";
import emoji_2 from "./emoji/emoji_2.png";
import emoji_3 from "./emoji/emoji_3.png";
import emoji_4 from "./emoji/emoji_4.png";
import emoji_5 from "./emoji/emoji_5.png";

export default function App() {
  return (
    <>
      <div id="container">
        <h1>Feedback List</h1>
        <table className="table table-borderless text-center">
          <thead>
            <tr>
              <td colSpan={6}></td>
            </tr>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Rating</th>
              <th>Feedback</th>
              <th>Content</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.ID}</td>
                  <td>{item.UserName}</td>
                  <td>{item.Rating}</td>
                  <td>{item.Feedback}</td>
                  <td>
                    <a href={item.Content}>{item.Content}</a>
                  </td>
                  <td>{item.Time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

const data = [
  {
    ID: "FB01",
    UserName: "farah",
    Rating: <img src={emoji_5} />,
    Feedback: "The release note is so helpful.",
    Content: (
      <a
        href="https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html"
        target="_blank"
      >
        Release Note 2.1
      </a>
    ),
    Time: "5/11/2021 9:05AM",
  },

  {
    ID: "FB02",
    UserName: "hawa",
    Rating: <img src={emoji_4} />,
    Feedback: "Easy to understand and useful",
    Content: (
      <a
        href="https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html"
        target="_blank"
      >
        Release Note 2.1
      </a>
    ),
    Time: "10/11/2021 10:05AM",
  },

  {
    ID: "FB03",
    UserName: "el",
    Rating: <img src={emoji_3} />,
    Feedback: "The information is helpful but the interface is complicated",
    Content: (
      <a
        href="https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html"
        target="_blank"
      >
        Release Note 2.1
      </a>
    ),
    Time: "12/11/2021 13:10PM",
  },

  {
    ID: "FB04",
    UserName: "siti",
    Rating: <img src={emoji_2} />,
    Feedback: "The content of the release note is quite complicated.",
    Content: (
      <a
        href="https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html"
        target="_blank"
      >
        Release Note 2.1
      </a>
    ),
    Time: "19/11/2021 10:00PM",
  },

  {
    ID: "FB05",
    UserName: "amir",
    Rating: <img src={emoji_1} />,
    Feedback: "I don't really understand anything.",
    Content: (
      <a
        href="https://confluence.atlassian.com/jirasoftware/jira-software-8-20-x-release-notes-1086411771.html"
        target="_blank"
      >
        Release Note 2.1
      </a>
    ),
    Time: "20/11/2021 9:05PM",
  },
];

