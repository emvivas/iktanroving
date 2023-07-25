import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import iktanRover1 from "../assets/img/rover/iktan-rover-1-min.jpg";
import iktanRover2 from "../assets/img/rover/iktan-rover-2-min.jpg";
import rover1 from "../assets/img/rover/rover-1-min.jpg";
import rover2 from "../assets/img/rover/rover-2-min.jpg";
import rover3 from "../assets/img/rover/rover-3-min.jpg";
import design1 from "../assets/img/design/design-1-min.jpg";
import design2 from "../assets/img/design/design-2-min.jpg";
import design3 from "../assets/img/design/design-3-min.jpg";
import manufacturing1 from "../assets/img/manufacturing/manufacturing-1-min.jpg";
import manufacturing2 from "../assets/img/manufacturing/manufacturing-2-min.jpg";
import manufacturing3 from "../assets/img/manufacturing/manufacturing-3-min.jpg";
import tools1 from "../assets/img/tools/tools-1-min.jpg";
import tools2 from "../assets/img/tools/tools-2-min.jpg";
import tools3 from "../assets/img/tools/tools-3-min.jpg";
import telemetry1 from "../assets/img/telemetry/telemetry-1-min.jpg";
import telemetry2 from "../assets/img/telemetry/telemetry-2-min.jpg";
import telemetry3 from "../assets/img/telemetry/telemetry-3-min.jpg";
import stem1 from "../assets/img/stem/stem-1-min.jpg";
import stem2 from "../assets/img/stem/stem-2-min.jpg";
import stem3 from "../assets/img/stem/stem-3-min.jpg";
import networks1 from "../assets/img/networks/networks-1-min.jpg";
import networks2 from "../assets/img/networks/networks-2-min.jpg";
import networks3 from "../assets/img/networks/networks-3-min.jpg";
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
        <label><h2>Meet the IKTAN's Rover</h2></label>
        </div>    
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="topics">
              <label>Explore our different team workspaces:</label>
              <span><a href="/#design" onClick={()=>navigate("/#design")}>Design</a></span>
              <span><a href="/#manufacturing" onClick={()=>navigate("/#manufacturing")}>Manufacturing</a></span>
              <span><a href="/#tools" onClick={()=>navigate("/#tools")}>Tools</a></span>
              <span><a href="/#telemetry" onClick={()=>navigate("/#telemetry")}>Telemetry</a></span>
              <span><a href="/#stem" onClick={()=>navigate("/#stem")}>STEM</a></span>
              <span><a href="/#networks" onClick={()=>navigate("/#networks")}>Networks</a></span>
            </div>
          </Col>
        </Row>
        <hr/>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <label><h3>THE HUMAN SPACE EXPLORATION VEHICLE</h3></label>
                  <label><p>Meet our Rover, which is a representation of months of work and great teamwork. It has been a long process, and various obstacles arose, but we, the members of the IKTAN Roving team, based on perseverance, dedication, and passion for learning, were able to achieve our goals.</p></label>
                  <label><p>Taking the previous vehicle designs from previous editions as a starting point, functionalities have been improved and this has resulted in a better space exploration vehicle that takes the best features of its previous versions, refines them and implements new ideas.</p></label>
                  <label><p>Through the time and dedication of each generation of team students, a vehicle with better functions and features has been innovated and shaped. Innovating and adapting to adversity are key concepts that accurately describe the work carried out by IKTAN Roving for the 2023 edition of the NASA Human Exploration Rover Challenge.</p></label>
                  <label><p>In each of our areas, students who are truly passionate about what they do and what can be done to fulfill the purpose of the team come together and collaborate. Faced with the adversities of each project challenge, we seek to find a solution through the proactivity of all members. Below you can take a look at the areas of IKTAN Roving that, taken together, delivered what was expected.</p></label>
                  <div className="secondaryImage">
                  <figure>
                <img className="imageSection" src={iktanRover1} alt="Header Img"/>
                    <figcaption>
                        <label><p>The IKTAN's Rover is a sign of tenacity and perseverance to achieve what at first seemed unattainable. Our Rover is ready to give its best during the NASA HERC 2023 competition.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={iktanRover2} alt="Header Img"/>
                    <figcaption>
                        <label><p>The pilots and substitute pilots of the team have been preparing since the beginning of this edition of the competition to perform during the physical condition tests that this entails.</p></label>
                    </figcaption>
                </figure>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className="mainImage">
                <figure>
                <img className="imageSection" src={rover1} alt="Header Img"/>
                    <figcaption>
                        <label><p>The testing phase of the vehicle was arduous and consisted of a rough evaluation of all the components that make up this space exploration vehicle with the aim of finding critical points and finding a solution to them.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={rover2} alt="Header Img"/>
                    <figcaption>
                        <label><p>All the physical components of the Rover have been designed in CAD software to carry out virtual tests on materials and models.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={rover3} alt="Header Img"/>
                    <figcaption>
                        <label><p>The IKTAN's Rover of this 2023 edition is, without a doubt, the most complex vehicle that the team has achieved based on the learning acquired in previous participations in NASA competition editions.</p></label>
                    </figcaption>
                </figure>
            </div>
          </Col>
        </Row>
          <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3 id="design">DESIGN</h3></label>
                  <label><p>The Design Area focuses on taking into account the challenges and requirements of each competition challenge with the aim of ensuring that the vehicle is capable of carrying them out without any problem through the engineering that the Rover entails.</p></label>
                  <label><p>The use of CAD software is essential to carry out the modeling of the physical components to be manufactured, as well as to carry out tests of all kinds, simulations and predictions before using laboratory machinery.</p></label>
                  <div className="secondaryImage">
                  <figure>
                <img className="imageSection" src={design1} alt="Header Img"/>
                    <figcaption>
                        <label><p>SolidWorks is the CAD software used by the team to perform the virtual modeling and testing of each physical component that will be implemented on the vehicle.</p></label>
                    </figcaption>
                </figure>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className="mainImage">
                <figure>
                <img className="imageSection" src={design2} alt="Header Img"/>
                    <figcaption>
                        <label><p>Every component included in the Rover has been validated against the NASA HERC 2023 Handbook. Our Rover meets all the specifications and characteristics expected of the ideal vehicle proposed by NASA.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={design3} alt="Header Img"/>
                    <figcaption>
                        <label><p>After hard design and manufacturing work, the achievement is clear to see and we are proud of it.</p></label>
                    </figcaption>
                </figure>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3 id="manufacturing">MANUFACTURING</h3></label>
                  <label><p>The Manufacturing Area is in charge of the actual production and assembly of the vehicle components, once they have been validated by the Design area. Each piece to be incorporated is brought to reality with the stipulated measurements, as well as with the necessary tools and materials.</p></label>
                  <label><p>It is important to mention the role played by the laboratory machinery and the security measures applied during the entry to the facilities of this team area. At the beginning of operations, each member of this area is trained to know how to maneuver each tool, machine or material in the laboratory.</p></label>
                  <div className="secondaryImage">
                  <figure>
                <img className="imageSection" src={manufacturing3} alt="Header Img"/>
                    <figcaption>
                        <label><p>During the assembly of the vehicle in the university laboratories, various security protocols were used to protect the integrity of the students involved in these tasks.</p></label>
                    </figcaption>
                </figure>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className="mainImage">
                <figure>
                <img className="imageSection" src={manufacturing2} alt="Header Img"/>
                    <figcaption>
                        <label><p>Teamwork was essential to successfully overcome the adversities that arose. The union of all the members makes the team stronger and this is responsible for the result obtained.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={manufacturing1} alt="Header Img"/>
                    <figcaption>
                        <label><p>The involvement of women and men during the assembly and manufacture of each component of the vehicle was worthy of admiration.</p></label>
                    </figcaption>
                </figure>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3 id="tools">TOOLS</h3></label>
                  <label><p>The Tools Area are the students in charge of developing the necessary tools to successfully achieve each of the Tasks that the NASA HERC Handbook explains in detail.</p></label>
                  <label><p>Each of the tools developed by the team are put to the test as they are intended to be by the competition, so it is normal for different prototypes of the final product to be developed until the final version of the tools is created for the competition in Huntsville. The materials used for its preparation are diverse, ranging from PLA plastic to metals such as aluminum and steel. This 2023 edition is characterized from the others by the design of a single tool for the treatment of liquids. Here is the result obtained after multiple prototypes and teamwork.</p></label>
                  <div className="secondaryImage">
                  <figure>
                <img className="imageSection" src={tools1} alt="Header Img"/>
                    <figcaption>
                        <label><p>The liquid treatment tool developed in this edition meets all the tasks proposed by the NASA HERC 2023 Handbook. This is an engineering solution that came about after experimenting with multiple prototypes of similar tools.</p></label>
                    </figcaption>
                </figure>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className="mainImage">
                <figure>
                <img className="imageSection" src={tools2} alt="Header Img"/>
                    <figcaption>
                        <label><p>The electronics involved in the tool highlight the team's ability to develop technological solutions through the knowledge acquired at the university.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={tools3} alt="Header Img"/>
                    <figcaption>
                        <label><p>All the quality tests applied to this solution were carried out successfully. After multiple tests, our tool and sample holder are examples of the hard work that has gone into all this time.</p></label>
                    </figcaption>
                </figure>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3 id="telemetry">TELEMETRY</h3></label>
                  <label><p>The Telemetry Area is dedicated to the analysis, interpretation and prediction of data related to the vehicle and its crew. Through this area, the status of the pilots is carefully monitored through advanced technology including specialized software and hardware to remotely monitor and detect the Rover's maneuvering during competition.</p></label>
                  <label><p>In this way, innovative tools such as smart devices, the Internet of Things, data science and artificial intelligence are involved to guarantee the success of the mission during the performance of each Task of the competition.</p></label>
                  <label><p>On this website you can visit the <a href="/missionStatus">IKTAN Roving Mission Status Panel</a>, which brings together the data analysis carried out from all the measurements provided in real time during the Rover's operation.</p></label>
                  <div className="secondaryImage">
                  <figure>
                <img className="imageSection" src={telemetry1} alt="Header Img"/>
                    <figcaption>
                        <label><p>The telemetry applied to the Rover is essentially based on the Internet of Things and real-time monitoring through smart gadgets and specialized hardware, we decided to monitor our Rover through the new information technologies present today, such as the machine learning and data science.</p></label>
                    </figcaption>
                </figure>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className="mainImage">
                <figure>
                <img className="imageSection" src={telemetry2} alt="Header Img"/>
                    <figcaption>
                        <label><p>Carrying out engineering solutions that involve the use of hardware and software is a characteristic of the team that we want to keep in mind in each edition because it allows us to strengthen the security of the integrity of the pilots.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={telemetry3} alt="Header Img"/>
                    <figcaption>
                        <label><p>It is worth noting the development of simulations and augmented reality models of our Rover with the aim of showing everyone how science and technology are present in each section of our vehicle.</p></label>
                    </figcaption>
                </figure>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3 id="stem">STEM</h3></label>
                  <label><p>In the STEM Area there are students involved in general outreach, especially to children, of science, technology, engineering and mathematics. The dissemination carried out has been carried out in different Mexican schools of basic education, which includes primary, secondary and high school.</p></label>
                  <label><p>The main challenges in this area are important, to get more girls and women interested in engineering, as well as to reduce the school dropout that affects many students, both in Mexico and in the world. Every STEM dissemination opportunity found has been taken advantage of by the team and has reached many young minds, a fact that fills IKTAN Roving with pride.</p></label>
                  <div className="secondaryImage">
                  <figure>
                <img className="imageSection" src={stem1} alt="Header Img"/>
                    <figcaption>
                        <label><p>We are committed to the education and dissemination of knowledge in STEM areas, mainly to children. This with the aim of including more girls in the world of science and reducing school dropouts.</p></label>
                    </figcaption>
                </figure>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className="mainImage">
                <figure>
                <img className="imageSection" src={stem2} alt="Header Img"/>
                    <figcaption>
                        <label><p>During our participation in this edition of the competition, we gave different talks and educational activities in schools in the public and private sectors.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={stem3} alt="Header Img"/>
                    <figcaption>
                        <label><p>In August 2022, we had the honor of receiving Katya Echazarreta, the first Mexican female astronaut, at our university facilities. During her visit, she learned about our participation in this NASA competition.</p></label>
                    </figcaption>
                </figure>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3 id="networks">SOCIAL MEDIA AND SPONSORSHIPS</h3></label>
                  <label><p>Being known by more people is a goal that IKTAN Roving tries to continue achieving. By being known by more people, we can spread this noble project together with all the commented areas, as well as having the opportunity to have more sponsors that support the dream of an entire team.</p></label>
                  <label><p>That is why the team has the Social Media and Sponsorships Area who, through the creation of digital content, have allowed the team to be recognized both locally and nationally.</p></label>
                  <div className="secondaryImage">
                  <figure>
                <img className="imageSection" src={networks1} alt="Header Img"/>
                    <figcaption>
                        <label><p>The dissemination of our project through social media allows more people to offer us their support to represent Mexico in this competition. We thank all those people whom we have brought closer to engineering through our content.</p></label>
                    </figcaption>
                </figure>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className="mainImage">
                <figure>
                <img className="imageSection" src={networks2} alt="Header Img"/>
                    <figcaption>
                        <label><p>Along with our followers, we appreciate the role that our sponsors have played due to the support we have received from them to make our dreams come true.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={networks3} alt="Header Img"/>
                    <figcaption>
                        <label><p>The creation of educational content videos for children became an activity that was carried out every week in our participation in this edition of the competition.</p></label>
                    </figcaption>
                </figure>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
