import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "../constants/data";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import resume from "../assets/DylanGodfrey.pdf";

const AboutMe = () => {
  /*branding:*/
  const primary = "#e08d3c";
  const secondary = "#f5ecc2";
  const tertiary = "#aec6cf";
  const accent = "#66a3d2";
  const accent2 = "#dcbba6";

  const colors = [primary, secondary, tertiary, accent, accent2];

  const style = {
    fontFamily: "'Bebas Neue', sans-serif",
    paddingTop: "40px",
    color: primary,
    fontSize: "60px",
    textShadow: "2px 2px #dcbba6",
    letterSpacing: ".08em",
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="order-xs-2">
          <h1
            className="d-flex align-items-center justify-content-center"
            style={style}
          >
            DYLAN GODFREY
          </h1>
          <div className="flex flex-row justify-center items-start overflow-hidden">
            <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20 lg:pt-15">
              <RoughNotationGroup show={true}>
                <h2>
                  <RainbowHighlight color={colors[2]}>
                    Full Stack Developer
                  </RainbowHighlight>{" "}
                  based in {userData.address}.
                </h2>
                <p>
                  Passionate about crafting innovative, scalable web solutions
                  that exceed user expectations and dedicated to delivering{" "}
                  <RainbowHighlight color={colors[1]}>
                    powerful
                  </RainbowHighlight>{" "}
                  and{" "}
                  <RainbowHighlight color={colors[0]}>
                    user-friendly
                  </RainbowHighlight>{" "}
                  digital experiences. Fosters a creative mindset, embraces
                  collaborative approaches, and demonstrates refined
                  communication skills.
                </p>
                <p>
                  Track record includes successful project management, effective
                  team leadership, and adept relationship building. Acknowledged
                  as an{" "}
                  <RainbowHighlight color={colors[3]}>
                    imaginative problem solver
                  </RainbowHighlight>{" "}
                  with meticulous attention to detail, holds a profound passion
                  for the convergence of{" "}
                  <RainbowHighlight color={colors[4]}>
                    design and functionality.
                  </RainbowHighlight>{" "}
                </p>
                <p>
                  Ready to leverage technical expertise and an unwavering
                  commitment to{" "}
                  <RainbowHighlight color={colors[2]}>
                    continuous learning,
                  </RainbowHighlight>{" "}
                  seeking to join a forward-thinking team dedicated to
                  delivering client-centric and industry-innovative
                  applications.
                </p>
              </RoughNotationGroup>
              <Row>
                <Col></Col>
                <Col className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                  <a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    type="application/pdf"
                  >
                    <Button variant="info" size="lg" style={{ color: "white" }}>
                      View Resume
                    </Button>
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://github.com/DylanGodfrey"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="dark" size="lg">
                      Visit Github
                    </Button>
                  </a>
                </Col>
                <Col></Col>
              </Row>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-row justify-center items-start overflow-hidden">
            <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20 lg:pt-15">
              <h3>Technical Skills:</h3>
              <p>
                <b>Programming Languages:</b> Javascript (Typescript) | Python |
                C | HTML/CSS
              </p>
              <p>
                <b>CSS Libraries:</b> Bootstrap | TailwindCSS | SASS |
                SemanticCSS | bulmaCSS
              </p>
              <p>
                <b>Databases:</b> GraphQL | MySQL | Sequelize | SQLAlchemy |
                MongoDB{" "}
              </p>
              <p>
                <b>Frameworks:</b> React | Flask
              </p>
              <p>
                <b>Testing Frameworks:</b> Jest | mocha
              </p>
              <p>
                <b>Runtimes:</b> Node.js (Express.js) | Deno
              </p>
              <p>
                <b>Applications & Industry Processes:</b> Agile | Github |
                Heroku | Insomnia | MongoDB Atlas
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="order-xs-1">
          <Image
            roundedCircle
            style={style}
            src="http://bulma.io/images/placeholders/1280x960.png"
            width="100%"
            alt=""
          />
        </Col>
      </Row>
      <div></div>
    </Container>
  );
};

export default AboutMe;
