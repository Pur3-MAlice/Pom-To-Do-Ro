import './api/axiosDefaults';
import { Route, Switch } from "react-router-dom";

import styles from './App.module.css';

import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import NewUser from './components/NewUser'
import BasePage from './components/BasePage';

function App() {
  const isAuthenticated = false;
  return (
    <div className={styles.App}>
        <Switch>
          <Route exact path="/" render={() => 
            isAuthenticated ? <BasePage /> : <SignUpForm />
            } />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>

    </div>
  );
}

export default App;