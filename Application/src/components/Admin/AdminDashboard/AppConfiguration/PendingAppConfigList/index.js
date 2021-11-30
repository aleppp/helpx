import "./style.css";
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
                            <button onclick="Configure()">
                                Configure
                            </button>
                        </td>

                    </tr>
                    <br />
                    <tr>
                        <td>Petronas Up</td>
                        <td>URL not defined!</td>
                        <td>
                            <button className="button" onclick="Configure()">
                                Configure
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default PendingAppConfigList;