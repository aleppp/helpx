import "./style.css";
import Button from "../../Buttons/Buttons";

const button = [
    {
        type: "button-red",
        text: "Delete",
    },
];

function AdminInboxPage() {
    return (
        <div>
            <div className="admin-inbox-page">
                <h1>Notifications</h1>
            </div>
            <div id="inbox">
                <table>
                    <tr>
                        <th>
                            Notification ID
                            <img className="dropdown"
                                src={process.env.PUBLIC_URL + "/images/expandMore.png"} />
                        </th>
                        <th>
                            Type of Notification
                            <img className="dropdown"
                                src={process.env.PUBLIC_URL + "/images/expandMore.png"} />
                        </th>
                        <th>
                            User Name
                            <img className="dropdown"
                                src={process.env.PUBLIC_URL + "/images/expandMore.png"} />
                        </th>
                        <th>
                            Application
                            <img className="dropdown"
                                src={process.env.PUBLIC_URL + "/images/expandMore.png"} />
                        </th>
                        <th>
                            Summary
                        </th>
                        <th>
                            Action
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

                <div className="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#" class="active">
                        4
                    </a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&raquo;</a>
                </div>
            </div>
        </div>
    );
}

export default AdminInboxPage;