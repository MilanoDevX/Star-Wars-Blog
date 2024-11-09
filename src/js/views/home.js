import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import CardCharacters from "../component/cardCharacters";
import CardPlanets from "../component/cardPlanets";
import CardVehicles from "../component/cardVehicles";
import CardStarships from "../component/cardStarships";
import { Context } from "../store/appContext"
import { Hero } from "../component/hero";
import { Link, useLocation, ScrollRestoration } from 'react-router-dom';

export const Home = () => {

	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const elemento = document.querySelector(hash);
			if (elemento) {
				elemento.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [hash]);


	return (
		<div className="text-center mt-3">
			<Hero></Hero>

			<h1 id="databank" className="text-light pt-5 pb-0" >Star Wars Databank</h1>

			<div className="container d-flex justify-content-center mb-1 gap-5" >
				<Link to={{pathname:"/films"}} style={{ textDecoration: "none" }}>
					<h4 className="text-light">Films</h4>
				</Link>

				<Link to={{pathname:"/characters"}} style={{ textDecoration: "none" }}>
					<h4 className="text-light">Characters</h4>
				</Link>

				<Link to={{pathname:"/planets"}} style={{ textDecoration: "none" }}>
					<h4 className="text-light">Planets</h4>
				</Link>

				<Link to={{pathname:"/starships"}} style={{ textDecoration: "none" }}>
					<h4 className="text-light">Starships</h4>
				</Link>

				<Link to={{pathname:"/vehicles"}} style={{ textDecoration: "none" }}>
					<h4 className="text-light">Vehicles</h4>
				</Link>
			</div>

			<div className="d-flex justify-content-center">
				<img src="https://raw.githubusercontent.com/4GeeksAcademy/EliasMilano-Star-Wars-Blog/refs/heads/master/src/img/Episode-3.jpg" 
					style={{width:"70%"}}
				/>
			</div>

		</div>
	)
};
