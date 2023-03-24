import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { useNavigate } from "react-router-dom";
import "./GeneralBanner.css";

export const GeneralBanner = () => {

  const navigate = useNavigate();

  return (
    <section className="generalBanner" id="general">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className="animate__animated animate__fadeIn">
                  <label><h1>General Status</h1></label>
                  <label><h2>Failure is not an option.</h2></label>
                  <label><p>This section is dedicated to displaying how the rover works through a simulation in CAD software so its easier to comprehend whilst not having the rover on
                     hand to touch it a review it. The simulations are mostly done with Maya and the model for the rover comes directly from the design and manufacturing team.</p></label>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className="topics">
              <label>Explore our different team workspaces:</label>
              <span><a href="/#vehicle" onClick={()=>navigate("/")}>Vehicle</a></span>
              <span><a href="/#tool" onClick={()=>navigate("/")}>Tool</a></span>
              <span><a href="/#telemetry" onClick={()=>navigate("/")}>Telemetry</a></span>
              <span><a href="/#home" onClick={()=>navigate("/")}>STEM</a></span>
              <span><a href="/#home" onClick={()=>navigate("/")}>Networks</a></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
