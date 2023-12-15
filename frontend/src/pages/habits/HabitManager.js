import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import HabitsTracker from "./HabitsTracker";
import CreateHabit from "./CreateHabit";
import appStyles from "../../../src/App.module.css";
import styles from "../../styles/HabitList.module.css";
import AddButton from "./AddButton.js";

const HabitManager = ({ onHabitCreated, message, filter = "", updateHabits, ...props }) => {
  const [show, setShow] = useState(false);
  const [habits, setHabits] = useState({ results: [] });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleHabitCreated = (newHabit) => {
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
      <div className={`${appStyles.Title}`}>
        <h3>My Habits:</h3>
        <AddButton onClick={handleShow} className={styles.Button} />
      </div>
      <Row className={`justify-content-md-center`}>
        <Col>
          <HabitsTracker
            habits={habits}
            onHabitCreated={handleHabitCreated}
            updateHabits={setHabits}
          />
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateHabit
            onHabitCreated={handleHabitCreated} onClose={handleClose} updateHabits={updateHabits}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HabitManager;