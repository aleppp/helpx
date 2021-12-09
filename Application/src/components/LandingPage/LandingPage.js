import React from "react";
import "./LandingPage.css";
import VerticalBar from "./VerticalBar/VerticalBar";
import Header from "./Header/Header";
import HorizontalBar from "./HorizontalBar/HorizontalBar";
import Menu from "./Menu/Menu";

function LandingPage() {
  return (
    <div className="container">
      <div className="nav">
        <VerticalBar />
      </div>
      <div className="body">
        <div className="header">
          <Header />
        </div>
        <div className="navhor">
          <HorizontalBar />
        </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
