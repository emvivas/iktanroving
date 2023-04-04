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
        <br></br>
        <label><h3>Rover in operation</h3></label>
        <label><h4>Location tracker service</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://localhost:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=53" width="100%" height="500" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4}>


              <Row className="aligh-items-center">
            <iframe src="http://localhost:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=54" width="100%" height="250" frameborder="0"></iframe>
            </Row>
           <Row className="aligh-items-center">
              
            <iframe src="http://localhost:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=55" width="100%" height="250" frameborder="0"></iframe>
            </Row>

          </Col>
        </Row>
        <br/><br/>
        <hr/><br/>
      <label><h3>Rover crewmate seats' status</h3></label>
      <label><h4>Atmospheric pressure</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=14" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=13" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=11" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=17" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=12" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=16" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=15" width="100%" height="175" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=18" width="100%" height="175" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/><br/><br/>
        <label><h4>Air quality</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=44" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=45" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=46" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=49" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=48" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=51" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=50" width="100%" height="175" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=47" width="100%" height="175" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/><br/><br/>
        <label><h4>Temperature</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=19" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=20" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=21" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=22" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=23" width="100%" height="175" frameborder="0"></iframe>
          <br/><br/><br/>
          <label><h4>Humidity</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=24" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=25" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=26" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=27" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=28" width="100%" height="175" frameborder="0"></iframe>
          <br/><br/><br/>
          <label><h4>Magnetism</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=39" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=40" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=41" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=42" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=43" width="100%" height="175" frameborder="0"></iframe>
          <br/><br/><br/>
          <label><h4>Ultraviolet radiation</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=29" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=30" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=31" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=32" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=33" width="100%" height="175" frameborder="0"></iframe>
          <br/><br/><br/>
          <label><h4>Lux radiation</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=34" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=35" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=36" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=38" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=37" width="100%" height="175" frameborder="0"></iframe>
          <br/><br/><br/>
        <label><h4>Acceleration</h4></label>
        <br/>

        
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/xe9ap-BVz/iktan-rovers-pilot-seat?orgId=1&from=1680287562335&to=1680309162335&theme=light&panelId=2" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/4effneBVk/iktan-rovers-copilot-seat?orgId=1&from=1680287374312&to=1680308974312&theme=light&panelId=2" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/><br/><br/>
        <label><h4>Rotation</h4></label>
        <br/>

        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/xe9ap-BVz/iktan-rovers-pilot-seat?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=4" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/4effneBVk/iktan-rovers-copilot-seat?orgId=1&from=1680264653584&to=1680286253584&theme=light&panelId=4" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/><br/><br/>
        <label><h4>Printed Circuit Board surface distance</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=2" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=3" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=4" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=5" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=6" width="100%" height="175" frameborder="0"></iframe>
          <br/><br/><br/>
        <label><h4>Printed Circuit Board internal temperature</h4></label>
        <br/>
          <iframe src="http://192.168.100.15:2000/d-solo/h7iQNYfVk/iktan-rovers-seats?orgId=1&from=1679873199000&to=1679873342000&theme=light&panelId=8" width="100%" height="300" frameborder="0"></iframe>
          <br/><br/>
        <hr/><br/>
        <label><h3>Rover wheels' status</h3></label>
        <label><h4>Revolutions per minute (rpm)</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=6" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=7" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/new-dashboard?orgId=1&from=1675724357000&to=1675724788000&refresh=5s&theme=light&panelId=2" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=5" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=8" width="100%" height="175" frameborder="0"></iframe>
        <br/><br/><br/>

        <label><h4>Rotation velocity</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=6" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=7" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/new-dashboard?orgId=1&from=1675724357000&to=1675724788000&refresh=5s&theme=light&panelId=2" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=5" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=8" width="100%" height="175" frameborder="0"></iframe>
        <br/><br/><br/>

        <label><h4>Acceleration</h4></label>
        <br/>

        
        <Row className="aligh-items-center">
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=7" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=7" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=7" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=7" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/><br/><br/>
        <label><h4>Rotation</h4></label>
        <br/>

        <Row className="aligh-items-center">
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=8" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=8" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=8" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/mS3_3sAVz/iktan-rovers-top-right-wheel?orgId=1&refresh=5s&from=1675724357000&to=1675724787000&theme=light&panelId=8" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/><br/><br/>
        <label><h4>Printed Circuit Board surface distance</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=6" width="100%" height="200" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=7" width="100%" height="200" frameborder="0"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&refresh=5s&from=1675724357000&to=1675724788000&theme=light&panelId=4" width="100%" height="300" frameborder="0"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=5" width="100%" height="300" frameborder="0"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&from=1675805215000&to=1675805840000&theme=light&panelId=8" width="100%" height="175" frameborder="0"></iframe>
          <br/><br/><br/>
        <label><h4>Printed Circuit Board internal temperature</h4></label>
        <br/>
          <iframe src="http://192.168.100.15:2000/d-solo/Cy00R8A4k/iktan-rovers-wheels?orgId=1&refresh=5s&from=1675724357000&to=1675724788000&theme=light&panelId=3" width="100%" height="300" frameborder="0"></iframe>
          <br/><br/><br/>

        
          
      </Container>
    </section>
  )
}
