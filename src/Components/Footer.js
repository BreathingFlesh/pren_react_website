import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Footer = () => {
  return (
    <>
        <footer className="footer mt-auto py-3 bg-light">
            <Container>
            <Row>
                <Col>
                    <b>Informatik</b>
                    <p>Chantal Trutmann<br/>
                    Jean-Luc Bittel</p>
                </Col>
                <Col>
                    <b>Elektrotechnik</b>
                    <p>Ivan Herger<br/>
                    Basil Estermann</p>
                    </Col> 
                <Col>
                    <b>Maschinentechnik </b>
                    <p>Toma Sarbach<br/>
                    Sven Burri</p>
                </Col>
                <Col>
                    <b>Hochschule Luzern</b>
                    <p>Projekt Pflanzenroboter<br/>
                    Modul PREN</p>
                </Col>  
            </Row>
            </Container>
        </footer>
    </>
  );
};