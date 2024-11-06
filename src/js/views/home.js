import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import CardCharacters from "../component/cardCharacters";
import CardPlanets from "../component/cardPlanets";
import CardVehicles from "../component/cardVehicles";

export const Home = () => {
	const [people, setPeople] = useState([]);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => setPeople(data.results))
			.catch(err => console.error(err))
	}, [])

	const [planets, setPlanets] = useState([]);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => setPlanets(data.results))
			.catch(err => console.error(err))
	}, [])

	const [vehicles, setVehicles] = useState([]);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles")
			.then(res => res.json())
			.then(data => setVehicles(data.results))
			.catch(err => console.error(err))
	}, [])

	return (
		<div className="text-center mt-3">
			<h1 className="text-warning">Star Wars</h1>

			<div className="container-fluid d-flex mb-2" >
					<h2 className="text-secondary">Characters  <i class="fa-solid fa-jedi"/></h2>
			</div>
			<div id="scroll" className="container-fluid overflow-scroll mb-5">
				<div className="row flex-row flex-nowrap mx-0 mb-2 gap-3">
					{
						people.map((item, index) => {
							return (
								<CardCharacters key={index} name={item.name} uid={item.uid}></CardCharacters>
							)
						})
					}
				</div>
			</div>

			<div className="container-fluid d-flex mb-2" >
					<h2 className="text-secondary">Planets  <i class="fa-solid fa-earth-asia"/></h2>
			</div>
			<div id="scroll" className="container-fluid overflow-scroll mb-5">
				<div className="row flex-row flex-nowrap mx-0 mb-2 gap-3">
					{
						planets.map((item, index) => {
							return (
								<CardPlanets key={index} name={item.name} uid={item.uid}></CardPlanets>
							)
						})
					}
				</div>
			</div>

			<div className="container-fluid d-flex mb-2" >
					<h2 className="text-secondary">Vehicles  <i class="fa-solid fa-jet-fighter-up"/></h2>
			</div>
			<div id="scroll" className="container-fluid overflow-scroll mb-5">
				<div className="row d-flex flex-row flex-nowrap mx-0 mb-2 gap-3">
					{
						vehicles.map((item, index) => {
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
