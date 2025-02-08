import React from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import logo3 from '../../Assests/images/logo5.png'

const NavbarComponent = () => {
  return (
    <Navbar  expand="lg" className='nav-main'>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo3} 
            width="20"
            height="20"
            className="logo"
            alt="Your Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Add your navigation links here */}
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/form">Add Tour Places</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
