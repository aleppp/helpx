import React, { useState, useEffect } from "react";
import "./UsersPanel.css";

function UsersPanel() {
  return (
    <div className="user-panel">
      <h2>Users without roles</h2>
      <div class="green-circle"></div>
      <span>User123</span>
      <br />
      <div class="green-circle"></div>
      <span>User312</span>
      <br />
      <br />
      <h2>Not active user</h2>
      <div class="gray-circle"></div>
      <span>User216</span>
    </div>
  );
}

export default UsersPanel;
