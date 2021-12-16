import React from "react";
import ReactDOM from "react";
import "./style.css";

export default function Filter() {
  return (
    <div class="container">
      <form>
        <input type="search" placeholder="Search..."></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
