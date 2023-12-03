import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../App.module.css";
import { Link, useHistory } from "react-router-dom";

const ErrorPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };
  
  return (
    <Row className={`justify-content-md-center ${styles.Row}`}>
      <Col className="my-auto p-md-2" md={12}>
        <div className={styles.Title}>
          <h1>Pom-To-Do-Ro</h1>
          <h4 className={styles.Title}>
            Sorry we can't find the page you were looking for!
          </h4>
          <Container className={`mt-3 ${styles.Content}`}>
            <Link to="#" onClick={goBack} className={styles.Link}>
              Go back?
            </Link>
          </Container>
        </div>
      </Col>
    </Row>
  );
};

export default ErrorPage;
