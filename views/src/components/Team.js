import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import rover2Image from "../assets/img/rover2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import "./Team.css";

export const Team = () => {
  const navigate = useNavigate();

  return (
    <section className="team" id="team">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <div>
        <label><h2>Meet the team</h2></label>
        </div>    
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="topics">
              <label>Check it out:</label>
              <span><a href="#home" onClick={()=>navigate("/")}>IKTAN</a></span>
              <span><a href="#home" onClick={()=>navigate("/")}>Mission</a></span>
              <span><a href="#home" onClick={()=>navigate("/")}>Vision</a></span>
              <span><a href="#home" onClick={()=>navigate("/")}>Objective</a></span>
              <span><a href="#home" onClick={()=>navigate("/")}>Achievments</a></span>
            </div>
          </Col>
        </Row>
        <hr/>
                  <label><h3>About us</h3></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <div className="mainImage">
                <figure>
                <img className="imageSection" src={rover2Image} alt="Header Img"/>
                    <figcaption>
                        <label><p>Rover schema designed on SolidWorks.</p></label>
                    </figcaption>
                </figure>
            </div> 
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3>Vision</h3></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="mainImage">
                <figure>
                <img className="imageSection" src={rover2Image} alt="Header Img"/>
                    <figcaption>
                        <label><p>Rover schema designed on SolidWorks.</p></label>
                    </figcaption>
                </figure>
            </div> 
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3>Objective</h3></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div class="mainImage">
                <figure>
                <img className="imageSection" src={rover2Image} alt="Header Img"/>
                    <figcaption>
                        <label><p>Rover schema designed on SolidWorks.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={rover2Image} alt="Header Img"/>
                    <figcaption>
                        <label><p>Rover schema designed on SolidWorks.</p></label>
                    </figcaption>
                </figure>
            </div> 
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3>Achievments</h3></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <label><p>Build a Rover where two pilots are in charge of going through a track with obstacles that resemble extraterrestrial surfaces, where our goal is to travel the road in less than 7 minutes fulfilling the different tasks to get points in the competition.</p></label>
                  <ul>
                    <li><label>FC. Barcelona</label></li>
                    <li><label>Real Madrid</label></li>
                    <li><label>Real Betis</label></li>
                    <li><label>Atlético de Madrid</label></li>
                  </ul>
                  <ol>
                    <li><label>Julio</label></li>
                    <li><label>Carmen</label></li>
                    <li><label>Ignacio</label></li>
                    <li><label>Elena</label></li>
                  </ol>
                  <button onClick={() => navigate("/missionStatus")}>Learn more<ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div class="mainImage">
                <figure>
                <img className="imageSection" src={rover2Image} alt="Header Img"/>
                    <figcaption>
                        <label><p>Rover schema designed on SolidWorks.</p></label>
                    </figcaption>
                </figure>
            </div> 
          </Col>
        </Row>
      </Container>
    </section>
  )
}
