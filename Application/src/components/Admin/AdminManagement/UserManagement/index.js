import "./style.css";
import Button from "../../../Buttons/Buttons";

const button = [
  {
    type: "button-red",
    text: "Delete",
  },
  {
    type: "button-blue",
    text: "Add New",
  },
];

function UserManagement() {
  return (
    <div>
      <div className="user-management-component">
        <h1>User Management</h1>
        <Button button={button[1]}></Button>

        <div>
          <table>
            <tr>
              <th>
                <div className="img-expandMore">
                  User ID
                  <img
                    className="dropdown"
                    src={process.env.PUBLIC_URL + "/images/expandMore.png"}
                  />
                </div>
              </th>
              <th>
                User Name{" "}
                <img
                  className="dropdown"
                  src={process.env.PUBLIC_URL + "/images/expandMore.png"}
                />
              </th>
              <th>
                User Email{" "}
                <img
                  className="dropdown"
                  src={process.env.PUBLIC_URL + "/images/expandMore.png"}
                />
              </th>
              <th>
                Application{" "}
                <img
                  className="dropdown"
                  src={process.env.PUBLIC_URL + "/images/expandMore.png"}
                />
              </th>
              <th> Content Contributor </th>
              <th> Content Approver </th>
              <th> System Admin </th>
              <th> Action </th>
            </tr>
            <tr>
              <td> U001 </td>
              <td> Aliff</td>
              <td> aliff.a@petronas.com </td>
              <td> Alpha Oil </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <Button button={button[0]}></Button>
              </td>
            </tr>
            <tr>
              <td> U002 </td>
              <td> Balqis</td>
              <td> balqis.b@petronas.com </td>
              <td> Alpha Oil </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <Button button={button[0]}></Button>
              </td>
            </tr>
            <tr>
              <td> U003 </td>
              <td> Elli</td>
              <td> elli.e@petronas.com </td>
              <td> Alpha Oil </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <Button button={button[0]}></Button>
              </td>
            </tr>
            <tr>
              <td> U004 </td>
              <td> Sahirah</td>
              <td> asahirah@petronas.com </td>
              <td> Alpha Oil </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <img
                  className="checkbox"
                  src={process.env.PUBLIC_URL + "/images/checkboxBlank.png"}
                />
              </td>
              <td>
                <Button button={button[0]}></Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
