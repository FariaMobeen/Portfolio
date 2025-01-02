import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiGithub,
  SiDocker,
  SiGooglecloud,
  SiJenkins,
  SiEclipseide,
  SiSnowflake,
  SiWindows,
  SiLinux,
  SiAzuredevops,
  SiAzurepipelines,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { FaAws } from "react-icons/fa"; // Import FaAws for AWS

import "../../styling/Toolstack.css"; // Import the updated CSS

function Toolstack() {
  const tools = {
    "IDEs and Editors": [
      { icon: <SiVisualstudiocode />, name: "VS Code" },
      { icon: <SiEclipseide />, name: "Eclipse" },
    ],
    "Communication": [
      { icon: <SiSlack />, name: "Slack" },
      { icon: <SiPostman />, name: "Postman" },
    ],
    "Cloud Services": [
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiGooglecloud />, name: "Google Cloud" },
      { icon: <SiSnowflake />, name: "Snowflake" },
      { icon: <SiAzuredevops />, name: "Azure Devops" },
      { icon: <SiAzurepipelines />, name: "Azure Pipelines" },

    ],
    "Version Control": [
      { icon: <SiGithub />, name: "GitHub" },
      { icon: <DiGit />, name: "Git" },
    ],
    "Development Tools": [
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiJenkins />, name: "Jenkins" },
    ],
    "OS & Systems": [
      { icon: <SiMacos />, name: "macOS" },
      { icon: <SiWindows />, name: "Windows" },
      { icon: <SiLinux />, name: "Linux" },
    ],
  };

  return (
    <Card.Body>
      {Object.entries(tools).map(([category, toolList]) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h5
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "20px", // Add space between category name and icons
            }}
          >
            {category}
          </h5>
          <Row style={{ justifyContent: "center" }}>
            {toolList.map((tool, index) => (
              <Col xs={4} md={2} className="tech-icons" key={index}>
                <div className="tool-card">
                  <div className="icon">{tool.icon}</div>
                  <div className="tool-name">{tool.name}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Card.Body>
  );
}

export default Toolstack;