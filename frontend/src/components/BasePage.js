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
    setCreateTask((prevCreateTask) => !prevCreateTask);
  };

  return (
    <>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} className={styles.TimerBox}>
            <Timer />
        </Col>
        <Col sm={12} md={8} className={styles.TaskBox}>
          <Button className={styles.TaskButton} variant="primary" onClick={handleTaskToggle}>
          <i className="fa-solid fa-plus"></i>
          </Button>
          {createTask ? <CreateTask onToggle={handleTaskToggle} /> : <TaskManager />}
        </Col>
      </Row>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} className={styles.HabitBox}>
          <HabitManager /> 
        </Col>
        <Col sm={12} md={8} className={styles.NavBox}>
          <NavBar />
        </Col>
      </Row>
    </>
  );
};

export default BasePage;
