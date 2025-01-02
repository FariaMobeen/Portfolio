import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";
import { FaAws } from "react-icons/fa"; // Import FaAws for AWS

import "../../styling/Techstack.css"; // Import the updated CSS

function Techstack() {
  const techStack = {
    Languages: [
      { icon: <CgCPlusPlus />, name: "C++" },
      { icon: <DiJavascript1 />, name: "JavaScript" },
      { icon: <DiPython />, name: "Python" },
      { icon: <DiJava />, name: "Java" },
      { icon: <SiTypescript />, name: "TypeScript" },

    ],
    Frameworks: [
      { icon: <DiReact />, name: "React" },
      { icon: <DiNodejs />, name: "Node.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
    ],
    Databases: [
      { icon: <DiMongodb />, name: "MongoDB" },
      { icon: <SiRedis />, name: "Redis" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
    ],
    "DevOps & Cloud": [
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiTerraform />, name: "Terraform" },
    ],

  };

  return (
    <div>
      {Object.entries(techStack).map(([category, tools]) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h4 style={{ textAlign: "center" }}>{category}</h4>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {tools.map((tech, index) => (
              <Col xs={4} md={2} className="tech-icons" key={index}>
                <div className="tech-card">
                  <div className="icon">{tech.icon}</div>
                  <div className="tech-name">{tech.name}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Techstack;