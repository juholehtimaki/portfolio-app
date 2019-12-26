import React from "react";
import { Link } from "react-scroll";
import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar = props => {
  return (
    <div id="mynavbar">
      <Navbar className="test" expand="lg" bg="light" variant="light">
        <Navbar.Brand>JL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Education
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
