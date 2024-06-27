import React from 'react';
import { NavLink } from "react-router-dom";
import  { Navbar, Container, Nav } from 'react-bootstrap';
import '../App.css';

const Navigation = ()=> {
    return(
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav className="navLink">
            <Nav.Item>
              <NavLink exact to="/" className="nav-link" activeClassName="active-link">About Me</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/Portfolio" className="nav-link" activeClassName="active-link">Portfolio</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/Resume" className="nav-link" activeClassName="active-link">Resume</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/Contact" className="nav-link" activeClassName="active-link">Contact</NavLink>
            </Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ); 
}

export default Navigation;