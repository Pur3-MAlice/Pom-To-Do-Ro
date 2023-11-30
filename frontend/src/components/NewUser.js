import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "../styles/SignInUpForm.module.css";
import appStyles from "../App.module.css";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const NewUser = () => {
    const [showSignInForm, setShowSignInForm] = useState(true);

    const handleButtonClick = () => {
        // Toggle between SignInForm and SignUpForm
        setShowSignInForm(!showSignInForm); 
    }
    
  return (
    <>
      <Row className={`justify-content-md-center ${styles.Row}`}>
        <Col className="my-auto p-md-2" md={6}>
          <div className={styles.Title}>
            <h1>Pom-To-Do-Ro</h1>
            <h4 className={styles.Title}>
              SignUp to access all the amazing features of Pom-To-Do-Ro!
            </h4>
          </div>
        </Col>
      </Row>
      <Row className={`justify-content-md-center ${styles.Row}`}>
        <Col className="my-auto p-md-2" md={6}>
        {showSignInForm ? <SignInForm /> : <SignUpForm />}
        
          
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to={<SignUpForm />}>
            Don't have an account? <span>Sign up</span>
          </Link>
          <Link className={styles.Link} to={<SignInForm/>}>
            Already have an account? <span>Sign in</span>
          </Link>
          <div>
            <button onClick={handleButtonClick}>Toggle Component</button>
            
            </div>
        </Container>
        </Col>
      </Row>


    </>
  );
};

export default NewUser;
