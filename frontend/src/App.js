import styles from './App.module.css';
import BasePage from './components/BasePage';
import './api/axiosDefaults';
// import SignUpForm from './components/SignUpForm';
// import SignInForm from './components/SignInForm';
import NewUser from './components/NewUser'

function App() {
  const isAuthenticated = false;
  return (
    <div className={styles.App}>
        {isAuthenticated ? <BasePage /> : <NewUser />}
    </div>
  );
}

export default App;