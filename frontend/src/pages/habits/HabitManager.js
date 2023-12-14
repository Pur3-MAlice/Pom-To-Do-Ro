import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import HabitsTracker from "./HabitsTracker";
import CreateHabit from "./CreateHabit";
import appStyles from "../../../src/App.module.css";
import styles from "../../styles/HabitList.module.css";
import AddButton from "./AddButton.js";

const HabitManager = ({onHabitCreated}) => {
  const [show, setShow] = useState(false);
  const [habits, setHabits] = useState({ results: [] });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleHabitCreated = (newHabit) => {
    console.log("handleHabitCreated called with HABITMANAGER:", newHabit);
    
    setHabits((prevHabits) => ({
      ...prevHabits,
      results: [...prevHabits.results, newHabit],
    }));

    if (onHabitCreated) {
      onHabitCreated(newHabit);
      console.log("onHabitCreated called");
    }
  };


  return (
    <>
      <AddButton onClick={handleShow} className={styles.Button} />
      <div className={`${appStyles.Title}`}>
        <h3>My Habits:</h3>
      </div>
      <Row className={`justify-content-md-center`}>
        <Col>
          <HabitsTracker habits={habits} onHabitCreated={handleHabitCreated} />
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateHabit onHabitCreated={handleHabitCreated} onClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HabitManager;