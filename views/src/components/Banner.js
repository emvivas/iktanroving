import React, {useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/img/frontpage/1-min.jpg";
import img2 from "../assets/img/frontpage/2-min.jpg";
import img3 from "../assets/img/frontpage/3-min.jpg";
import img4 from "../assets/img/frontpage/4-min.jpg";
import img5 from "../assets/img/frontpage/5-min.jpg";
import img6 from "../assets/img/frontpage/6-min.jpg";
import img7 from "../assets/img/frontpage/7-min.jpg";
import img8 from "../assets/img/frontpage/8-min.jpg";
import img9 from "../assets/img/frontpage/9-min.jpg";
import img10 from "../assets/img/frontpage/10-min.jpg";
import img11 from "../assets/img/frontpage/11-min.jpg";
import img12 from "../assets/img/frontpage/12-min.jpg";
import img13 from "../assets/img/frontpage/13-min.jpg";
import img14 from "../assets/img/frontpage/14-min.jpg";
import img15 from "../assets/img/frontpage/15-min.jpg";
import img16 from "../assets/img/frontpage/16-min.jpg";
import img17 from "../assets/img/frontpage/17-min.jpg";
import img18 from "../assets/img/frontpage/18-min.jpg";
import img19 from "../assets/img/frontpage/19-min.jpg";
import img20 from "../assets/img/frontpage/20-min.jpg";
import img21 from "../assets/img/frontpage/21-min.jpg";
import img22 from "../assets/img/frontpage/22-min.jpg";
import img23 from "../assets/img/frontpage/23-min.jpg";
import img24 from "../assets/img/frontpage/24-min.jpg";
import img25 from "../assets/img/frontpage/25-min.jpg";
import img26 from "../assets/img/frontpage/26-min.jpg";
import img27 from "../assets/img/frontpage/27-min.jpg";
import img28 from "../assets/img/frontpage/28-min.jpg";
import img29 from "../assets/img/frontpage/29-min.jpg";
import img30 from "../assets/img/frontpage/30-min.jpg";
import img31 from "../assets/img/frontpage/31-min.jpg";
import tecLogo from "../assets/img/tec-logo.png";
import herc from "../assets/img/nasa-herc.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { useNavigate } from "react-router-dom";
import "./Banner.css";

export const Banner = () => {
  const navigate = useNavigate();
  const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31]

  useEffect(() => {
    const interval = setInterval(() => {  
      let image = img[Math.floor(Math.random()*img.length)]
    document.getElementById("banner").style.backgroundImage = `linear-gradient(135deg, rgba(0, 0, 0, 1) 7%, rgba(0, 0, 0, 0.35) 50%), 
    linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.005)), url(${image})`
    }, 20000)
    return () => clearInterval(interval)
  });

  return (
    <section className="banner" id="banner">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className="animate__animated animate__fadeIn">
                  <label><h3>Welcome to</h3></label>
                  <label><h1>IKTAN Roving</h1></label>
                  <label><h2>NASA HERC Team</h2></label>
                  <label><p>We are the team of Mexican students that promotes the participation of young people in high impact engineering projects. We have competed for 10 years in the NASA Human Exploration Rover Challenge competition, we hold the first place prize in the 2022 edition.</p></label>
                  <a href="https://tec.mx/es/ingenieria-y-ciencias" target="_blank" rel="noopener noreferrer"><img id="tecLogo" src={tecLogo} alt="Tecnológico de Monterrey. Escuela de Ingeniería y Ciencias."/></a>
                  <a href="https://www.nasa.gov/stem/roverchallenge/home/index.html" target="_blank" rel="noopener noreferrer"><img id="herc" src={herc} alt="NASA Human Exploration Rover Challenge."/></a>
                  <button onClick={() => navigate("/missionStatus")}>Examine the Mission Status Panel<ArrowRightCircle size={25} /></button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
