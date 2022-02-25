import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export const Navigation = () => {
  return (
    <>
    <header>
      <Navbar className="fixed-top" bg="dark" expand="md">
        <Container>
          <Navbar.Brand href="#">PREN Gruppe 5</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-md-0">
              <Nav.Link className="d-md-none" href="#Infos">Infos</Nav.Link>
              <Nav.Link className="d-md-none" href="#Pflanze">Pflanze</Nav.Link>
              <Nav.Link className="d-md-none" href="#Zielgerade">Zielgerade</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header> 
    </>
  );
};