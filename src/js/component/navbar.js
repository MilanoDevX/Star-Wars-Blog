import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-black mb-3 mx-0 px-5">
			<Link to="/" style={{textDecoration: "none"}}>
				<div className="justify-content-center text-warning">
					<div className="m-0 p-0 h4" style={{fontFamily: "Star Wars"}}>Star</div>
					<div className="m-0 p-0 h4" style={{fontFamily: "Star Wars"}}>Wars</div>
				</div>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
