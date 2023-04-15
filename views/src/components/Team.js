import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import team1 from "../assets/img/team/team-1-min.jpg";
import team2 from "../assets/img/team/team-2-min.jpg";
import team3 from "../assets/img/team/team-3-min.jpg";
import women from "../assets/img/team/women-min.jpg";
import children from "../assets/img/team/children-min.jpg";
import fellowship from "../assets/img/team/fellowship-min.jpg";
import crew from "../assets/img/team/crew-min.jpg";
import achievements1 from "../assets/img/achievements/achievements-1-min.jpg";
import achievements2 from "../assets/img/achievements/achievements-2-min.jpg";
import achievements3 from "../assets/img/achievements/achievements-3-min.jpg";
import achievements4 from "../assets/img/achievements/achievements-4-min.jpg";
import achievements5 from "../assets/img/achievements/achievements-5-min.jpg";
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
              <label>Check out these sections:</label>
              <span><a href="/#mission" onClick={()=>navigate("/#mission")}>Mission</a></span>
              <span><a href="/#vision" onClick={()=>navigate("/#vision")}>Vision</a></span>
              <span><a href="/#objective" onClick={()=>navigate("/#objective")}>Objective</a></span>
              <span><a href="/#achievements" onClick={()=>navigate("/#achievements")}>Achievements</a></span>
            </div>
          </Col>
        </Row>
        <hr/>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <label><h3>ABOUT US</h3></label>
                  <label><p>We are the college team from the Tecnológico de Monterrey campus Cuernavaca.
We have participated for nearly 10 years in the NASA Human Exploration Challenge competition, learning and improving after each year of competition and forming a team that prioritizes integration and participation of every member.
We are committed, as every year, to create a project based on dedication and perseverance that demonstrates and meets the requirements to complete the challenge.
</p></label>
<label><p>This competition is about more than winning or being the best, it's about progressing, advancing, and learning about what we love, about what drives us, and about being better engineers every day. Our team is made up of Mexican college students with different abilities, talents and passions that help the IKTAN team show its potential in every competition.</p></label>
<label><p>Every moment involved in the development of the vehicle has been worth it to achieve what we have so far. This would not be the same without the participation of the students from each area of ​​the team, as well as the IKTAN mentors, official sponsors of the team, and without forgetting the support of our engineering and science school at Tecnológico de Monterrey.</p></label>
                  <div className="secondaryImage">
                  <figure>
                <img className="imageSection" src={team1} alt="Header Img"/>
                    <figcaption>
                        <label><p>The team is made up of 47 people, including students and professors from the Tecnológico de Monterrey. All of them committed to giving the best of themselves in the NASA HERC competition through skills and knowledge about the different areas that make up the project.</p></label>
                    </figcaption>
                </figure>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className="mainImage">
                <figure>
                <img className="imageSection" src={logo} alt="IKTAN Roving's logo."/>
                    <figcaption>
                        <label><p>IKTAN Roving means resourceful in Mayan. The team started in 2013 with a total of 6 pioneer students and we are currently a fully consolidated team, with the experience and ability to stay at the top of this competition.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={team2} alt="Header Img"/>
                    <figcaption>
                        <label><p>It is worth noting the participation of our mentors, key people to guide and tutor the potential of each student member of the team.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={team3} alt="Header Img"/>
                    <figcaption>
                        <label><p>The role played by our team advisor, engineer David García, during each participation in NASA HERC competitions is a fact worth recognizing and admiring.</p></label>
                    </figcaption>
                </figure>
            </div>
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <label><h3 id="mission">MISSION</h3></label>
                  <label><p>Facilitate knowledge to students of the team in STEM areas while we participate in a high-impact engineering competition delivering a solution under principles of safety and excellence.
</p></label>
<label><p>One of the most important reasons why team members are within IKTAN Roving is to learn and develop with engineering and science. The team is made up of university students, mostly engineering majors, who intend to change the future through education. The STEM areas start from within the team, where the most experienced members transmit knowledge to the newly integrated. This has happened generation after generation and we hope this does not stop.</p></label>
                  <label><h3 id="vision">VISION</h3></label>
                  <label><p>Become a reference in engineering to inspire young people to continue their studies as well as promote inclusion through teamwork and respect for integrity.</p></label>
                  <label><p>IKTAN Roving's vision is that its members demonstrate their potential and passion for technology and innovation and become the leaders that will transform space engineering, driving them to achieve their goals and inspiring others to do so.
