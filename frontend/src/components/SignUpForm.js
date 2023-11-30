import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/SignInUpForm.module.css";
import appStyles from "../App.module.css";

import { Form, Button, Container, Row, Col } from "react-bootstrap";

const SignInForm = () => {
  return (
    <>
    <Row className={`justify-content-md-center ${styles.Row}`}>
    <Col className="my-auto p-md-2" md={6}>
      <div className={styles.Title}>
        <h1>Pom-To-Do-Ro</h1>
         <h4 className={styles.Title}>SignUp to access all the amazing features of Pom-To-Do-Ro!</h4>
      </div>
      </Col>
    </Row>

    <Row className={`justify-content-md-center ${styles.Row}`}>
      <Col className="my-auto p-md-2" md={6}>
      <Container className={`${styles.FormContent} p-4 `}>
        <h1 className={styles.Header}>sign up here</h1>
        <Form>
          <Form.Group controlId="username">
            <Form.Label className="d-none">username</Form.Label>
            <Form.Control type="text" placeholder="Username" name="username" />
          </Form.Group>

          <Form.Group controlId="password1">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password1"
            />
          </Form.Group>

          <Form.Group controlId="password2">
            <Form.Label className="d-none">Confirm password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>
          <Button className={`${styles.Button} ${styles.Wide} ${styles.Bright}`}>Sign up</Button>
        </Form>
      </Container>
      <Container className={`mt-3 ${appStyles.Content}`}>
        <Link className={styles.Link} to="/signin">
          Already have an account? <span>Sign in</span>
        </Link>
      </Container>
      </Col>
      </Row>
    </>
  );
};

export default SignInForm;
