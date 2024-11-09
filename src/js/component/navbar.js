import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar bg-black m-0 px-5 py-2 fixed-top">
			<Link to={{pathname:"/", hash: "#hero"}} style={{ textDecoration: "none" }}>
				<div className="justify-content-center text-warning">
					<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png" style={{ maxWidth: "100px" }} />
				</div>
			</Link>
			<div className="ml-auto d-flex gap-2">
				<Link to={{pathname:"/", hash: "#databank"}}>
					<button type="button" className="btn btn-outline-light px-4">Databank</button>
				</Link>

				<div className="dropdown">
					<button type="button" className="btn btn-outline-warning px-4 dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-lg-end bg-warning">
						{
							store.favorites.map((item, index) => <li className="px-3" key={index}>
								<div className="d-flex justify-content-between align-items-center">
									<a className="droppdown-item text-black" href="#" style={{ textDecoration: "none" }}>{item.name}</a> 
									<i className="fa-solid fa-x"></i>
								</div>
							</li>)
						}
					</ul>
				</div>

			</div>
		</nav>
	);
};
