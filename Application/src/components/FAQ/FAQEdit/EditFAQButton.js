import React, { useState } from "react";
import FAQEditCC from ".";

export const EditFAQButton = ({ fql, i }) => {
  //active component
  const [showEditFAQCC, setShowEditFAQCC] = useState(false);

  return (
    <tr key={i}>
      <td>{fql.ID}</td>
      <td>{fql.Name}</td>
      <td>{fql.Question}</td>
      <td>{fql.Answer}</td>
      <td>{fql.QuestionOrder}</td>
      <td>{fql.IsVisible}</td>
      <td>
        <button className="button-white">Publish</button>
        <button
          key={i}
          className="button-green"
          onClick={() => setShowEditFAQCC(!showEditFAQCC)}
        >
          Edit
        </button>
        <button className="button-red">Cancel</button>
      </td>
      <td>{showEditFAQCC ? <FAQEditCC /> : null}</td>
    </tr>
  );
};
