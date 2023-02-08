import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/iktanLogo.png";
import tecLogo from "../assets/img/tec-logo.png";
import herc from "../assets/img/nasa-herc.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col size={12} sm={6}>
            <a href="/#banner"><img src={logo} alt="IKTAN Roving's logo."/></a>
            <a href="https://tec.mx/es/ingenieria-y-ciencias" target="_blank" rel="noopener noreferrer"><img id="tecLogoFooter" src={tecLogo} alt="Tecnológico de Monterrey. Escuela de Ingeniería y Ciencias."/></a>
            <a href="https://www.nasa.gov/stem/roverchallenge/home/index.html" target="_blank" rel="noopener noreferrer"><img id="hercFooter" src={herc} alt="NASA Human Exploration Rover Challenge."/></a>
          </Col>
          <Col size={12} sm={6}>
            <figure>
            <div className="social-icon">
              <a href="https://www.tiktok.com/@iktan_roving" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/IKTANRoving" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/iktan_roving" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            </figure>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
