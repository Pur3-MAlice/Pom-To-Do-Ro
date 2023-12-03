import React, { useState } from 'react'
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import CreateTask from './CreateTask';

import styles from '../styles/TaskManager.module.css';
import appStyles from "../App.module.css"

const TaskManager = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={`${appStyles.Title} ${styles.Title}`}>
        <h3>My Tasks:</h3>
      </div>

      <Button
        className={`${styles.Button} ${styles.Blue} ${styles.ButtonTask}`}
        variant="primary" onClick={handleShow}>
        Add Task
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateTask />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TaskManager;