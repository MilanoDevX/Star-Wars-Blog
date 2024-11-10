import React, { useState, useEffect, useContext } from "react";
import CardPlanets from "../component/cardPlanets";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        actions.getPlanets()
    }, [])

    return (
        <div className="text-center mt-3">
            <h1 id="databank2" className="text-light py-5" >Star Wars Databank</h1>

            <div className="container-fluid d-flex mb-2" >
                <h2 className="text-light"><i className="fa-solid fa-earth-asia" /> Planets</h2>
            </div>
            <div id="scroll" className="d-flex justify-content-center flex-wrap w-100 gap-5 mb-5">
                {
                    store.planets.length == 0 ? (
                        <h2 className="text-light">Loading...</h2>
                    ) : (
                        store.planets.map((item, index) => (
                            <CardPlanets key={index} name={item.name} uid={item.uid}></CardPlanets>
                        ))
                    )
                }
            </div>
        </div>

    )
}