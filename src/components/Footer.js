import github from "../assets/github.png";
import email from "../assets/email.svg";

import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          <h4 className="d-flex align-items-center justify-content-center">
            Contact
          </h4>
          <Stack direction="horizontal" gap={3}>
            <a href="mailto:dylangodfrey962@gmail.com">
              <img src={email} width="60px" alt="dylangodfrey962@gmail.com" />
            </a>
            <a
              href="https://github.com/DylanGodfrey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} width="60px" alt="Github.com/DylanGodfrey" />
            </a>
          </Stack>
          © {new Date().getFullYear()} Dylan Godfrey
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
