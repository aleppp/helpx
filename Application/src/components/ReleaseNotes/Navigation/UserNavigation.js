import "./UserNavigation.css";

const UserNavigation = () => {
  return (
    <div className="UserNav sticky-top">
      <img
        src={process.env.PUBLIC_URL + "/images/profile.png"}
        className="profilePic"
      />
      <h2>Shahmy</h2>
      <h3>Petronas Digital</h3>
      <div className="links">
        <ul>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/images/dashboard.png"}
                className="dashboardLogo"
              />
              <br />
              Dashboard
            </a>
          </li>
          <li>
            <a href="/feedback">
              <img src={process.env.PUBLIC_URL + "/images/thumbUp.png"} />
              <img src={process.env.PUBLIC_URL + "/images/thumbDown.png"} />
              <br />
              Feedback
            </a>
          </li>
          <li>
            <a href="/bookmark">
              <img src={process.env.PUBLIC_URL + "/images/bookmark.png"} />
              <br />
              Bookmark
            </a>
          </li>
          <li>
            <a href="/contact">
              <img src={process.env.PUBLIC_URL + "/images/contactAdmin.png"} />
              <br />
              Contact Admin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserNavigation;
