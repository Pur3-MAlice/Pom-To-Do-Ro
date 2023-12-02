import React from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import CreateTask from './CreateTask';

import styles from '../styles/TaskManager.module.css';
import appStyles from "../App.module.css"

const TaskManager = () => {
  // const [errors, setErrors] = useState({});


  return (
    <>
    <div className={`${appStyles.Title} ${styles.Title}`}>
      <h3>My Tasks:</h3>
    </div>
    <Form>
        <Button className={`${styles.Button} ${styles.Blue} ${styles.ButtonTask}`} type="submit">
          Add Task
        </Button>
        <Button className={`${styles.Button} ${styles.Blue} ${styles.ButtonCategory}`} type="submit">
        Add Category 
        </Button>
      <Row className={`justify-content-md-center ${styles.Row}`}>
        <Col md={5} lg={7}>
          <Container className={appStyles.Content}>POOP</Container>
        </Col>
      </Row>
      <Row className={`justify-content-md-center ${styles.Row}`}>
        <Col md={5} lg={7}>
          <Container className={appStyles.Content}>POOP</Container>
        </Col>
      </Row>
      <Row className={`justify-content-md-center ${styles.Row}`}>
        <Col md={5} lg={7}>
          <CreateTask/>
        </Col>
      </Row>
    </Form>
    </>
  );
}

export default TaskManager