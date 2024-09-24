import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const AppNavbar: React.FC = () => (
  <Navbar bg="light" expand="lg" className="zebrands-navbar px-3">
    <Navbar.Brand as={Link} to="/">
      <Image
        width="127"
        height="36"
        src="https://zebrands.mx/wp-content/uploads/2021/07/WEB-ZEB-05-1-127x36.png"
        className="attachment-large size-large"
        alt="logo" loading="lazy"
      />

    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/user-search" className="zebrands-nav-link">User Search</Nav.Link>
        <Nav.Link as={Link} to="/repo-search" className="zebrands-nav-link">Repo Search</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavbar;
