import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import CardCharacters from "../component/cardCharacters";
import CardPlanets from "../component/cardPlanets";
import CardVehicles from "../component/cardVehicles";
import { Context } from "../store/appContext"
import { Hero } from "../component/hero";
import { useLocation } from 'react-router-dom';

export const Home = () => {

	const { store, actions } = useContext(Context);

	const charactersDetails = [];

	useEffect(() => {
		actions.getCharacters()
		actions.getPlanets()
		actions.getVehicles()
	}, [])


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

			<h1 id="databank" className="text-light pt-5" >Star Wars Databank</h1>

			<div className="container-fluid d-flex mb-2" >
				<h2 className="text-light"><i className="fa-solid fa-jedi" /> Characters</h2>
			</div>
			<div id="scroll" className="container-fluid overflow-scroll mb-5">
				<div className="row flex-row flex-nowrap mx-0 mb-2 gap-3">
					{
						store.characters.map((item, index) => {
							return (
								<CardCharacters key={index} name={item.name} uid={item.uid}></CardCharacters>
							)
						})
					}
				</div>
			</div>

			<div className="container-fluid d-flex mb-2" >
				<h2 className="text-light"><i className="fa-solid fa-earth-asia" /> Planets</h2>
			</div>
			<div id="scroll" className="container-fluid overflow-scroll mb-5">
				<div className="row flex-row flex-nowrap mx-0 mb-2 gap-3">
					{
						store.planets.map((item, index) => {
							return (
								<CardPlanets key={index} name={item.name} uid={item.uid}></CardPlanets>
							)
						})
					}
				</div>
			</div>

			<div className="container-fluid d-flex mb-2" >
				<h2 className="text-light"><i className="fa-solid fa-jet-fighter-up" /> Vehicles</h2>
			</div>
			<div id="scroll" className="container-fluid overflow-scroll mb-5">
				<div className="row d-flex flex-row flex-nowrap mx-0 mb-2 gap-3">
					{
						store.vehicles.map((item, index) => {
							return (
								<CardVehicles key={index} name={item.name} uid={item.uid}></CardVehicles>
							)
						})
					}
				</div>
			</div>

		</div>
	)
};
