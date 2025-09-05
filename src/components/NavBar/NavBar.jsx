import React from 'react';
import './NavBar.css';
import logoSvg from '../../assets/logo.svg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoSvg} alt="Logo" className="logo-image" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
