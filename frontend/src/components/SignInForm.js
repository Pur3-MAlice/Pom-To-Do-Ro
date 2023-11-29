import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/SignInUpForm.module.css";
import appStyles from "../styles/Thingy.module.css";

import { Form, Button, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <>
      <Container className={`${appStyles.Content} p-4 `}>
        <h1 className={styles.Header}>sign up</h1>
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

          <Button type="submit">Sign up</Button>
        </Form>
      </Container>
      <Container className={`mt-3 ${appStyles.Content}`}>
        <Link className={styles.Link} to="/SignUp">
          Already have an account? <span>Sign in</span>
        </Link>
      </Container>
    </>
  );
};

export default SignUpForm;
