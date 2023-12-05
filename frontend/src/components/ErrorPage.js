import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "../App.module.css";

const ErrorPage = () => {

  return (
    <Row className={`justify-content-md-center ${styles.Row}`}>
      <Col className="my-auto p-md-2" md={12}>
        <div className={styles.Title}>
          <h1>Pom-To-Do-Ro</h1>
          <h4 className={styles.Title}>
            Sorry we can't find the page you were looking for!
          </h4>
        </div>
      </Col>
    </Row>
  );
};

export default ErrorPage;
