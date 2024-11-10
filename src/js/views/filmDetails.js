import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const FilmDetails = () => {
    const { store, actions } = useContext(Context);
    const { filmId } = useParams();
    const [film, setFilm] = useState(null);
    const navigate = useNavigate(); 

    // Loading film details
    const loadFilmDetails = async () => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/films/${filmId}`);
            const data = await response.json();

            if (data && data.result) {
                setFilm({
                    ...data.result,
                    properties: {
                        ...data.result.properties,
                    },
                });
            }
        } catch (error) {
            console.error("Error fetching film data:", error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        loadFilmDetails();
    }, [filmId]);

    return (
        <div className="text-center bg-black mt-2">
            <h1 id="databank1" className="text-light pt-5 pb-3">Star Wars Databank</h1>

            <div className="d-flex justify-content-center my-0 w-50">
                <button
                    className="btn btn-outline-light mb-0" style={{ border: "none" }}
                    onClick={() => navigate(-1)} // Back to the previous page
                >
                    <i className="fa-solid fa-arrow-left fa-2xl"></i>
                </button>
            </div>

            {film ? (
                <div className="container-fluid d-flex flex-column align-items-center mb-0">
                    <div className="card container my-2 bg-black" style={{ width: "1000px" }}>
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-7 px-0">
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`}
                                    className="card-img-top"
                                    alt={film.properties.title}
                                    style={{ width: "60%" }}
                                />
                            </div>
                            <div className="col-md-5">
                                <div className="card-body mb-5">
                                    <div className="py-2">
                                        <h3 className="card-title text-light">{film.properties.title}</h3>
                                    </div>
                                    <p className="text-light">Episode: {film.properties.episode_id}</p>
                                    <p className="text-light">Release date: {film.properties.release_date}</p>
                                    <p className="text-light">Director: {film.properties.director}</p>
                                    <p className="text-light">{film.properties.opening_crawl}</p>
                                    <div className="d-flex justify-content-between">
                                        <div className="container d-flex justify-content-between mt-4 mb-0">
                                            <div></div>
                                            <button
                                                type="button"
                                                className="btn btn-outline-warning"
                                                onClick={() =>
                                                    actions.addToFavorites({
                                                        name: film.properties.title,
                                                    })
                                                }
                                            >
                                                <i
                                                    className={
                                                        store.favorites.find(
                                                            (i) => i.name === film.properties.title
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
                <h2 className="text-light">Loading film...</h2>
            )}
        </div>
    );
};