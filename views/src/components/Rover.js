import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import rover1 from "../assets/img/rover1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import "./Rover.css";

export const Rover = () => {
  const navigate = useNavigate();

  return (
    <section className="rover" id="rover">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <div>
        <label><h2>Meet our Rover</h2></label>
        </div>    
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="topics">
              <label>Explore our different team workspaces:</label>
              <span><a href="/#vehicle" onClick={()=>navigate("/")}>Vehicle</a></span>
              <span><a href="/#tool" onClick={()=>navigate("/")}>Tool</a></span>
              <span><a href="/#telemetry" onClick={()=>navigate("/")}>Telemetry</a></span>
              <span><a href="/#home" onClick={()=>navigate("/")}>STEM</a></span>
              <span><a href="/#home" onClick={()=>navigate("/")}>Networks</a></span>
            </div>
          </Col>
        </Row>
        <hr/>
                  <label><h3 id="vehicle">More than a vehicle</h3></label>
                  <label><p>Meet our rover, a true testament to the limitless potential of human ingenuity and determination. More than just a vehicle, it represents the culmination of months of hard work and dedication from our team of high school or college students. As participants in the NASA Human Exploration Rover Challenge, we have taken on the challenge of designing and building a human-powered rover that can navigate through a rigorous obstacle course and complete various tasks.</p></label>
                  <label><p>But this competition is not just about winning, it is about pushing ourselves to new heights and learning valuable skills in engineering, teamwork, and problem-solving. Our team is made up of students with a wide range of backgrounds and talents, all brought together by a common passion for innovation and exploration. We have spent countless hours in the design and building phase, testing and refining our rover to ensure that it is the most advanced and efficient vehicle possible.</p></label>
                  <label><p>As we head into the competition, we are filled with a sense of excitement and nervous energy. We know that the competition will be fierce, but we are ready to give it our all and demonstrate the capabilities of our rover. We invite you to follow our journey as we work towards the competition and beyond, as we strive to make a difference in the field of human exploration.</p></label>
                  <button onClick={() => navigate("/missionStatus")}>Learn more<ArrowRightCircle size={25} /></button>
                  <div className="mainImage">
                <figure>
                <img className="imageSection" src={rover1} alt="Header Img"/>
                    <figcaption>
                        <label><p>Rover schema designed on SolidWorks.</p></label>
                    </figcaption>
                </figure>
            </div> 
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3 id="tool">Tool</h3></label>
                  <label><p>Our rover is equipped with a task tool, allowing it to complete a variety of tasks on the obstacle course. This tool have been carefully designed and built by our team, to ensure that it is the most advanced and efficient tool possible.</p></label>
                  <button onClick={() => navigate("/missionStatus")}>Learn more<ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div class="mainImage">
                <figure>
                <img className="imageSection" src={rover1} alt="Header Img"/>
                    <figcaption>
                        <label><p>Rover schema designed on SolidWorks.</p></label>
                    </figcaption>
                </figure>
            </div> 
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3 id="telemetry">Telemetry</h3></label>
                  <label><p>A set of sensors that will help us to have the control of the pilots' status and how they are reacting to the mission's environment, at the same time measure relevant information of the mission, the rover and the samples, such as acceleration, inclination, vibration referring to the rover behavior and the amount of chemical substances on the samples.</p></label>
                   <button onClick={() => navigate("/missionStatus")}>Learn more<ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div class="mainImage">
                <figure>
                <img className="imageSection" src={rover1} alt="Header Img"/>
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
