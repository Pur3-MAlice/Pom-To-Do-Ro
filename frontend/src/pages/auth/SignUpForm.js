import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";

import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";


const SignUpForm = () => {

  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/");
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
            <h1 className={styles.Header}>sign up here</h1>
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

              <Form.Group controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password1"
                  value={password1}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password1?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password2">
                <Form.Label className="d-none">Confirm password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password2?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Button
                className={`${styles.Button} ${styles.Wide} ${styles.Bright}`}
                type="submit"
              >
                Sign up
              </Button>

              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>
          <Container className={`mt-3 ${styles.Content}`}>
            <Link to= "/" className={styles.Link}>
              Already have an account? <span>Sign in</span>
            </Link>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default SignUpForm;
