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
                  <label><p>Meet our rover, which is a representation of months of work and great teamwork. It has been a long process, and various obstacles arose, but we, the members of the Iktan Roving team, based on perseverance, dedication, and passion for learning, were able to achieve our goals.</p></label>
                  <label><p>This competition is about more than winning or being the best, it's about progressing, advancing, and learning about what we love, about what drives us, and about being better engineers every day. Our team is made up of high school and college students with different abilities, talents, and passions that help the Iktan team show its potential in every competition.</p></label>
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
                  <label><p>Our rover is equipped with a range of task tools made up of a main body different modules that the drivers could use for the different circumstances that the obstacle course proposes. These tools have been carefully designed and built by our team, to ensure that they are the most advanced and efficient tools possible.</p></label>
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
