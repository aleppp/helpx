import "./DataTable.css";
import Button from "../../../Buttons/Buttons";

function DataTable() {
  const data = [
    {
      faq: "FAQ01",
      app: "AlphaOil",
      question: "Question bla bla bla",
      answer: "Answer bla bla bla",
      order: 1,
      visible: "Yes",
    },
    {
      faq: "FAQ02",
      app: "Petronas Up",
      question: "Question bla bla bla",
      answer: "Answer bla bla bla",
      order: 1,
      visible: "Yes",
    },
    {
      faq: "FAQ03",
      app: "AlphaOil",
      question: "Question bla bla bla",
      answer: "Answer bla bla bla",
      order: 2,
      visible: "No",
    },
    {
      faq: "FAQ04",
      app: "Petronas Up",
      question: "Question bla bla bla",
      answer: "Answer bla bla bla",
      order: 2,
      visible: "Yes",
    },
    {
      faq: "FAQ05",
      app: "Setel",
      question: "Question bla bla bla",
      answer: "Answer bla bla bla",
      order: 1,
      visible: "Yes",
    },
  ];

  const button = [
    {
      type: "button-preview",
      text: "Preview",
    },
    {
      type: "button-edit",
      text: "Edit",
    },
    {
      type: "button-delete",
      text: "Delete",
    },
    {
      type: "button-addnew",
      text: "Add New",
    },
  ];
  return (
    <div>
      <div className="faq-list-component">
        <h1>Frequently Asked Question</h1>
        <Button button={button[3]}></Button>
      </div>
      <div>
        <table id="faq">
          <tr>
            <th>FAQ ID</th>
            <th>Application Section</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Order</th>
            <th>Visibility</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>{data[0].faq}</td>
            <td>{data[0].app}</td>
            <td>{data[0].question}</td>
            <td>{data[0].answer}</td>
            <td>{data[0].order}</td>
            <td>{data[0].visible}</td>
            <td className="action-column">
              <Button button={button[0]}></Button>
              <Button button={button[1]}></Button>
              <Button button={button[2]}></Button>
            </td>
          </tr>
          <tr>
            <td>{data[1].faq}</td>
            <td>{data[1].app}</td>
            <td>{data[1].question}</td>
            <td>{data[1].answer}</td>
            <td>{data[1].order}</td>
            <td>{data[1].visible}</td>
            <td className="action-column">
              <Button button={button[0]}></Button>
              <Button button={button[1]}></Button>
              <Button button={button[2]}></Button>
            </td>
          </tr>
          <tr>
            <td>{data[2].faq}</td>
            <td>{data[2].app}</td>
            <td>{data[2].question}</td>
            <td>{data[2].answer}</td>
            <td>{data[2].order}</td>
            <td>{data[2].visible}</td>
            <td className="action-column">
              <Button button={button[0]}></Button>
              <Button button={button[1]}></Button>
              <Button button={button[2]}></Button>
            </td>
          </tr>
          <tr>
            <td>{data[3].faq}</td>
            <td>{data[3].app}</td>
            <td>{data[3].question}</td>
            <td>{data[3].answer}</td>
            <td>{data[3].order}</td>
            <td>{data[3].visible}</td>
            <td className="action-column">
              <Button button={button[0]}></Button>
              <Button button={button[1]}></Button>
              <Button button={button[2]}></Button>
            </td>
          </tr>
          <tr>
            <td>{data[4].faq}</td>
            <td>{data[4].app}</td>
            <td>{data[4].question}</td>
            <td>{data[4].answer}</td>
            <td>{data[4].order}</td>
            <td>{data[4].visible}</td>
            <td className="action-column">
              <Button button={button[0]}></Button>
              <Button button={button[1]}></Button>
              <Button button={button[2]}></Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
