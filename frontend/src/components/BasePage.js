import styles from '../styles/BasePage.module.css';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import TaskManager from './TaskManager';
import PomodoroTimer from './PomodoroTimer';
import HabitsTracker from './HabitsTracker';

const BasePage = () => {
  return (
    <>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} style={{ height: '415px', border: '1px solid black', padding: '0' }}>
          <PomodoroTimer />
        </Col>
        <Col sm={12} md={8} style={{ height: '635px', border: '1px solid black', padding: '0' }}>
          <TaskManager />
        </Col>
      </Row>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} className={styles.HabitBox}>
          <HabitsTracker />
        </Col>
        <Col sm={12} md={8}  className={styles.NavBox}>
          <NavBar />
        </Col>
      </Row>
    </>
  );
};

export default BasePage;