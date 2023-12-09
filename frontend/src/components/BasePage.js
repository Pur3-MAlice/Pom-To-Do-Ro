import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import NavBar from "./NavBar";

import TaskManager from "../pages/tasks/TaskManager";
import CreateTask from "../pages/tasks/CreateTask";
import HabitManager from "../pages/habits/HabitManager";

import styles from "../styles/BasePage.module.css";
import Timer from "../pages/timer/Timer";

const BasePage = () => {
  const [createTask, setCreateTask] = useState(false);

  const handleTaskToggle = () => {
    setCreateTask(!createTask);
  };

  return (
    <>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} style={{ height: "60vh", padding: "0", border: '1px solid red'}}>
            <Timer />
        </Col>
        <Col sm={12} md={8} style={{ height: "90vh", padding: "0", border: '1px solid red' }}>
          <Button className={`${styles.Button} ${styles.Blue} ${styles.ButtonTask}`} variant="primary" onClick={handleTaskToggle}>
            Add Task
          </Button>
          {createTask ? <CreateTask /> : <TaskManager />}
        </Col>
      </Row>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} className={styles.HabitBox} style={{ height: "40vh", padding: "0", border: '1px solid red' }}>
          <HabitManager /> 
        </Col>
        <Col sm={12} md={8} className={styles.NavBox} style={{ height: "10vh", padding: "0", border: '1px solid red' }}>
          <NavBar />
        </Col>
      </Row>
    </>
  );
};

export default BasePage;
