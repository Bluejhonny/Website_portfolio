import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectBook from "./ProjectBooks";
import Particle from "../Particle";

import miranda_eng from "../../Assets/Projects/miranda_eng.jpg";
import miranda_es from "../../Assets/Projects/miranda_es.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        I have a 
        <strong className="purple"> Book </strong>!
        </h1>
        <p style={{ color: "white" }}>
          And it tells the story of a little cat that has super powers.
        </p>
        <p style={{ color: "white" }}>
          You can find it and take a look at the following links in English or in Spanish.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectBook
              imgPath={miranda_eng}
              title="Miranda: The Superhero Cat"
              description="In a world where superpowers intertwine with nimble paws and friendly purrs, there is Miranda, a cat with extraordinary abilities. But her strength lies not only in her powers, but in the family and friends who surround her."
              demoLink="https://www.amazon.com/dp/B0C6446QJH?ref_=pe_3052080_397514860"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectBook
              imgPath={miranda_es}
              title="MIRANDA La Gata Superheroína"
              description="En un mundo donde los superpoderes se entrelazan con las patitas ágiles y los ronroneos amistosos, se encuentra Miranda, una gata con habilidades extraordinarias. Pero su fuerza no radica únicamente en sus poderes, sino en la familia y los amigos que la rodean."
              demoLink="https://www.amazon.com/dp/B0C6W7MYVJ?ref_=pe_3052080_397514860"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
