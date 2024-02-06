import React from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Ratio from "react-bootstrap/Ratio";

import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

/*branding:*/
const primary = "#d35400";
const secondary = "#f5ecc2";
const tertiary = "#aec6cf";
const accent = "#66a3d2";
const accent2 = "#dcbba6";

const colors = [primary, secondary, tertiary, accent, accent2];

const fontStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: "30px",
};

const iconStyle = {
  filter: "grayscale(100%)",
  marginRight: "0.25rem",
  height: "25px",
};

const buttonStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: "25px",
  padding: "10px 40px 10px 40px",
};

const Portfolio = ({ projects }) => {
  return (
    <RoughNotationGroup show={true}>
      <Container>
        <Stack gap={3}>
          {projects.map((project, index) => (
            <Container fluid key={index} className="my-5">
              <Row>
                <Col xs={12} md={6} lg={4}>
                  <Ratio aspectRatio="16x9">
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className="img-fluid"
                      style={{ maxHeight: "300px", width: "100%" }}
                    />
                  </Ratio>
                  {project.techs.map((tech, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center mr-3 mb-3"
                    >
                      <Col>
                        <img
                          key={index}
                          src={tech.fe_icon}
                          alt={tech.frontend}
                          className="mr-2"
                          style={iconStyle}
                        />
                        {tech.frontend}
                      </Col>
                      <Col>
                        <img
                          key={index}
                          src={tech.be_icon}
                          alt={tech.backend}
                          className="mr-2"
                          style={iconStyle}
                        />
                        {tech.backend}
                      </Col>
                      <Col>
                        <img
                          key={index}
                          src={tech.css_icon}
                          alt={tech.css}
                          className="mr-2"
                          style={iconStyle}
                        />
                        {tech.css}
                      </Col>
                    </div>
                  ))}
                </Col>
                <Col xs={12} md={6} lg={8}>
                  <Row>
                    <div className="d-flex align-items-center">
                      <Col>
                        <RainbowHighlight color={colors[index + 1]}>
                          <div style={fontStyle}>
                            <i>{project.name}</i>
                          </div>
                        </RainbowHighlight>
                      </Col>
                    </div>
                    <div>
                      <i>{project.subtitle}</i>
                    </div>
                  </Row>
                  <br></br>
                  <Row>
                    <Stack>
                      {project.desc.map((desc, index) => (
                        <p key={index}>{desc}</p>
                      ))}
                    </Stack>
                    <Row>
                      <Col className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="success" style={buttonStyle}>
                            live
                          </Button>
                        </a>
                      </Col>
                      <Col>
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="dark" style={buttonStyle}>
                            source
                          </Button>
                        </a>
                      </Col>
                    </Row>
                  </Row>
                </Col>
              </Row>
            </Container>
          ))}
        </Stack>
      </Container>
    </RoughNotationGroup>
  );
};

export default Portfolio;
