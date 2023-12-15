import "./api/axiosDefaults";
import { Route, Switch } from "react-router-dom";
import { createContext } from "react";

import styles from "./App.module.css";

import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import BasePage from "./components/BasePage";
import ErrorPage from "./components/ErrorPage";
import TaskEditForm from "./pages/tasks/TaskEditForm"
import { useCurrentUser } from "./contexts/CurrentUserContext";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const currentUser = useCurrentUser();
  // const profile_id = currentUser?.profile_id || "";


  return (
    <div className={styles.App}>
      <Switch>
        <Route exact path="/" render={() => (currentUser ? <BasePage /> : <SignInForm />)} />
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
        <Route render={() => <ErrorPage />} />
      </Switch>
    </div>
  );
}

export default App;
