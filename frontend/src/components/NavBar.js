import { Nav } from "react-bootstrap";
import { NavLink, } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";
import styles from "../styles/NavBar.module.css"

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
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
      <Nav.Item>
        <NavLink to="/" className={styles.Icon}>
          BasePage <i className={`${styles.Icon} fa-solid fa-campground`}></i>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/" className={styles.Icon} onClick={handleSignOut}>
          Signout <i className={`${styles.Icon} fa-solid fa-ghost`}></i>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/" className={styles.Icon} onClick={handleSignOut}>
          Categories <i className={`${styles.Icon} fa-solid fa-list`}></i>
        </NavLink>
      </Nav.Item>
      <Nav.Item className={styles.Icon}>
        {currentUser?.username}'s TaskManager
      </Nav.Item>
    </Nav>
    </>
  );
};

export default NavBar;
