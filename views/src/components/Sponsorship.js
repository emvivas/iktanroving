import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import iktanLogo from "../assets/img/iktanLogo.png";
import wurthLogo from "../assets/img/sponsorship/wurth.png";
import baxterLogo from "../assets/img/sponsorship/baxter.png";
import madlerLogo from "../assets/img/sponsorship/madler.png";
import hefzibaLogo from "../assets/img/sponsorship/hefziba.png";
import yucatanHerbalLogo from "../assets/img/sponsorship/yucatanHerbal.png";
import servidoresElRusoLogo from "../assets/img/sponsorship/servidoreselruso.png";

import "./Sponsorship.css";

export const Sponsorship = () => {

  return (
    <section className="sponsorship" id="sponsorship">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
          <div className='sponsorsLogos'>
            <a href="https://www.tiendawurth.com.mx/" target="_blank" rel="noopener noreferrer"><img src={wurthLogo} alt="Würth México"/></a>
            <img src={hefzibaLogo} alt="HEFZI-BÁ."/>
            <a href="https://www.baxter.mx/es/quienes-somos" target="_blank" rel="noopener noreferrer"><img src={baxterLogo} alt="Baxter México"/></a>
            <a href="https://www.maedler.de/" target="_blank" rel="noopener noreferrer"><img src={madlerLogo} alt="Mädler"/></a>
            <a href="https://yucatanamenities.com/" target="_blank" rel="noopener noreferrer"><img src={yucatanHerbalLogo} alt="Yucatán Herbal."/></a>
            <a href="http://www.servidoreselruso.tk/" target="_blank" rel="noopener noreferrer"><img src={servidoresElRusoLogo} alt="Servidores 'El Ruso'."/></a>
          </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <figure>
                  <img id="iktanLogo" src={iktanLogo} alt="IKTAN Roving's logo."/>
                  <label><p><blockquote>Thank you so much</blockquote></p></label>
                  <label>
                    <p>
                      <small>
                        We cannot express enough gratitude for your support and sponsorship of our team in the NASA Human Exploration Rover Challenge. Your generosity has made a significant impact on our ability to participate in this competition and has allowed us to bring our innovative Rover design to life.
                      </small>
                    </p>
                  </label>
                  <figcaption><label><p>Sincerely, IKTAN Roving.</p></label></figcaption>
                  </figure>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
