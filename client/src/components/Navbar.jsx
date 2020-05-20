import React, { useContext } from 'react';
import logo from '../imgs/420eventlogo.png';
import { AppContext } from '../context/AppContext';
import './navbar.css';

const Navbar = () => {
  const { city } = useContext(AppContext);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-main">
      <a class="navbar-brand">
        <img src={logo} alt="EventedLogo" style={{ width: '150px' }} />
      </a>

      <div class="navbar navbar-light bg-dark" id="city-center">
        <span class="navbar-text">
          <h3 style={{ textAlign: 'center' }} class="navbar-hidden">
            Welcome to <span id="city">{city}</span>
          </h3>
        </span>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
