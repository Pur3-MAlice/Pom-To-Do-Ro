import React from 'react';
import { Row, Col } from 'react-bootstrap';

import NavBar from '../../components/NavBar';

import styles from '../../styles/BasePage.module.css';
import ProfileEdit from './ProfileEdit';
import CreateCategory from '../categories/CreateCategory';
import Category from '../categories/Category';


const Profile = () => {
  return (
    <>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} style={{ height: "415px", border: "1px solid black", padding: "0" }}>
            <ProfileEdit />
            <CreateCategory/>
        </Col>
        <Col sm={12} md={8} style={{ height: "635px", border: "1px solid black", padding: "0" }}>
          <Category />
        </Col>
      </Row>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={4} className={styles.HabitBox}>
            Habit Scores!
        </Col>
        <Col sm={12} md={8} className={styles.NavBox}>
          <NavBar />
        </Col>
      </Row>
    </>
  );
};

export default Profile;