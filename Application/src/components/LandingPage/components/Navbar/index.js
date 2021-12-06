import React from "react";
import {
  Nav,
  NavLink,
  NavLink1,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink1 to="/">
          <h1>HELPX</h1>
        </NavLink1>
        <Bars />
        <NavMenu>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/faq" activeStyle>
            FAQ
          </NavLink>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavMenu>
        <NavBtn></NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
