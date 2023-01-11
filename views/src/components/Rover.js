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
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
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
                  <label><h3>More than a vehicle</h3></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <button onClick={() => navigate("/missionStatus")}>Learn more<ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="mainImage">
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
                  <label><h3 id="tool">Tool</h3></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
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
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
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
