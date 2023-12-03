import "./api/axiosDefaults";
import { Route, Switch } from "react-router-dom";
import { createContext } from "react";

import styles from "./App.module.css";

import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import BasePage from "./components/BasePage";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const currentUser = useCurrentUser();

  return (
    <div className={styles.App}>
      <Switch>
        <Route exact path="/" render={() => (currentUser ? <BasePage /> : <SignInForm />)} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/profiles/:id" render={() => (currentUser ? <Profile /> : <ErrorPage />)} />
        <Route render={() => <ErrorPage />} />
      </Switch>
    </div>
  );
}

export default App;
