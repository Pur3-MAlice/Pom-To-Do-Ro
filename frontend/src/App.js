import './api/axiosDefaults';
import { Route, Switch } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

import styles from './App.module.css';

import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import BasePage from './components/BasePage';

function App() {
  const isAuthenticated = true;
  return (
    <div className={styles.App}>
        <Switch>
          <Route exact path="/" render={() => 
            isAuthenticated ? <BasePage /> : <SignUpForm />
            } />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() =>
            <Row className={`justify-content-md-center ${styles.Row}`}>
              <Col className="my-auto p-md-2" md={12}>
                <div className={styles.Title}>
                  <h1>Pom-To-Do-Ro</h1>
                  <h4 className={styles.Title}>
                    Sorry we can't find the page you were looking for!
                  </h4>
                </div>
              </Col>
            </Row>
          } />
        </Switch>

    </div>
  );
}

export default App;