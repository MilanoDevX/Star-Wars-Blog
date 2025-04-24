import React, { useState, useEffect, useContext } from "react";
import CardFilms from "../component/cardFilms";
import { Link } from "react-router-dom";
import Spinner from "../component/spinner";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Films = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        actions.getFilms();
    }, []);

    return (
        <div className="text-center mt-3">
            <h1 id="databank1" className="text-light py-5">Star Wars Databank</h1>

            <div className="container-fluid d-flex mb-2">
                <h2 className="text-light"><i className="fa-solid fa-jedi" /> Films</h2>
            </div>
            
            <div id="scroll" className="d-flex justify-content-center flex-wrap gap-5 mb-5 mx-auto" style={{ width: "60%" }}>
                {
                    store.films.length == 0 ? (
                        <Spinner />
                    ) : (
                        store.films.map((item, index) => (
                            <CardFilms key={index} name={item.properties.title} uid={item.uid}></CardFilms>
                        ))
                    )
                }
            </div>
        </div>
    );
};