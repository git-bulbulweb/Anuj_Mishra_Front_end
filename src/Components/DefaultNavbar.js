import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./DefaultNavbar.css";
import {PiSparkleDuotone} from "react-icons/pi"; 
import {FiGift} from "react-icons/fi"; 
const DefaultNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
  <Container fluid>
    <Navbar.Brand><Link id="logo" to="/"><img src='images/logo.png' alt='' width={'30px'} height={'30px'}></img></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" id="links">
        <Link to="/tutorials" className="nav-link">Tutorials</Link>
        <Link to="/exercises" className="nav-link">Exercises</Link>
        <Link to="/getCertified" className="nav-link">Get Certified</Link>
        <Link to="/services" className="nav-link">Services</Link>
      </Nav>
      <Nav className="ms-auto">
        <Link to="/" id='bt'  className="nav-link "><span><PiSparkleDuotone/></span>Bootcamp</Link>
        <Link to="/" id='bt' className="nav-link"><span className='icons'><FiGift/></span>Spaces</Link>
        <Link to="/signUp" className="nav-link"><Button id="btn" variant="success">SignUp</Button>{' '}</Link>
        <Link to="/login" className="nav-link"><Button id="btn1" variant="success">Login</Button>{' '}</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}


export default DefaultNavbar
