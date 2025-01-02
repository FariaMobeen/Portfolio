import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.JPG"; // Replace with your image path
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-section" id="home">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi! I'm <span className="purple">Faria Mobeen</span>, a Software Engineering student at the University of Calgary, graduating in April 2025.
              <br />
              <br />
              With over 2 years of industry experience, I’ve honed my skills and worked on several impactful projects.
              <br />
              <br />
              I am fluent in several programming languages, including:
              <i>
                <b className="purple"> C/C++, C#, Java, Python, SQL, JavaScript, TypeScript, HTML/CSS, and RISC-V Assembly.</b>
              </i>
              <br />
              <br />
              I’m passionate about building innovative <i><b className="purple">Web Technologies</b></i> and diving into areas like <b className="purple">Blockchain.</b>
              <br />
              <br />
              I have extensive experience working with frameworks like
              <i>
                <b className="purple"> .NET, React, Node.js, and Bootstrap.</b>
              </i>
              In addition, I work with cloud platforms such as AWS, Azure, and Google Cloud and tools like Docker, Kubernetes, and Terraform.
              <br />
              <br />
              I’ve been fortunate to work with leading companies like Symend, Bell Canada, and Bell Mobility, where I gained valuable exposure in cloud engineering, backend and frontend development, and software engineering practices.
              <br />
              <br />
              Some of my notable achievements include being <b>consecutively on the Dean’s List throughout my Engineering degree</b>, receiving a Hackathon Award, and being a Rhodes Scholarship nominee.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
  <Tilt>
    <img 
      src={myImg} 
      className="img-fluid rounded-circle" 
      alt="avatar" 
      style={{ width: '300px', height: '300px', objectFit: 'cover' }} 
    />
  </Tilt>
</Col>        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FariaMobeen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/faria-mobeen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;