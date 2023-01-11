import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import img1 from "../assets/img/frontpage/1.jpg";
import img2 from "../assets/img/frontpage/2.jpg";
import img3 from "../assets/img/frontpage/3.jpg";
import img4 from "../assets/img/frontpage/4.jpg";
import img5 from "../assets/img/frontpage/5.jpg";
import img6 from "../assets/img/frontpage/6.jpg";
import img7 from "../assets/img/frontpage/7.jpg";
import img8 from "../assets/img/frontpage/8.jpg";
import img9 from "../assets/img/frontpage/9.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Project.css";


export const Projects = () => {

  const projects = [
    {
      title: "IKTAN Roving Team",
      description: "2021-2022",
      imgUrl: img1,
    },
    {
      title: "IKTAN Roving Team",
      description: "NASA Human Exploration Rover Challenge",
      imgUrl: img2,
    },
    {
      title: "Telemetry Award",
      description: "American Institute of Aeronautics and Astronautics",
      imgUrl: img3,
    },
    {
      title: "20th MoonBuggy Grate Race",
      description: "The first Rover was called Buggy",
      imgUrl: img4,
    },
    {
      title: "Launching People",
      description: "1st NASA Human Exploration Rover Challenge",
      imgUrl: img5,
    },
    {
      title: "The invincible ones",
      description: "Frank Joe Sexton Memorial Pit Crew Award",
      imgUrl: img6,
    },
    {
      title: "The invincible ones",
      description: "Frank Joe Sexton Memorial Pit Crew Award",
      imgUrl: img7,
    },
    {
      title: "The invincible ones",
      description: "Frank Joe Sexton Memorial Pit Crew Award",
      imgUrl: img8,
    },
    {
      title: "The invincible ones",
      description: "Frank Joe Sexton Memorial Pit Crew Award",
      imgUrl: img9,
    },
  ];

  return (
    <section className="project" id="gallery">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <label><h2>Gallery</h2></label>
                <label><p>Our progress over the years.</p></label>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"><label>Design</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"><label>Manufacture</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"><label>STEM</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth"><label>Telemetry</label></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth"><label>Tools</label></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
