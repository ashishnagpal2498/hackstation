import React from 'react'

const Navbar = () => {
	return (
		<div className="header-wrapper">
			<div className="header-logo">
				<img src="" alt="logo-here"/>
				<span>HackStation</span>
			</div>
			<ul className="header-options">
				<li>Home</li>
				<li>Dashboard</li>
				<li>About</li>
				<li>Upcoming</li>
				<li>Login/SignUp</li>
			</ul>
		</div>
	)
}

export default Navbar;
