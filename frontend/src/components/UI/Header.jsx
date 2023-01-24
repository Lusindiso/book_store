import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import classes from "./Header.module.css";
import avatar from "../../assets/user.png";

const Header = () => (
  <header className={classes.header}>
    <div className={classes.container}>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">BOOKS</NavLink>
          </li>
          <li>
            <NavLink style={{ color: "rgba(5, 20, 20, 0.5)" }} to="/categories">
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <NavLink to="/login">
        <FaSignInAlt /> Login
      </NavLink>
      <NavLink to="/register">
        <FaUser /> Register
      </NavLink>
    </div>
  </header>
);

export default Header;
