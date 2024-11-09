import React, { useState, useEffect, useContext } from "react";
import CardVehicles from "../component/cardVehicles";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getVehicles()
    }, [])

    return (
        <div className="text-center mt-3">
            <h1 id="databank4" className="text-light py-5" >Star Wars Databank</h1>

            <div className="container-fluid d-flex mb-2" >
                <h2 className="text-light"><i className="fa-solid fa-jedi" /> Vehicles</h2>
            </div>
            <div id="scroll" className="d-flex justify-content-center flex-wrap w-100 gap-5 mb-5">
                    {
                        store.vehicles.map((item, index) => {
                            return (
                                <CardVehicles key={index} name={item.name} uid={item.uid}></CardVehicles>
                            )
                        })
                    }
            </div>
        </div>

    )
}