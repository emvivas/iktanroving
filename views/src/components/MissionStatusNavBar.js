import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/iktanLogo2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { useNavigate } from "react-router-dom";
import "./MissionStatusNavBar.css";

export const MissionStatusNavBar = () => {
  const navigate = useNavigate();

  const [activeLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const resetNavLinks = ()=>{
    const links = document.getElementsByClassName("navbar-link")
    for(let index = 0; index<links.length; ++index)
      links[index].classList.remove("active");
    navigate("/#banner")
  }

  return (
    <nav className="missionStatusNavBar" id="missionStatusNavBar">
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="/#banner" onClick={()=>resetNavLinks()}>
            <img id="logo" src={logo} alt="IKTAN Roving's logo." />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#rover" onClick={()=>navigate("/#rover")} className={activeLink === 'rover' ? 'active navbar-link' : 'navbar-link'}>IKTAN Roving</Nav.Link>
              <Nav.Link href="#team" onClick={() => navigate("/#team")} className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'}>Team</Nav.Link>
              <Nav.Link href="#gallery" onClick={() => navigate("/#gallery")} className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'}>Gallery</Nav.Link>
              <Nav.Link href="#sponsorship" onClick={() => navigate("/#sponsorship")} className={activeLink === 'sponsorship' ? 'active navbar-link' : 'navbar-link'}>Sponsors</Nav.Link>
              <Nav.Link href="https://www.nasa.gov/stem/roverchallenge/home/index.html" className='navbar-link' target="_blank" rel="noopener noreferrer">NASA HERC</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.tiktok.com/@iktan_roving" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/IKTANRoving" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/iktan_roving" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
              </div>
                <button onClick={()=>navigate("/missionStatus")} className="vvd"><span>TIME</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </nav>
  )
}
