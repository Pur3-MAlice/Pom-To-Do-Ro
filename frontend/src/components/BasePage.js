import styles from '../styles/BasePage.module.css';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';

const BasePage = () => {
  return (
    <>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={5} style={{ height: '415px', border: '1px solid black', padding: '0' }}>
          Content for Div 1
        </Col>
        <Col sm={12} md={7} style={{ height: '615px', border: '1px solid black', padding: '0' }}>
          Content for Div 2
        </Col>
      </Row>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={5} className={styles.HabitBox}>
          Content for Div 3
        </Col>
        <Col sm={12} md={7}  className={styles.NavBox}>
          <NavBar />
        </Col>
      </Row>
    </>
  );
};

export default BasePage;