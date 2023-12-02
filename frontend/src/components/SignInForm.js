import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/SignInUpForm.module.css";
import appStyles from "../App.module.css";

import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";

const SignInForm = () => {
  const [signInData, setsignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setsignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/login/", signInData);
      window.location.reload();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <>
      <Row className={`justify-content-md-center ${styles.Row}`}>
        <Col className="my-auto p-md-2" md={6}>
          <div className={styles.Title}>
            <h1>Pom-To-Do-Ro</h1>
            <h4 className={styles.Title}>
              SignUp to access all the amazing features of Pom-To-Do-Ro!
            </h4>
          </div>
        </Col>
      </Row>
      <Row className={`justify-content-md-center ${styles.Row}`}>
        <Col className="my-auto p-md-2" md={6}>
          <Container className={`${styles.FormContent} p-4 `}>
            <h1 className={styles.Header}>sign in here</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label className="d-none">username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Button
                className={`${styles.Button} ${styles.Wide} ${styles.Bright}`}
                type="submit"
              >
                Sign In
              </Button>

              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>
          <Container className={`mt-3 ${appStyles.Content}`}>
            <Link to="/signup" className={styles.Link}>
              Don't have an account yet? <span>Sign up</span>
            </Link>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default SignInForm;
