import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const { planetId } = useParams();
    const [planet, setPlanet] = useState(null);
    const navigate = useNavigate(); 

    // Loading planet details
    const loadPlanetDetails = async () => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${planetId}`);
            const data = await response.json();

            if (data && data.result) {
                setPlanet({
                    ...data.result,
                    properties: {
                        ...data.result.properties,
                    },
                });
            }
        } catch (error) {
            console.error("Error fetching planet data:", error);
        }
    };

    const url = (planetId) == 1 ? ("https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png") : ("https://starwars-visualguide.com/assets/img/planets/" + planetId + ".jpg")


    useEffect(() => {
        window.scrollTo(0, 0);
        loadPlanetDetails();
    }, [planetId]); 

    return (
        <div className="text-center bg-black mt-2">
            <h1 id="databank1" className="text-light pt-5 pb-3">Star Wars Databank</h1>

            <div className="d-flex justify-content-center my-0 w-50">
                <button
                    className="btn btn-outline-light mb-0" style={{border:"none"}}
                    onClick={() => navigate(-1)} // back to the previous page
                >
                    <i className="fa-solid fa-arrow-left fa-2xl"></i>
                </button>
            </div>

            {planet ? (
                <div className="container-fluid d-flex flex-column align-items-center mb-0">
                    <div className="card container my-2 bg-black" style={{ width: "600px" }}>
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-7 px-0">
                                <img
                                    src={url}
                                    className="card-img-top"
                                    alt={planet.properties.name}
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <div className="col-md-5">
                                <div className="card-body mb-5">
                                    <div className="py-2">
                                        <h3 className="card-title text-light">{planet.properties.name}</h3>
                                    </div>
                                    <p className="text-light">Population: {planet.properties.population}</p>
                                    <p className="text-light">Diameter: {planet.properties.diameter}</p>
                                    <p className="text-light">Rotation period: {planet.properties.rotation_period}</p>
                                    <p className="text-light">Orbital period: {planet.properties.orbital_period}</p>
                                    <p className="text-light">Gravity: {planet.properties.gravity}</p>
                                    <p className="text-light">Climate: {planet.properties.climate}</p>
                                    <p className="text-light">Terrain: {planet.properties.terrain}</p>
                                    <p className="text-light">Surface water: {planet.properties.surface_water}</p>
                                    <div className="d-flex justify-content-between">
                                        <div className="container d-flex justify-content-between mt-4 mb-0">
                                            <div></div>
                                            <button
                                                type="button"
                                                className="btn btn-outline-warning"
                                                onClick={() =>
                                                    actions.addToFavorites({
                                                        name: planet.properties.name,
                                                    })
                                                }
                                            >
                                                <i
                                                    className={
                                                        store.favorites.find((i) => i.name === planet.properties.name)
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
                <h2 className="text-light">Loading planet...</h2>
            )}
        </div>
    );
};