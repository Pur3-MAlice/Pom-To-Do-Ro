import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import HabitsTracker from "./HabitsTracker";
import CreateHabit from "./CreateHabit";
import appStyles from "../../../src/App.module.css";
import styles from "../../styles/HabitList.module.css";
import AddButton from "./AddButton.js";


const HabitManager = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AddButton onClick={handleShow} className={styles.Button} />
      <div className={`${appStyles.Title}`}>
        <h3>My Habits:</h3>
      </div>
      <Row className={`justify-content-md-center`}>
        <Col>
          <HabitsTracker />
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateHabit />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HabitManager;
