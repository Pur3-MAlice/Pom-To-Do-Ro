import { Nav, Modal} from "react-bootstrap";
import { NavLink, } from "react-router-dom";
import { useState } from "react";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";
import styles from "../styles/NavBar.module.css"
import CreateCategory from "../pages/categories/CreateCategory";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const [showCatModal, setShowCatModal] = useState(false);

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCategoriesClick = () => {
    setShowCatModal(true);
  };

  const handleCloseModal = () => {
    setShowCatModal(false);
  };

  return (
    <>
      <Nav
        justify
        defaultActiveKey="/"
        style={{
          padding: "25px 0 0 0",
        }}
      >
        <Nav.Item className={styles.Icon}>
          <NavLink to="/">
            BasePage <i className="fa-solid fa-campground"></i>
          </NavLink>
        </Nav.Item>
        <Nav.Item className={styles.Icon}>
          <NavLink to="/" onClick={handleSignOut}>
            Signout <i className="fa-solid fa-ghost"></i>
          </NavLink>
        </Nav.Item>
        <Nav.Item className={styles.Icon}>
          <NavLink to="/" onClick={handleCategoriesClick}>
            Categories <i className="fa-solid fa-list"></i>
          </NavLink>
        </Nav.Item>
        <Nav.Item className={styles.Name}>
          {currentUser?.username}'s TaskManager
        </Nav.Item>
      </Nav>

      <Modal show={showCatModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateCategory onClose={handleCloseModal}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavBar;
