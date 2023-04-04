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
                  <label><h2>Failure is not an option</h2></label>
                  <label><p>In this section you´ll find a summarized version of
                  the most important data we compiled at the top section and a
                  very detailed collection of data below it.</p></label>
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
