import React, { useState } from "react";
import EditListOfApp from "../../ActionButtonsConfig/EditApplication/EditApplicationList";

const ApplicationListData = ({ appList, i }) => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <tr key={i}>
      <td>{appList.id}</td>
      <td>{appList.name}</td>
      <td>{appList.url}</td>
      <td className="action-column">
        {showEdit ? (
          <EditListOfApp
            appList={appList}
            changeState={(showEdit) => setShowEdit(showEdit)}
          />
        ) : (
          <button
            key={i}
            className="button-green"
            onClick={() => setShowEdit(!showEdit)}
          >
            Edit
          </button>
        )}
        <button className="button-red">Delete</button>
      </td>
    </tr>
  );
};

export default ApplicationListData;
