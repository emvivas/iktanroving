import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";

export const RoverPanel = () => {

  return (
    <section className="dashboard" id="roverPanel">
      <Container>
        <br></br>
        <a id="rover-in-action"/>
        <label><h3>IKTAN's Rover in action</h3></label>
        <a id="location"/>
        <label><h4>Location tracker service</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&refresh=5s&from=1681993185969&to=1682014785969&theme=light&panelId=2" width="100%" height="600" frameborder="0" title="Rover's Global Positioning System tracker 1"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4}>


              <Row className="aligh-items-center">
            <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&refresh=5s&from=1681990777966&to=1682012377966&theme=light&panelId=3" width="100%" height="300" frameborder="0" title="Rover's Global Positioning System tracker 2"></iframe>
            </Row>
           <Row className="aligh-items-center">
              
            <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&refresh=5s&from=1681990823378&to=1682012423378&theme=light&panelId=4" width="100%" height="300" frameborder="0" title="Rover's Global Positioning System tracker 3"></iframe>
            </Row>

          </Col>
        </Row>
        <br/>
        <a id="accelerometer-rotation"/>
        <label><h4>Acceleration</h4></label>
        <br/>

        
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/6FVGNFP4z/pilot-seat?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=2" width="100%" height="300" frameborder="0" title="Pilot Seat's acceleration time series"></iframe>
          </Col>
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/gLnydKEVz/copilot-seat?orgId=1&refresh=5s&from=1682007291646&to=1682028891646&theme=light&panelId=2" width="100%" height="300" frameborder="0" title="Copilot Seat's acceleration time series"></iframe>
          </Col>
        </Row>
        <br/><br/>
        <label><h4>Rotation</h4></label>
        <br/>

        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/6FVGNFP4z/pilot-seat?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=4" width="100%" height="300" frameborder="0" title="Pilot Seat's rotation time series"></iframe>
          </Col>
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/gLnydKEVz/copilot-seat?orgId=1&refresh=5s&from=1681991232773&to=1682012832773&theme=light&panelId=4" width="100%" height="300" frameborder="0" title="Copilot Seat's rotation time series"></iframe>
          </Col>
        </Row>
        <br/>
        <a id="altitude"/>
        <label><h4>Altitude</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=56" width="100%" height="200" frameborder="0" title="Seats' altitude state timeline"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=55" width="100%" height="200" frameborder="0" title="Seats' altitude bar gauge"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=57" width="100%" height="300" frameborder="0" title="Seats' altitude time series"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=58" width="100%" height="300" frameborder="0" title="Seats' altitude histogram"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=59" width="100%" height="175" frameborder="0" title="Seats' altitude table"></iframe>
          <br/>
        <hr/><br/>
        <a id="analysis"/>
	<label><h3>Tool's Computer Vision Analysis</h3></label>
        <br/>
        <video></video>
        <br/><br/>
        <hr/><br/>
        <a id="rover-crewmate-seats"/>
      <label><h3>Rover crewmates' status</h3></label>
      <a id="atmosphericPressure"/>
      <label><h4>Atmospheric pressure</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=15" width="100%" height="200" frameborder="0" title="Seats' atmospheric pressure state timeline"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=14" width="100%" height="200" frameborder="0" title="Seats' atmospheric pressure bar gauge"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=17" width="100%" height="300" frameborder="0" title="Seats' atmospheric pressure time series"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=19" width="100%" height="300" frameborder="0" title="Seats' atmospheric pressure histogram"></iframe>
          </Col>
        </Row>
          <br/>
          <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=16" width="100%" height="300" frameborder="0" title="Seats' atmospheric pressure calculated time series"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=18" width="100%" height="300" frameborder="0" title="Seats' atmospheric pressure calculated histogram"></iframe>
          </Col>
        </Row>
          <br/>
          <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=21" width="100%" height="175" frameborder="0" title="Seats' atmospheric pressure table"></iframe>
          </Col>
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=20" width="100%" height="175" frameborder="0" title="Seats' atmospheric pressure calculated table"></iframe>
          </Col>
        </Row>
        <br/>
        <a id="airQuality"/>
        <label><h4>Air quality</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&refresh=5s&from=1682007488243&to=1682029088243&theme=light&panelId=46" width="100%" height="200" frameborder="0" title="Seats' air quality state timeline"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=49" width="100%" height="200" frameborder="0" title="Seats' air quality bar gauge"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=48" width="100%" height="300" frameborder="0" title="Seats' air quality time series"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=51" width="100%" height="300" frameborder="0" title="Seats' air quality histogram"></iframe>
          </Col>
        </Row>
          <br/>
          <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=50" width="100%" height="300" frameborder="0" title="Seats' air quality calculated time series"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=53" width="100%" height="300" frameborder="0" title="Seats' air quality calculated histogram"></iframe>
          </Col>
        </Row>
          <br/>
          <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=52" width="100%" height="175" frameborder="0" title="Seats' air quality table"></iframe>
          </Col>
          <Col xs={12} md={6} xl={6} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=54" width="100%" height="175" frameborder="0" title="Seats' air quality calculated table"></iframe>
          </Col>
        </Row>
        <br/>
        <a id="temperature"/>
        <label><h4>Temperature</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=23" width="100%" height="200" frameborder="0" title="Seats' temperature state timeline"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=22" width="100%" height="200" frameborder="0" title="Seats' temperature bar gauge"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=25" width="100%" height="300" frameborder="0" title="Seats' temperature time series"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=24" width="100%" height="300" frameborder="0" title="Seats' temperature histogram"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=27" width="100%" height="175" frameborder="0" title="Seats' temperature table"></iframe>
          <br/>
          <a id="humidity"/>
          <label><h4>Humidity</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=26" width="100%" height="200" frameborder="0" title="Seats' humidity state timeline"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=29" width="100%" height="200" frameborder="0" title="Seats' humidity bar gauge"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=28" width="100%" height="300" frameborder="0" title="Seats' humidity time series"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=31" width="100%" height="300" frameborder="0" title="Seats' humidity histogram"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=30" width="100%" height="175" frameborder="0" title="Seats' humidity table"></iframe>
          <br/>
          <a id="magnetism"/>
          <label><h4>Magnetism</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=43" width="100%" height="200" frameborder="0" title="Seats' magnetism state timeline"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=42" width="100%" height="200" frameborder="0" title="Seats' magnetism bar gauge"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=45" width="100%" height="300" frameborder="0" title="Seats' magnetism time series"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=44" width="100%" height="300" frameborder="0" title="Seats' magnetism histogram"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=47" width="100%" height="175" frameborder="0" title="Seats' magnetism table"></iframe>
          <br/>
          <a id="ultravioletRadiation"/>
          <label><h4>Ultraviolet radiation</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=33" width="100%" height="200" frameborder="0" title="Seats' UV radiation state timeline"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=32" width="100%" height="200" frameborder="0" title="Seats' UV radiation bar gauge"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=35" width="100%" height="300" frameborder="0" title="Seats' UV radiation time series"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=34" width="100%" height="300" frameborder="0" title="Seats' UV radiation histogram"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="https://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=37" width="100%" height="175" frameborder="0" title="Seats' UV radiation table"></iframe>
          <br/>
          <a id="luxRadiation"/>
          <label><h4>Lux radiation</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&refresh=5s&from=1682013864103&to=1682035464103&theme=light&panelId=36" width="100%" height="200" frameborder="0" title="Seats' lux radiation state timeline"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=39" width="100%" height="200" frameborder="0" title="Seats' lux radiation bar gauge"></iframe>
          </Col>
        </Row>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={8} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=38" width="100%" height="300" frameborder="0" title="Seats' lux radiation time series"></iframe>
          </Col>
          <Col xs={12} md={4} xl={4} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=41" width="100%" height="300" frameborder="0" title="Seats' lux radiation histogram"></iframe>
          </Col>
        </Row>
          <br/>
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=40" width="100%" height="175" frameborder="0" title="Seats' lux radiation table"></iframe>
          <br/><br/>
        <label><h4>Printed Circuit Board internal temperature</h4></label>
        <br/>
          <iframe src="http://grafana.iktanroving.org/d-solo/AbhQTFP4k/seats?orgId=1&from=1681978871000&to=1681980204000&refresh=5s&theme=light&panelId=10" width="100%" height="300" frameborder="0" title="Seats' PCB internal temperature time series"></iframe>
          <br/>
        <hr/><br/>
        <a id="rover-wheels"/>
        <label><h3>Rover wheels' status</h3></label>
        <br/>
        <label><h4>Acceleration</h4></label>
        <br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/zo-laKE4z/top-right-wheel?orgId=1&from=1681834141000&to=1681977863000&theme=light&panelId=2" width="100%" height="300" frameborder="0" title="Top Right Wheel's acceleration time series"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/3Y5gBKP4k/top-left-wheel?orgId=1&from=1682009736004&to=1682031336004&theme=light&panelId=2" width="100%" height="300" frameborder="0" title="Top Left Wheel's acceleration time series"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/bWAnfFEVk/bottom-right-wheel?orgId=1&from=1682009870232&to=1682031470232&theme=light&panelId=2" width="100%" height="300" frameborder="0" title="Bottom Right Wheel's acceleration time series"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/iUgSBKEVk/bottom-left-wheel?orgId=1&from=1682010010457&to=1682031610458&theme=light&panelId=2" width="100%" height="300" frameborder="0" title="Bottom Left Wheel's acceleration time series"></iframe>
          </Col>
        </Row>
        <br/><br/>
        <label><h4>Rotation</h4></label>
        <br/>

        <Row className="aligh-items-center">
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/zo-laKE4z/top-right-wheel?orgId=1&from=1681834141000&to=1681977863000&theme=light&panelId=3" width="100%" height="300" frameborder="0" title="Top Right Wheel's rotation time series"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/3Y5gBKP4k/top-left-wheel?orgId=1&from=1682009794255&to=1682031394255&theme=light&panelId=3" width="100%" height="300" frameborder="0" title="Top Left Wheel's rotation time series"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/bWAnfFEVk/bottom-right-wheel?orgId=1&from=1682009938016&to=1682031538017&theme=light&panelId=4" width="100%" height="300" frameborder="0" title="Bottom Right Wheel's rotation time series"></iframe>
          </Col>
          <Col xs={12} md={3} xl={3} className="graph">
          <iframe src="http://grafana.iktanroving.org/d-solo/iUgSBKEVk/bottom-left-wheel?orgId=1&from=1682010057007&to=1682031657007&theme=light&panelId=4" width="100%" height="300" frameborder="0" title="Bottom Left Wheel's rotation time series"></iframe>
          </Col>
        </Row>
        <br/><br/>
        <label><h4>Printed Circuit Board internal temperature</h4></label>
        <br/>
          <iframe src="http://grafana.iktanroving.org/d-solo/Nqf2BFEVz/wheels?orgId=1&from=1681834141000&to=1681977863000&theme=light&panelId=2" width="100%" height="300" frameborder="0" title="Wheels' PCB internal temperature time series"></iframe>
          <br/><br/>
        <hr/><br/>
      </Container>
    </section>
  )
}
