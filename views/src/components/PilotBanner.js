import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PilotBanner.css";

export const PilotBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="pilotBanner" id="pilot">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <label>
                <h1>Pilot Status</h1>
              </label>
              <label>
                <h2>Meet out pilot, *Piloto aser nombrado*</h2>
              </label>
              <label>
                <p>
                  En esta seccion se va aincluir informacion sobre el piloto,
                  como su nombre, edad, carrera y cual es su motivacion para ser
                  piloto del rover
                </p>
              </label>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="topics">
              <label>Explore our different team workspaces:</label>
              <span>
                <a href="/#vehicle" onClick={() => navigate("/")}>
                  Vehicle
                </a>
              </span>
              <span>
                <a href="/#tool" onClick={() => navigate("/")}>
                  Tool
                </a>
              </span>
              <span>
                <a href="/#telemetry" onClick={() => navigate("/")}>
                  Telemetry
                </a>
              </span>
              <span>
                <a href="/#home" onClick={() => navigate("/")}>
                  STEM
                </a>
              </span>
              <span>
                <a href="/#home" onClick={() => navigate("/")}>
                  Networks
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
