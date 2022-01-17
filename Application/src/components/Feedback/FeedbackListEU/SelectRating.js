import "./FeedbackListEU.css";

export default function SelectRating(props) {
  return (
    <div class="dropdown-content">
      <a href="#">
        <img
          src={process.env.PUBLIC_URL + "/images/rate_1.png"}
          alt="Very Dissatisfied"
        ></img>
      </a>
      <a href="#">
        <img
          src={process.env.PUBLIC_URL + "/images/rate_2.png"}
          alt="Dissatisfied"
        ></img>
      </a>
      <a href="#">
        <img
          src={process.env.PUBLIC_URL + "/images/rate_3.png"}
          alt="Neutral"
        ></img>
      </a>
      <a href="#">
        <img
          src={process.env.PUBLIC_URL + "/images/rate_4.png"}
          alt="Satisfied"
        ></img>
      </a>
      <a href="#">
        <img
          src={process.env.PUBLIC_URL + "/images/rate_5.png"}
          alt="Very Satisfied"
        ></img>
      </a>
    </div>
  );
}
