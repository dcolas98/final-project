import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="bigDiv d-flex justify-content-center">
			<div className="LDiv col-3"></div>
			<div className="MDiv col-6"> 
			<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-center">
			<Link to="/">
				<h1 className="appTitle navbar-brand mb-0 h1">App Name</h1>
			</Link>
		</nav>
			</div>
			<div className="RDiv col-3"></div>
		</div>
	);
};
