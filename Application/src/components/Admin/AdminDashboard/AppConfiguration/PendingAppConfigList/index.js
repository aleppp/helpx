import "./style.css";
import Button from "../../../../Buttons/Buttons";

const button = [
    {
        type: "button-blue-small",
        text: "Configure",
    },
];
function PendingAppConfigList() {
    return (
        <div className="PendingAppConfigList">
            <h2>
                Pending Configuration <br />
                Application
            </h2>
            <div>
                <table>
                    <tr>
                        <th>Application</th>
                        <th>Description</th>
                        <th>Action</th>

                    </tr>
                    <tr>
                        <td>Alpha Oil</td>
                        <td>Stylesheet not defined!</td>
                        <td>
                            <Button button={button[0]}></Button>
                        </td>

                    </tr>
                    <br />
                    <tr>
                        <td>Petronas Up</td>
                        <td>URL not defined!</td>
                        <td>
                            <Button button={button[0]}></Button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default PendingAppConfigList;