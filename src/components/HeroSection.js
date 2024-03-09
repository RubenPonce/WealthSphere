import React from "react";
import { Container, Row, Button, InputGroup, Form } from "react-bootstrap";

export const HeroSection = () => {
  return (
    <div
      className="hero-section bg-primary text-white text-center py-5"
      style={{ maxWidth: "133rem" }}
    >
      <Container>
        <Row>
          <div className="flex d-flex justify-content-end align-items-end">
            <div>
              <h1 className="display-1">WealthSphere</h1>
              <p className="lead">Your All-in-One Personal Finance Solution</p>
              <Button variant="success" size="lg">
                Create Your Account
              </Button>
            </div>
            <div id="sign-up-form" className="ms-2 ms-md-5">
              <InputGroup className="m-1 m-md-3 sm">
                <InputGroup.Text id="basic-addon1">👤</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />{" "}
              </InputGroup>
              <InputGroup className="m-1 m-md-3 sm">
                <InputGroup.Text id="basic-addon1">🔒</InputGroup.Text>
                <Form.Control
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <div className="m-1 m-md-3 sm">
              <Form.Check
                type="checkbox"
                label="Remember Me"
                id="remember-me"
                className="w-50"
              />
              </div>
              <Button
                className="w-100"
                style={{ backgroundColor: "transparent", color: "white" }}
              >
                Sign In
              </Button>
            </div>
          </div>
        </Row>{" "}
      </Container>
    </div>
  );
};
