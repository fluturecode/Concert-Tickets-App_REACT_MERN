import React from 'react';
import logo from '../imgs/Logo.png';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-main">
      <div className="navbar-brand">
        <img
          id="home-logo"
          src={logo}
          alt="EventedLogo"
          style={{ width: '250px' }}
        />
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <div className="nav-link">
              <a href="/" id="homeMenuLink">
                Home
              </a>{' '}
              <span className="sr-only">(current)</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
