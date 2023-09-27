import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import color from "../../Assets/Projects/color.png";

import stripe from "../../Assets/Projects/stripe.png";
import blood_donation from "../../Assets/Projects/blood_donation.png";

import food from "../../Assets/Projects/food.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blood_donation}
              isBlog={false}
              title="Blood Donation App"
              description="cutting-edge MERN stack app with React frontend, Redux for state management, Bootstrap for CSS, Node.js
              with Express for backend, and MongoDB for efficient database management. Implemented JSON Web Token for
              secure authentication, along with various other essential libraries.
              "
              ghLink="https://github.com/rishabh2924/Blood-Bank-source-code"
              demoLink="https://blood-bank-app-e440.onrender.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Delivery App"
              description="a client-side food delivery app using React for the front-end, Node.js and Express.js for the back-end, and
              MongoDB for the database. App has functionalities like login, signup, cart, my orders, and filter, and I used JWT tokens for secure authentication"
              ghLink="https://github.com/rishabh2924/Food-delivery-app/tree/main/"
              demoLink="https://youtu.be/-93dH3pY_go"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stripe}
              isBlog={false}
              title="Stripe Clone"
              description="This project marks my initial foray into web development, where I utilized HTML, vanilla CSS, and JavaScript. It
              involved creating a frontend clone of a website with a responsive design. Notably, I implemented a collapsible
              navbar using CSS properties."
              ghLink="https://github.com/rishabh2924/webdevlopment-projects/tree/main/"
              demoLink="https://rishabhprojects-com.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color}
              isBlog={false}
              title="Color Generator"
              description="Developed a functionality to generate various shades of a specific color. To accomplish this, I
              incorporated the library value.js, which aids in generating colors and their corresponding hash values.
              "
              ghLink="https://github.com/rishabh2924/react_projects/tree/main/08-color-generator"
              demoLink="https://fluffy-valkyrie-82e93a.netlify.app/"
            />
          </Col>

          
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
