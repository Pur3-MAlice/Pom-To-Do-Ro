import React, { useState } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import NavBar from './NavBar';

import TaskManager from '../pages/tasks/TaskManager';
// import PomodoroTimer from '../pages/timer/PomodoroTimer';
import HabitsTracker from '../pages/habits/HabitsTracker';
import CreateTask from '../pages/tasks/CreateTask';

import styles from '../styles/BasePage.module.css';
import Timer from '../pages/timer/Timer';

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
          style={{ height: "415px", padding: "0" }}
        >
          <Container style={{ width: "200px" }}>
            <Timer />
          </Container>
        </Col>
        <Col
          sm={12}
          md={8}
          style={{ height: "635px", padding: "0" }}
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