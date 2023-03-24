import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "animate.css";
import "./CopilotBanner.css";

export const CopilotBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="copilotBanner" id="copilot">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <label>
                <h1>Copilot Status</h1>
              </label>
              <label>
                <h2>Meet our copilot, *Copiloto aser nombrado*</h2>
              </label>
              <label>
                <p>
                  Similar al piloto
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
