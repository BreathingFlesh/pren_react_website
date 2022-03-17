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
          <Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-md-0">
              <Nav.Link className="d-md-none" href="#Infos" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Infos</Nav.Link>
              <Nav.Link className="d-md-none" href="#Pflanze" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Pflanze</Nav.Link>
              <Nav.Link className="d-md-none" href="#Zielgerade" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Zielgerade</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header> 
    </>
  );
};