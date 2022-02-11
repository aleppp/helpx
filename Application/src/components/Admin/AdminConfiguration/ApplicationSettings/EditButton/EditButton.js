import React, { useState, Component } from "react";

import EditApplicationSettings from "../../ActionButtonsConfig/EditApplication/EditApplicationSettings";

const EditButton = ({ appSettings, i }) => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <tr key={i}>
      <td>{appSettings.Name}</td>
      <td>{appSettings.BackgroundColor}</td>
      <td>{appSettings.FontSize}</td>
      <td>{appSettings.FontFamily}</td>
      <td>{appSettings.Theme}</td>
      <td>{appSettings.NavigationBar}</td>
      <td className="action-column">
        {showEdit ? (
          <EditApplicationSettings
            appSettings={appSettings}
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
      </td>
    </tr>
  );
};

export default EditButton;
