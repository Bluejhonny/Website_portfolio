import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import coinbook from "../../Assets/Projects/coinbook.png";
import scrapjob from "../../Assets/Projects/scrapjob.png";
import classemote from "../../Assets/Projects/classemote.png";
import crimesdash from "../../Assets/Projects/crimesdash.png";
import netflixdash from "../../Assets/Projects/netflixdash.png";
import electricdash from "../../Assets/Projects/electricdash.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coinbook}
              isBlog={false}
              isGit={true}
              title="Coinbook"
              description="CoinBook is a web app that aims to help users manage their personal finances at all times, creating an account and being able to access it from any device by simply logging in with their credentials."
              ghLink="https://github.com/No-Country/c7-34-t-mern"
              // demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scrapjob}
              isBlog={false}
              isGit={true}
              title="ScrapJob"
              description="ScrapJob is a job portal where you can find jobs posted on various job platforms in LATAM. \n
              ScrapJob is a ScrapJob Scraper that uses mainly the Puppeteer library to automate job searches so you can find them in one place."
              ghLink="https://github.com/No-Country/s5-13-t-pern"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classemote}
              isBlog={false}
              isGit={true}
              title="Classemote"
              description="Classemote is your teaching and learning space, where you can live the experience of working together with your team in real time."
              ghLink="https://github.com/No-Country/S6-09-T-Angular"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={electricdash}
              isBlog={false}
              isGit={false}
              title="Battery Electric Vehicles (BEVs) and Plug-in Hybrid Electric Vehicles (PHEVs) Dashboard (PowerBi)"
              description="This Dashboard shows the Battery Electric Vehicles (BEVs) and Plug-in Hybrid Electric Vehicles (PHEVs) datasets, that are currently registered through Washington State Department of Licensing (DOL). From https://catalog.data.gov/dataset/electric-vehicle-population-data"
              demoLink="https://www.behance.net/gallery/186036079/PowerBi_Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixdash}
              isBlog={false}
              isGit={false}
              title="Netflix Movies and Tv Shows (PowerBi)"
              description="An example of netflix content data analysis."
              demoLink="https://www.behance.net/gallery/186036079/PowerBi_Projects" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crimesdash}
              isBlog={false}
              isGit={false}
              title="Crime Data from 2020 to Present (PowerBi)"
              description="This dashboard shows analysis reflects incidents of crime in the City of Los Angeles dating back to 2020. From: https://data.lacity.org/Public-Safety/Crime-Data-from-2020-to-Present/2nrs-mtv8"
              demoLink="https://www.behance.net/gallery/186036079/PowerBi_Projects?"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
