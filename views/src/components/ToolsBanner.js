import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ToolsBanner.css";

export const ToolsBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="toolsBanner" id="tools">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <label>
                <h1>Tools Status</h1>
              </label>
              <label>
                <h2>NASA HERC Team</h2>
              </label>
              <label>
                <p>
                  Last but no least this section is dedicated to any data that
                  we can gather from our tool specially designed for the
                  challenges of this HERC competition, this way we can monitor
                  the quality of the sample and the quantity of whatever out
                  pilots have gathered.
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
