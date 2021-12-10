import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <div className="container">
        <h1>Word Filter List</h1>
        <table className="table table-borderless text-center">
          <thead>
            <tr>
              <td colSpan={2}></td>
            </tr>
            <tr>
              <th>ID</th>
              <th>Term</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.ID}</td>
                  <td>{item.Term}</td>
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
    ID: "WFL1",
    Term: "Bodo",
  },

  {
    ID: "WFL2",
    Term: "Bodoh",
  },

  {
    ID: "WFL3",
    Term: "Bodohhhhh",
  },

  {
    ID: "WFL4",
    Term: "Bodoooooo",
  },

  {
    ID: "WFL5",
    Term: "Bodohh",
  },
];

