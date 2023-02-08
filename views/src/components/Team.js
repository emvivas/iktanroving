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
                  <label><p>We are a team of high school or college students from Morelos, Mexico who have come together to participate in the NASA Human Exploration Rover Challenge. Our goal is to design and build a human-powered rover that can navigate through a challenging obstacle course and complete various tasks.</p></label>
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
                  <label><p>Our vision is to be a leader in human exploration, pushing the boundaries of what is possible and inspiring future generations.</p></label>

                  <label><h3>Objective</h3></label>
                  <label><p>In the long term, our goal is to not only inspire those around us but to push ourselves to our own limits in order to accomplish more winning projects. Be it in this field or others.</p></label>

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
                  <label><h3>Achievments</h3></label>
                  <label><p>In the last competition we’ve already achieved two awards, including the #1 place overall in the competition. But before that we’d like to mention our pasts generations and their accomplishment of being the oldest honor project in our campus; having as of now more than 10 generations of rovers and competitor teams in NASA.</p></label>
                  <ul>
                    <li><label>FC. Barcelona</label></li>
                    <li><label>Real Madrid</label></li>
                    <li><label>Real Betis</label></li>
                    <li><label>Atlético de Madrid</label></li>
                  </ul>
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
