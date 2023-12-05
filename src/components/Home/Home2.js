import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/male-avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              Hi! I'm a technology enthusiast with interest in programming 
              and data analysis.
              <br />
              <br />My background includes 
              <i>
                <b className="purple"> Python, JavaScript, NodeJS, MongoDB, and React.  </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Data Analysis and Machine Learning.
                </b>
              </i>
              <br />
              <br />
              I also have experience in data analysis tools such as 
              <b className="purple" href="https://powerbi.microsoft.com/es-es/"> PowerBi</b> (DAX, PowerQuery, M-Language), 
              Excel, VBA, 
              <b className="purple" href="https://www.google.com/script/start/"> Google App Script</b>, 
              geospatial analysis, data visualization,
              <b className="purple" href="https://www.kaggle.com/code/jhonnycalvo/orinoco"> and satellite imagery</b>
              with Python.
              {/* <i>
                <b className="purple">
                  {" "}
                  Excel and Macros
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Bluejhonny"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://github.com/Bluejhonny"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jhonnycalvo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jhonnycalvo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
