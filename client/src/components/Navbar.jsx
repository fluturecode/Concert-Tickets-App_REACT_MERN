import React, { useContext } from 'react';
import logo from '../imgs/Logo.png';
import { AppContext } from '../context/AppContext';
import '../css/navbar.css';

const Navbar = () => {
	const { city } = useContext(AppContext);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-main">
			<div className="navbar-brand">
				<img id='home-logo' src={logo} alt="EventedLogo" style={{ width: '150px' }} />
			</div>

			<div className="navbar navbar-light bg-dark" id="city-center">
				<span className="navbar-text">
					<h3 style={{ textAlign: 'center' }} className="navbar-hidden">
						Welcome to <span id="city">{city}</span>
					</h3>
				</span>
			</div>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<div className="nav-link">
							<a href='/' id="homeMenuLink">Home</a> <span className="sr-only">(current)</span>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
