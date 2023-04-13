import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./RoverBanner.css";

export const RoverBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="roverBanner" id="rover">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <label>
                <h1>Rover Status</h1>
              </label>
              <label>
                <h2>More than a vehicle</h2>
              </label>
              <label>
                <p>
                  This section is solely dedicated to the physical Rover, all
                  data ranging from position, velocity, rotation and any else
                  This section is solely dedicated to the physical rover, all
                  data ranging from position, velocity, rotation to and any data
                  that we can recollect so we can enable our mission control
                  team to monitor for hazardous environments and be able to
                  react to it.
                </p>
              </label>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="topics">
              <label>Monitoring sections:</label>
              <span>
                <a href="/missionStatus#rover-in-operation" onClick={() => navigate("/missionStatus#rover-in-operation")}>
                  Rover in operation
                </a>
              </span>
              <span>
                <a href="/missionStatus#rover-crewmate-seats" onClick={() => navigate("/missionStatus#rover-crewmate-seats")}>
                  Rover crewmate seats
                </a>
              </span>
              <span>
                <a href="/missionStatus#rover-wheels" onClick={() => navigate("/missionStatus#rover-wheels")}>
                  Rover wheels
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
