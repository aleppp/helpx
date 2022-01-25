import "./UserHeader.css";

const UserHeader = () => {
  return (
    <div className="UserHeader">
      <div className="userHeader-nav ">
        <ul className="UserHeader-ul">
          <li className="UserHeader-li">
            <a href="/">Release Notes</a>
          </li>
          <li className="UserHeader-li">
            <a href="/documenation">Documentation</a>
          </li>
          <li className="UserHeader-li">
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserHeader;
