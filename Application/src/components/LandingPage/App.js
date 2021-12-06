import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import { NavBtnLink } from "./components/Navbar/NavbarElements";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/contact-us" component={Contact} />
        <Route path="/sign-up" component={SignUp} />
      </Routes>
      <h2> We'll help you find the best solution.</h2>
      <div class="row">
        <div class="column">
          <LibraryBooksIcon
            style={{
              fill: "#27323c",
              marginTop: "-300px",
              marginLeft: "30px",
              height: "125",
              width: "125",
            }}
          />
          <h3>Documentation</h3>
          <NavBtnLink to="documentation">Learn More</NavBtnLink>
        </div>
        <div class="column">
          <TextSnippetIcon
            style={{
              fill: "#27323c",
              marginTop: "-300px",
              marginLeft: "30px",
              height: "125",
              width: "125",
            }}
          />
          <h3>Release Notes</h3>
          <NavBtnLink to="release-notes">Learn More</NavBtnLink>
        </div>
      </div>
    </Router>
  );
}

export default App;
