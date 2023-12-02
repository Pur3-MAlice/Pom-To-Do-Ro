import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom/";

const NavBar = () => {
  return (
    <Nav
      justify
      defaultActiveKey="/"
      style={{
        padding: "30px 0 0 0",
      }}
    >
      <Nav.Item>
        <NavLink to="/">
          BasePage <i class="fa-solid fa-campground"></i>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/profile">
          Profile <i class="fa-solid fa-user-astronaut"></i>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/signout">
          Signout <i class="fa-solid fa-ghost"></i>
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
