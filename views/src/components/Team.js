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
                  <label><p>We are a high school and college team from Tecnologico de Monterrey, campus Cuernavaca.
We have participated for nearly 10 years in the NASA Human Exploration Challenge competition, learning and improving after each year of competition and forming a team that prioritizes integration and team participation.
We are committed, as every year, to create a project based on dedication, perseverance, and dedication that demonstrates and meets the requirements to complete the challenge.
</p></label>
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
                  <label><p>Iktan roving's vision is that its members demonstrate their potential and passion for technology and innovation and become the leaders that will transform space engineering, driving them to achieve their goals and inspiring others to do so.
Likewise, the vision of the team is to have a great social impact by promoting technological and engineering education in our community so that more young people discover their potential and create solutions that benefit science and humanity.
</p></label>

                  <label><h3>Objective</h3></label>
                  <label><p>Our objective is based on creating a project that demonstrates our skills and knowledge in engineering, but beyond that, our objective is to inspire more young people to these areas of study to push projects that promote human development in science.
Moreover, to contribute to technological education and to more young people know their steps and areas of opportunity.
</p></label>

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
                    <li><label>Telemetry Award (April,2014)</label></li>
                    <li><label>STEM engagement (2021)</label></li>
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
