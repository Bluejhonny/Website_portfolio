import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";

function ProjectBook(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button variant="primary" href={props.demoLink} target="_blank">
          <FaAmazon /> &nbsp;
          {"Buy on amazon"}
        </Button>

        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>
  );
}
export default ProjectBook;
