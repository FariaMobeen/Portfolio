import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordleImg from "../../assets/Projects/wordleImg.png";
import noteApp from "../../assets/Projects/noteApp.png";
import storyGenerator from "../../assets/Projects/storygenerator.png";
import flightApp from "../../assets/Projects/flightApp.png";
import vetScheduler from "../../assets/Projects/vetScheduler.png";
import eventBooking from "../../assets/Projects/eventBooking.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordleImg}
              isBlog={false}
              title="Wordle Clone"
              description="A web-based word-guessing game inspired by Wordle. Built with HTML, CSS, and JavaScript, it features hint displays, API-based random word generation, and interactive feedback mechanisms for an engaging user experience."
              ghLink="https://github.com/FariaMobeen/Wordle-game"
              demoLink="https://faria-wordle-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteApp}
              isBlog={false}
              title="Note App"
              description="A web app for creating, editing, and managing notes. Built with HTML, CSS, and JavaScript, it offers a user-friendly interface for improved productivity in personal and professional tasks."
              ghLink="https://github.com/FariaMobeen/NoteApp"
              demoLink="https://faria-noteapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storyGenerator}
              isBlog={false}
              title="Full Stack AI Story Generator"
              description="Leverages ChatGPT for generating creative and engaging stories through an interactive interface. Combines advanced NLP techniques and machine learning to deliver dynamic and personalized storytelling."
              ghLink="https://github.com/FariaMobeen/story-generator"
              demoLink="https://yuja.ucalgary.ca/V/Video?v=940906&node=5005151&a=186452552&autoplay=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flightApp}
              isBlog={false}
              title="Flight Reservation App"
              description="A Java Spring Boot backend and React.js frontend application integrated with RESTful APIs for flight search, booking, and real-time updates. Features secure user management and responsive design for a seamless user experience."
              ghLink="https://github.com/FariaMobeen/FlightReservation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vetScheduler}
              isBlog={false}
              title="Automated Vet Scheduler"
              description="Java Swing application for task scheduling with MySQL connectivity. Automates duration calculations, overbooking checks, and provides a streamlined interface for improved efficiency."
              ghLink="https://github.com/FariaMobeen/Automated-Vet-Scheduler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventBooking}
              isBlog={false}
              title="Event Booking App"
              description="An event management platform with Google Cloud SQL integration for database operations. Features include event organization, booking, and email notifications for efficient communication."
              ghLink="https://github.com/FariaMobeen/EventBlitz"
              demoLink="https://yuja.ucalgary.ca/V/Video?v=1029640&node=5474361&a=184032784"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;