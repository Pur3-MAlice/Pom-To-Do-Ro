import styles from './App.module.css';
import BasePage from './components/BasePage';
import './api/axiosDefaults';
import SignUpForm from './components/SignUpForm';

function App() {
  const isAuthenticated = false;
  return (
    <div className={styles.App}>
        {isAuthenticated ? <BasePage /> : <SignUpForm />}
    </div>
  );
}

export default App;