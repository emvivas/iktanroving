import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import rover1 from "../assets/img/rover1.png";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export const RoverPanel = () => {
  const navigate = useNavigate();

  return (
    <section className="dashboard" id="roverPanel">
      <Container>
        
        <label><h3>Rover wheels' status</h3></label>
        <label><h4>Revolutions per minute (rpm)</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=6" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=7" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/new-dashboard?orgId=1&from=1675724357000&to=1675724788000&refresh=5s&theme=light&panelId=2" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=5" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=8" width="100%" height="175" frameborder="0"></iframe>
        <br/><br/><br/>

        <label><h4>Rotation velocity</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=6" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=7" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/new-dashboard?orgId=1&from=1675724357000&to=1675724788000&refresh=5s&theme=light&panelId=2" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=5" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=8" width="100%" height="175" frameborder="0"></iframe>
        <br/><br/><br/>

        <label><h4>Acceleration</h4></label>
        <br/>

        
        <Row className="aligh-items-center">
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://localhost:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=7" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://localhost:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=7" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://localhost:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=7" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://localhost:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=7" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/><br/><br/>
        <label><h4>Rotation</h4></label>
        <br/>

        <Row className="aligh-items-center">
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://localhost:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=8" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://localhost:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=8" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://localhost:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=8" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://localhost:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=8" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/><br/><br/>
        <label><h4>Printed Circuit Board surface distance</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=6" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=7" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&refresh=5s&from=1675724357000&to=1675724788000&theme=light&panelId=4" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=5" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=8" width="100%" height="175" frameborder="0"></iframe>
          <br/><br/><br/>
        <label><h4>Printed Circuit Board internal temperature</h4></label>
        <br/>
          <iframe src="http://localhost:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&refresh=5s&from=1675724357000&to=1675724788000&theme=light&panelId=3" width="100%" height="300" frameborder="0"></iframe>
          <br/><br/><br/>

        
          
      </Container>
    </section>
  )
}
