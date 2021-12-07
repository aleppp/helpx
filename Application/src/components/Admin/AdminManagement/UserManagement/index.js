import "./style.css";
import Button from "../../../Buttons/Buttons";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      </div>

      <div>
        <table>
          <tr>
            <th>
              User ID <ExpandMoreIcon />
            </th>
            <th>
              User Name <ExpandMoreIcon />
            </th>
            <th>
              User Email <ExpandMoreIcon />
            </th>
            <th>
              Application <ExpandMoreIcon />
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
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
              />
            </td>
            <td>
              {" "}
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
              />
            </td>
            <td>
              {" "}
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
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
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
              />
            </td>
            <td>
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
              />
            </td>
            <td>
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
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
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
              />
            </td>
            <td>
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
              />
            </td>
            <td>
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
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
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
              />
            </td>
            <td>
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
              />
            </td>
            <td>
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label=""
                labelPlacement="start"
              />
            </td>
            <td>
              <Button button={button[0]}></Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;
