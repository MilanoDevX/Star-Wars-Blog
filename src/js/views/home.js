import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card";

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

	return (
		<div className="text-center mt-3">
			<h1 className="text-warning">Star Wars</h1>
			<div id="scroll" className="container-fluid overflow-scroll mb-5">
				<div className="d-flex mb-2" >
					<h2 className="text-secondary">Characters</h2>
				</div>
				<div className="row flex-row flex-nowrap mx-0 mb-2 gap-3">
					{
						people.map((item, index) => {
							return (
								<Card key={index} name={item.name} uid={item.uid}></Card>
							)
						})
					}
				</div>
			</div>

			<div id="scroll" className="container-fluid overflow-scroll mb-5">
				<div className="d-flex mb-2" >
					<h2 className="text-secondary">Planets</h2>
				</div>
				<div className="row flex-row flex-nowrap mx-0 mb-2 gap-3">
					{
						planets.map((item, index) => {
							return (
								<Card key={index} name={item.name} uid={item.uid}></Card>
							)
						})
					}
				</div>
			</div>






		</div>
	)
};
