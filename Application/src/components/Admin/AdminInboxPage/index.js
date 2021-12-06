import "./style.css";
import Button from "../../Buttons/Buttons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const button = [
    {
        type: "button-red",
        text: "Delete",
    },
];

function AdminInboxPage() {
    return (
        <div className="admin-inbox-page">
            <h1>Notifications</h1>
            <div></div>
            <table>
                <tr>
                    <th>
                        Notification ID
                        <ExpandMoreIcon />
                    </th>
                    <th>
                        Type of Notification
                        <ExpandMoreIcon />
                    </th>
                    <th>
                        User Name <ExpandMoreIcon />
                    </th>
                    <th>
                        Application <ExpandMoreIcon />
                    </th>
                    <th>
                        Summary <ExpandMoreIcon />
                    </th>
                    <th>
                        Action <ExpandMoreIcon />
                    </th>
                </tr>
                <tr>
                    <td>U001</td>
                    <td>Feedback</td>
                    <td>Alif</td>
                    <td>Alpha Oil</td>
                    <td>Very informative!</td>
                    <td>
                        <Button button={button[0]}></Button>
                    </td>
                </tr>
                <tr>
                    <td>U002</td>
                    <td>Message</td>
                    <td>Toba</td>
                    <td>Petronas Up</td>
                    <td>Hye</td>
                    <td>
                        <Button button={button[0]}></Button>
                    </td>
                </tr>
                <tr>
                    <td>U003</td>
                    <td>Message</td>
                    <td>Balqis</td>
                    <td>Petronas Up</td>
                    <td>Hello!</td>
                    <td>
                        <Button button={button[0]}></Button>
                    </td>
                </tr>

                <tr>
                    <td>U004</td>
                    <td>Feedback</td>
                    <td>Nisa</td>
                    <td>Alpha Oil</td>
                    <td>Nice sharing!</td>
                    <td>
                        <Button button={button[0]}></Button>
                    </td>
                </tr>
            </table>

        </div>
    );
}

export default AdminInboxPage;