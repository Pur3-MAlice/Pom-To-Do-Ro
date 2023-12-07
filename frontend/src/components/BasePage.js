import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import NavBar from './NavBar';

import TaskManager from '../pages/tasks/TaskManager';
import PomodoroTimer from '../pages/timer/PomodoroTimer';
import HabitsTracker from '../pages/habits/HabitsTracker';
import CreateTask from '../pages/tasks/CreateTask';

import styles from '../styles/BasePage.module.css';

const BasePage = () => {

  const [createTask, setCreateTask] = useState(false);

  const handleToggle = () => {
    setCreateTask(!createTask);
  };

  return (
    <>
      <Row noGutters className={styles.BasePage}>
        <Col
          sm={12}
          md={4}
          style={{ height: "415px", border: "1px solid black", padding: "0" }}
        >
          <PomodoroTimer />
        </Col>
        <Col
          sm={12}
          md={8}
          style={{ height: "635px", border: "1px solid black", padding: "0" }}
        >
          <Button className={`${styles.Button} ${styles.Blue} ${styles.ButtonTask}`} variant="primary" onClick={handleToggle}>
            Add Task
          </Button>
          {createTask ? <CreateTask /> : <TaskManager />}
        </Col>
      </Row>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} className={styles.HabitBox}>
          <HabitsTracker />
        </Col>
        <Col sm={12} md={8} className={styles.NavBox}>
          <NavBar />
        </Col>
      </Row>
    </>
  );
};

export default BasePage;