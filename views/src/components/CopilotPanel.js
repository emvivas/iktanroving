import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import rover1 from "../assets/img/rover1.png";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export const CopilotPanel = () => {
  const navigate = useNavigate();

  return (
    <section className="dashboard" id="roverPanel">
      <Container>
        
        <label><h3>More than a vehicle</h3></label>
        <Row className="aligh-items-center monitoringSection">
          <Col xs={12} md={4} xl={4}>
          <figure>
          <img className="imageSection" src={rover1} alt="Header Img"/>
          <figcaption>
              <label><p>Rover schema designed on SolidWorks.</p></label>
          </figcaption>
        </figure>
          </Col>
          <Col xs={12} md={8} xl={8}>
          <iframe src="http://localhost:2000/d-solo/XtTLUG24z/rovers-first-section?orgId=1&refresh=5s&from=1672944998581&to=1672966598581&theme=light&panelId=12" width="100%" height="350" frameborder="0"></iframe>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={8} md={8} xl={8} className="graph">
          <iframe src="http://localhost:2000/d-solo/XtTLUG24z/rovers-first-section?orgId=1&refresh=5s&from=1672937234133&to=1672958834133&theme=light&panelId=4" width="100%" height="105" frameborder="0"></iframe>
          
          </Col>
          <Col xs={4} md={4} xl={4} className="graph">
          
          <iframe src="http://localhost:2000/d-solo/XtTLUG24z/rovers-first-section?orgId=1&refresh=5s&from=1672938291036&to=1672959891036&theme=light&panelId=8" width="100%" height="105" frameborder="0"></iframe>
          
          </Col>
        </Row>

        <iframe src="http://localhost:2000/d-solo/XtTLUG24z/rovers-first-section?orgId=1&refresh=5s&from=1672936727494&to=1672958327494&theme=light&panelId=2" width="100%" height="300" frameborder="0"></iframe>

        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://localhost:2000/d-solo/XtTLUG24z/rovers-first-section?orgId=1&refresh=5s&from=1672940968343&to=1672962568344&theme=light&panelId=10" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://localhost:2000/d-solo/XtTLUG24z/rovers-first-section?orgId=1&refresh=5s&from=1672941018420&to=1672962618420&theme=light&panelId=6" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
                  
          
      </Container>
    </section>
  )
}
