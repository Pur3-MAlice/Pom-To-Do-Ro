import './api/axiosDefaults';
import { Route, Switch } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "./api/axiosDefaults";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import styles from './App.module.css';

import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import BasePage from './components/BasePage';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory;

  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  useMemo(() => {
    axiosReq.interceptors.request.use(
      async (config) => {
        try {
          await axios.post("/dj-rest-auth/token/refresh/");
        } catch (err) {
          setCurrentUser((prevCurrentUser) => {
            if (prevCurrentUser) {
              history.push("/signin");
            }
            return null;
          });
          return config;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push("/signin");
              }
              return null;
            });
          }
          return axios(err.config);
        }
        return Promise.reject(err);
      }
    );
  }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (currentUser ? <BasePage /> : <SignInForm />)}
            />
            <Route exact path="/signin" render={() => <SignInForm />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route
              render={() => (
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
              )}
            />
          </Switch>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;