import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Jhonny </span>
            from <span className="purple"> Caracas.</span>
            and sometimes <span className="purple"> Bogota.</span>
            <br />
            I am currently employed as a Data Analyst.
            <br />
            but in my spare time I focus on data science and web development. 
            <br />
            I'm Geophysical Enginner from USB (Venezuela).
            <br />
            Apart from IT world, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Write books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Netflix
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleep with my cats
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jhonny</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
