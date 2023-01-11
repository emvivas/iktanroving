import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import iktanLogo from "../assets/img/iktanLogo.png";
import wurthLogo from "../assets/img/sponsorship/wurth.png";
import wurthLogo2 from "../assets/img/sponsorship/wurth.png";
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
            <img src={wurthLogo2} alt="Header Img"/>
            <img src={wurthLogo3} alt="Header Img"/>
            <img src={wurthLogo4} alt="Header Img"/>
            <img src={wurthLogo5} alt="Header Img"/>
          </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <figure>
                  <img id="iktanLogo" src={iktanLogo} alt="IKTAN Roving's logo."/>
                  <label><p><blockquote>Thank you so much!</blockquote></p></label>
                  <label><p><small>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</small></p></label>
                  <figcaption><label><p>IKTAN Roving Team.</p></label></figcaption>
                  </figure>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
