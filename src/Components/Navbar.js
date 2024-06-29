import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  let highLightNavLink = (active) => {
    if (active.isActive == true) {
      return {
        color: "#f5118e",
      };
    }
  };

  return (
    <div>
      <nav>
        <NavLink
          to={"/"}
          style={(active) => {
            return highLightNavLink(active);
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/login"}
          style={(active) => {
            return highLightNavLink(active);
          }}
        >
          Login
        </NavLink>
        <NavLink
          to={"/signup"}
          style={(active) => {
            return highLightNavLink(active);
          }}
        >
          Signup
        </NavLink>
        <NavLink
          to={"/dashboard"}
          style={(active) => {
            return highLightNavLink(active);
          }}
        >
          Dashboard
        </NavLink>
        <NavLink to={"/login"}>Logout</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
