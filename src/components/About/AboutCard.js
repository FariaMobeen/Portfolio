import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Faria Mobeen</span>, 
            a <span className="purple">Software Engineering student</span> with a passion for coding and physical fitness.
            <br />
            When I'm not immersed in programming languages or mastering full-stack development, you'll find me hitting the gym or exploring the great outdoors.
            <br />
            With industry experience already under my belt, I'm driven to excel in both my academic and personal pursuits, blending my love for technology with a healthy lifestyle and a deep appreciation for nature.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hitting the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Nature
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Blending technology with a healthy and balanced lifestyle!"{" "}
          </p>
          <footer className="blockquote-footer">Faria Mobeen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;