Likewise, the vision of the team is to have a great social impact by promoting technological and engineering education in our community so that more young people discover their potential and create solutions that benefit science and humanity.
</p></label>

                  <label><h3 id="objective">OBJECTIVE</h3></label>
                  <label><p>The objective is based on creating a project that demonstrates our skills and knowledge in engineering, but beyond that, our objective is to inspire more young people to these areas of study to push projects that promote human development in science.
Moreover, to contribute to technological education and to more young people know their steps and areas of opportunity.
</p></label>
<div className="secondaryImage">
                  <figure>
                  <img className="imageSection" src={fellowship} alt="Header Img"/>
                    <figcaption>
                        <label><p>Proactivity is an important aspect present in every team activity. Mutual support is what makes IKTAN Roving and its members great.</p></label>
                    </figcaption>
                </figure>
                </div>

          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="mainImage">
              <figure>
                <img className="imageSection" src={crew} alt="Header Img"/>
                
                    <figcaption>
                        <label><p>The unity of the team members is what makes it unique. It is not just about winning, but about enjoying the moment and learning from each situation to get ahead.</p></label>
                    </figcaption>
                    </figure>
                    <figure>
                    <img className="imageSection" src={women} alt="Header Img"/>
                
                    <figcaption>
                        <label><p>The role of women and girls in science is undeniable. IKTAN Roving promotes the development of engineering for all people. We know how necessary women are and their involvement in areas like these.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={children} alt="Header Img"/>
                    <figcaption>
                        <label><p>Generating children's interest in science, technology, engineering and mathematics is a role we always want to continue to fulfill. We are convinced of the role that STEM areas play in making our world a better place.</p></label>
                    </figcaption>
                </figure>
            </div> 
          </Col>
        </Row>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                  <label><h3 id="achievements">ACHIEVEMENTS</h3></label>
                  <label><p>In the last competition we’ve already achieved two awards, including the #1 place overall in the competition. But before that we’d like to mention our pasts generations and their accomplishment of being the oldest honor project in our campus; having as of now more than 10 generations of Rovers and competitor teams in NASA.</p></label>
                  <ul>
                    <li><label>Overall Winner (1st place, 2022).</label></li>
                    <li><label>Ingenuity Award (2022).</label></li>
                    <li><label>Overall Winner (2nd place, 2021).</label></li>
                    <li><label>STEM Engagement Award (2021).</label></li>
                    <li><label>AIAA Telemetry/Electronics Award (2014, 2016 and 2020).</label></li>
                    <li><label>“Jesco von Puttkamer International Team Award” (2016, 2017 and 2019).</label></li>
                    <li><label>“Frank Joe Sexton Memorial Pit Crew Award” (2017).</label></li>
                    <li><label>“Team Spirit Award” (2018).</label></li>
                  </ul>
                  <div className="secondaryImage">
                  <figure>
                  <img className="imageSection" src={achievements1} alt="Header Img"/>
                    <figcaption>
                        <label><p>Our history is marked by brilliant minds who have made their contribution to make this project a greater feat. This is proof of the dedication we put in day after day to show the world that we can achieve whatever we want through dedication and love for our work.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={achievements2} alt="Header Img"/>
                
                    <figcaption>
                        <label><p>The world's best boss is actually the best leader we could have wished for our team. We are very grateful for the honorable work that our mentor, engineer David García, has had.</p></label>
                    </figcaption>
                    </figure>
                </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className="mainImage">
                    <figure>
                    <img className="imageSection" src={achievements3} alt="Header Img"/>
                
                    <figcaption>
                        <label><p>We currently hold the first international place in the NASA HERC 2022 competition. We were also recognized with the Ingenuity Award 2022.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={achievements4} alt="Header Img"/>
                    <figcaption>
                        <label><p>Each trophy in this showcase is a sample of the capacity and the relentless desire to give the best in each competition.</p></label>
                    </figcaption>
                </figure>
                <figure>
                <img className="imageSection" src={achievements5} alt="Header Img"/>
                    <figcaption>
                        <label><p>Undoubtedly, the best recognition is that each member knows the skills with which they graduate from each edition of the competition.</p></label>
                    </figcaption>
                </figure>
            </div> 
          </Col>
        </Row>
      </Container>
    </section>
  )
}
