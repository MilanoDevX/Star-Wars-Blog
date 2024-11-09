import React, { useState, useEffect, useContext } from "react";
import CardStarships from "../component/cardStarships";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Starships = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    useEffect(() => {
        actions.getStarships()
    }, [])

    return (
        <div className="text-center mt-3">
            <h1 id="databank3" className="text-light py-5" >Star Wars Databank</h1>

            <div className="container-fluid d-flex mb-2" >
                <h2 className="text-light"><i class="fa-brands fa-space-awesome"/> Starships</h2>
            </div>
            <div id="scroll" className="d-flex justify-content-center flex-wrap w-100 gap-5 mb-5">
                    {
                        store.starships.map((item, index) => {
                            return (
                                <CardStarships key={index} name={item.name} uid={item.uid}></CardStarships>
                            )
                        })
                    }
            </div>
        </div>

    )
}