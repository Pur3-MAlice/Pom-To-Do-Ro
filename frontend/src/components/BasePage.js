import styles from '../styles/BasePage.module.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import SignInForm from './SignInForm';

const BasePage = () => {
  return (
    <>
      <Row noGutters className={styles.BasePage}>
        <Col sm={12} md={5} style={{ height: '415px', border: '1px solid black', padding: '0' }}>
          Content for Div 1
          <Container>
            <Switch>
              <Route exact path="/signin" render={() => <SignInForm/>} />
              <Route exact path="/signout" render={() => <p>Signout</p>} />
              <Route exact path="/profile" render={() => <p>Profile</p>} />  
              <Route exact path="/register" render={() => <p>Register</p>} />
            </Switch>
          </Container>
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
          <Container>
            <Switch>
              <Route exact path="/" render={() => <p>Home</p>} />
              <Route render={() => <p>Where you going bud? This page has not been found!</p>} />
              </Switch>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default BasePage;