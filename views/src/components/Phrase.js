import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import lunaImg from "../assets/img/luna.png";
import marteImg from "../assets/img/marte.png";
import iktanLogo from "../assets/img/iktanLogo.png";
import 'animate.css';

import "./Phrase.css";

export const Phrase = () => {
  return (
    <section className="phrase" id="phrase">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
                  <figure>
                  <img id="iktanLogo" src={iktanLogo} alt="IKTAN Roving's logo."/>
                  <label><p><blockquote>"Failure is not an option".</blockquote></p></label>
                  <figcaption><label><p>IKTAN Roving Team.</p></label></figcaption>
                  </figure>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div id="backgroundContainer" className="animate__animated animate__zoomIn">
                  <img id="marsImage" src={marteImg} alt="Header Img"/>
                  <img id="moonImage" src={lunaImg} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
