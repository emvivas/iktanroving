import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import iktanLogo from "../assets/img/iktanLogo.png";
import wurthLogo from "../assets/img/sponsorship/wurth.png";
import srvrso from "../assets/img/sponsorship/servidoreselruso.png";
import wurthLogo3 from "../assets/img/sponsorship/wurth.png";
import wurthLogo4 from "../assets/img/sponsorship/wurth.png";
import wurthLogo5 from "../assets/img/sponsorship/wurth.png";

import "./Sponsorship.css";

export const Sponsorship = () => {

  return (
    <section className="sponsorship" id="sponsorship">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
          <div className='sponsorsLogos'>
            <img src={wurthLogo} alt="Header Img"/>
            <a href="http://www.servidoreselruso.tk"><img src={srvrso} alt="Servidores 'El Ruso."/></a>
            <img src={wurthLogo3} alt="Header Img"/>
            <img src={wurthLogo4} alt="Header Img"/>
            <img src={wurthLogo5} alt="Header Img"/>
          </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <figure>
                  <img id="iktanLogo" src={iktanLogo} alt="IKTAN Roving's logo."/>
                  <label><p><blockquote>Thank you so much!</blockquote></p></label>
                  <label>
                    <p>
                      <small>
                        We cannot express enough gratitude for your support and sponsorship of our team in the NASA Human Exploration Rover Challenge. Your generosity has made a significant impact on our ability to participate in this competition and has allowed us to bring our innovative rover design to life, especially for the help of ---
                      </small>
                    </p>
                  </label>
                  <figcaption><label><p>Sincerely, Iktan Roving</p></label></figcaption>
                  </figure>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
