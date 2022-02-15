import React, { useState } from "react";
import DeleteFraud from ".";

const DeleteButton = ({ fraudDelete, i }) => {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <tr key={i}>
      <td> {fraudDelete.id} </td>
      <td> {fraudDelete.term}</td>
      <td className="action-column">
        <button
          className="button-red"
          onClick={() => setShowDelete(!showDelete)}
        >
          Delete
        </button>
      </td>
      <td> {showDelete ? <DeleteFraud /> : null} </td>
    </tr>
  );
};

export default DeleteButton;
