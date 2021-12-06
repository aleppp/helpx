import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <div id="container">
        <table className="table table-borderless text-center">
          <thead>
            <tr>
              <td colSpan={3}>
                <h1>
                  <b>{"Fraud Management"}</b>
                </h1>

                <div class="text-right">
                  <button type="button" class="btn btn-info">
                    Add New
                  </button>{" "}
                </div>
              </td>
            </tr>

            <tr>
              <th>ID</th>
              <th>Term</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {fraud.map((item) => {
              return (
                <tr>
                  <td>{item.ID}</td>
                  <td>{item.Term}</td>
                  <td>
                    <button2 type="button" class="btn btn-info">
                      Edit
                    </button2>{" "}
                    <button3 type="button" class="btn btn-danger">
                      Delete
                    </button3>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

const fraud = [
  { ID: "001", Term: "Petronas Digital" },
  { ID: "002", Term: "Alpha Oil" },
  { ID: "003", Term: "Petronas Up" },
  { ID: "004", Term: "Petronas Digital" },
  { ID: "005", Term: "Petronas Up" },
  { ID: "006", Term: "Alpha Oil" },
];

