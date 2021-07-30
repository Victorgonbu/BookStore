import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  navbar, logo, navLinks, leftmost, navLink, userIcon, active,
} from '../style/app.module.css';

const Navbar = () => (
  <nav className={navbar}>
    <div className={leftmost}>
      <p className={logo}>
        Bookstore CMS
      </p>
      <div className={navLinks}>
        <NavLink className={navLink} activeClassName={active} exact to="/"> Books </NavLink>
        <NavLink className={navLink} activeClassName={active} to="/categories">Categories</NavLink>
      </div>
    </div>

    <FontAwesomeIcon id={userIcon} icon="user" />

  </nav>
);

export default Navbar;
