import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__left">
          <NavLink to="/">
            <img
              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              alt="logo-cyberlearn"
            />
          </NavLink>
        </div>
        <div className="header__right">
          <FontAwesomeIcon icon={faCartShopping} className="header__icon" />
          <NavLink>Login</NavLink>
          <NavLink to="register">Register</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
