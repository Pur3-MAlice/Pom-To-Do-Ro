import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom/";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";


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
    <Nav
      justify
      defaultActiveKey="/"
      style={{
        padding: "30px 0 0 0",
      }}
    >
      <Nav.Item>
        <NavLink to="/">
          BasePage <i className="fa-solid fa-campground"></i>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/profile">
         Profile<i className="fa-solid fa-user-astronaut"></i>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/" onClick={handleSignOut}>
          Signout <i className="fa-solid fa-ghost"></i>
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
