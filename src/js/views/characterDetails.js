import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import Spinner from "../component/spinner";

export const CharacterDetails = () => {
    const { store, actions } = useContext(Context);
    const { characterId } = useParams();
    const [character, setCharacter] = useState(null);
    const navigate = useNavigate();

    // Loading character details
    const loadCharacterDetails = async () => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/people/${characterId}`);
            const data = await response.json();

            if (data && data.result) {
                // Loading birth planet
                const homeworldResponse = await fetch(data.result.properties.homeworld);
                const homeworldData = await homeworldResponse.json();
                setCharacter({
                    ...data.result,
                    properties: {
                        ...data.result.properties,
                        homeworldName: homeworldData.result.properties.name,
                    },
                });
            }
        } catch (error) {
            console.error("Error fetching character data:", error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        loadCharacterDetails();
    }, [characterId]);

    return (
        <div className="text-center bg-black mt-2">
            <h1 id="databank1" className="text-light pt-5 pb-3">Star Wars Databank</h1>

            <div className="d-flex justify-content-center my-0 w-50">
                <button
                    className="btn btn-outline-light mb-0" style={{ border: "none" }}
                    onClick={() => navigate(-1)} // back to the previous page
                >
                    <i className="fa-solid fa-arrow-left fa-2xl"></i>
                </button>
            </div>

            {character ? (
                <div className="container-fluid d-flex flex-column align-items-center mb-0">
                    <div className="card container my-2 bg-black" style={{ width: "600px" }}>
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-7 px-0">
                                <img
                                    src={store.characterImages[characterId] || `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`}
                                    className="card-img-top"
                                    alt={character.properties.name}
                                    style={{ width: "100%" }}
                                />

                            </div>
                            <div className="col-md-5">
                                <div className="card-body mb-5">
                                    <div className="py-2">
                                        <h3 className="card-title text-light">{character.properties.name}</h3>
                                    </div>
                                    <p className="text-light">Gender: {character.properties.gender}</p>
                                    <p className="text-light">Birth year: {character.properties.birth_year}</p>
                                    <p className="text-light">Homeworld: {character.properties.homeworldName}</p>
                                    <p className="text-light">Height: {character.properties.height}</p>
                                    <p className="text-light">Hair color: {character.properties.hair_color}</p>
                                    <p className="text-light">Skin color: {character.properties.skin_color}</p>
                                    <p className="text-light">Eye color: {character.properties.eye_color}</p>
                                    <div className="d-flex justify-content-between">
                                        <div className="container d-flex justify-content-between mt-4 mb-0">
                                            <div></div>
                                            <button
                                                type="button"
                                                className="btn btn-outline-warning"
                                                onClick={() =>
                                                    actions.addToFavorites({
                                                        name: character.properties.name,
                                                    })
                                                }
                                            >
                                                <i
                                                    className={
                                                        store.favorites.find(
                                                            (i) => i.name === character.properties.name
                                                        )
                                                            ? "fa-solid fa-heart"
                                                            : "fa-regular fa-heart"
                                                    }
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Spinner />
            )}
        </div>
    );
};