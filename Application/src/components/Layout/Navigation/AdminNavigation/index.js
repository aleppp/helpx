import React from "react";
import {
  MdOutlineDashboard,
  MdOutlineLibraryBooks,
  MdContactMail,
} from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";

const AdminNavigation = () => {
  return (
    <nav className="admin-nav">
      <h1> Name</h1>
      <div className="links">
        <MdOutlineDashboard className="yellow" />
        <a href="/">Dashboard</a>
        <RiUserSettingsLine className="yellow" />
        <a href="/users">Users</a>
        <MdOutlineLibraryBooks className="yellow" />
        <a href="/audit">Audit Log</a>
        <VscSettingsGear className="yellow" />
        <a href="/configure">Configuration</a>
        <MdContactMail className="yellow" />
        <a href="/notification">Notification</a>
      </div>
    </nav>
  );
};

export default AdminNavigation;