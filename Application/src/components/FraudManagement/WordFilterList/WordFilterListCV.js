import "./WordFilterListCV.css";
import WordFilterList from ".";
import Dashboard from "../../ReleaseNotes/Dashboard";
import UserHeader from "../../ReleaseNotes/Navigation/UserHeader";
import UserNavigation from "../../ReleaseNotes/Navigation/UserNavigation";

export default function WordFilterListCV() {
  return (
    <div className="">
      <UserNavigation />
      <div className="row">
        <div className="container-fluid">
          <div className="d-inline flex">
            <div className="">
              <UserHeader />
              <Dashboard />
              <WordFilterList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
