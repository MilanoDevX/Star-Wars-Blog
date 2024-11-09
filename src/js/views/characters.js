import React, { useState, useEffect, useContext } from "react";
import CardCharacters from "../component/cardCharacters";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Characters = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters()
    }, [])

    return (
        <div className="text-center mt-3">
            <h1 id="databank1" className="text-light py-5" >Star Wars Databank</h1>

            <div className="container-fluid d-flex mb-2" >
                <h2 className="text-light"><i className="fa-solid fa-jedi" /> Characters</h2>
            </div>
            <div id="scroll" className="d-flex justify-content-center flex-wrap w-100 gap-5 mb-5">
                    {
                        store.characters.map((item, index) => {
                            return (
                                <CardCharacters key={index} name={item.name} uid={item.uid}></CardCharacters>
                            )
                        })
                    }
            </div>
        </div>

    )
}