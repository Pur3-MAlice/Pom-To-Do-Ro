import React from "react";
import { Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Nav justify defaultActiveKey="/home"
    style={{ 
        padding:'30px 0 0 0',
        }}>
      <Nav.Item>
        <Nav.Link href="/home">BasePage <i class="fa-solid fa-campground"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Profile <i class="fa-solid fa-sliders"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Logout <i class="fa-solid fa-door-open"></i></Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;