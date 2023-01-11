import React, {useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/img/frontpage/1.jpg";
import img2 from "../assets/img/frontpage/2.jpg";
import img3 from "../assets/img/frontpage/3.jpg";
import img4 from "../assets/img/frontpage/4.jpg";
import img5 from "../assets/img/frontpage/5.jpg";
import img6 from "../assets/img/frontpage/6.jpg";
import img7 from "../assets/img/frontpage/7.jpg";
import img8 from "../assets/img/frontpage/8.jpg";
import img9 from "../assets/img/frontpage/9.jpg";
import img10 from "../assets/img/frontpage/10.jpg";
import img11 from "../assets/img/frontpage/11.jpg";
import img12 from "../assets/img/frontpage/12.jpg";
import img13 from "../assets/img/frontpage/13.jpg";
import img14 from "../assets/img/frontpage/14.jpg";
import img15 from "../assets/img/frontpage/15.jpg";
import img16 from "../assets/img/frontpage/16.jpg";
import img17 from "../assets/img/frontpage/17.jpg";
import img18 from "../assets/img/frontpage/18.jpg";
import img19 from "../assets/img/frontpage/19.jpg";
import img20 from "../assets/img/frontpage/20.jpg";
import img21 from "../assets/img/frontpage/21.jpg";
import img22 from "../assets/img/frontpage/22.jpg";
import img23 from "../assets/img/frontpage/23.jpg";
import img24 from "../assets/img/frontpage/24.jpg";
import img25 from "../assets/img/frontpage/25.jpg";
import img26 from "../assets/img/frontpage/26.jpg";
import img27 from "../assets/img/frontpage/27.jpg";
import img28 from "../assets/img/frontpage/28.jpg";
import img29 from "../assets/img/frontpage/29.jpg";
import img30 from "../assets/img/frontpage/30.jpg";
import img31 from "../assets/img/frontpage/31.jpg";
import 'animate.css';
import { useNavigate } from "react-router-dom";
import "./MissionStatusBanner.css";

export const MissionStatusBanner = () => {
  const navigate = useNavigate();
  const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31]

  useEffect(() => {
    const interval = setInterval(() => {  
      let image = img[Math.floor(Math.random()*img.length)]
    document.getElementById("mission").style.backgroundImage = `linear-gradient(135deg, rgba(0, 0, 0, 1) 7%, rgba(0, 0, 0, 0.35) 50%), 
    linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.005)), url(${image})`
    }, 20000)
    return () => clearInterval(interval)
  });

  return (
    <section className="missionStatusBanner" id="mission">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className="animate__animated animate__fadeIn">
                  <label><h3>IKTAN Roving</h3></label>
                  <label><h1>Mission Status</h1></label>
                  <label><h2>NASA HERC Team</h2></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
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
      </Container>
    </section>
  )
}
