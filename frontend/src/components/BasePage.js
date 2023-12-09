import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import NavBar from "./NavBar";

import TaskManager from "../pages/tasks/TaskManager";
import HabitsTracker from "../pages/habits/HabitsTracker";
import CreateTask from "../pages/tasks/CreateTask";

import styles from "../styles/BasePage.module.css";
import Timer from "../pages/timer/Timer";

const BasePage = () => {
  const [createTask, setCreateTask] = useState(false);

  const handleToggle = () => {
    setCreateTask(!createTask);
  };

  return (
    <>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} style={{ height: "65vh", padding: "0"}}>
            <Timer />
        </Col>
        <Col sm={12} md={8} style={{ height: "90vh", padding: "0"}}>
          <Button className={`${styles.Button} ${styles.Blue} ${styles.ButtonTask}`} variant="primary" onClick={handleToggle}>
            Add Task
          </Button>
          {createTask ? <CreateTask /> : <TaskManager />}
        </Col>
      </Row>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} className={styles.HabitBox} style={{ height: "35vh", padding: "0"}}>
          <HabitsTracker />
        </Col>
        <Col sm={12} md={8} className={styles.NavBox} style={{ height: "10vh", padding: "0"}}>
          <NavBar />
        </Col>
      </Row>
    </>
  );
};

export default BasePage;
