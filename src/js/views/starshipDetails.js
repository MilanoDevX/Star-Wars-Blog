import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import Spinner from "../component/spinner";

export const StarshipDetails = () => {
    const { store, actions } = useContext(Context);
    const { starshipId } = useParams();
    const [starship, setStarship] = useState(null);
    const navigate = useNavigate();

    // Loading starship details
    const loadStarshipDetails = async () => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/starships/${starshipId}`);
            const data = await response.json();

            if (data && data.result) {
                setStarship({
                    ...data.result,
                    properties: {
                        ...data.result.properties,
                    },
                });
            }
        } catch (error) {
            console.error("Error fetching starship data:", error);
        }
    };

    // replacing the missed images
    const url = (starshipId) == 2 ? ("https://m.gadzetomania.pl/cc-3f5e9be6cec2aa45edf491d723c12,750,470,0,0.jpg") :
    
        (starshipId) == 3 ? ("https://i.pinimg.com/originals/f4/d9/7a/f4d97afd77c37ead846e8e8c9dc58bd3.jpg") :

        (starshipId) == 17 ? ("https://th.bing.com/th/id/OIP.JcvxWswPAc1_N8lwZSwnYAHaFL?rs=1&pid=ImgDetMain") :

        (starshipId) == 32 ? ("https://i.pinimg.com/736x/9c/7a/02/9c7a02d817523f9d8461f03f61415efa--star-wars-tribute.jpg") : ("https://starwars-visualguide.com/assets/img/starships/" + starshipId + ".jpg")


    useEffect(() => {
        window.scrollTo(0, 0);
        loadStarshipDetails();
    }, [starshipId]);

    return (
        <div className="text-center bg-black mt-2">
            <h1 id="databank1" className="text-light pt-5 pb-3">Star Wars Databank</h1>

            <div className="d-flex justify-content-center my-0 w-50">
                <button
                    className="btn btn-outline-light mb-0"
                    style={{ border: "none" }}
                    onClick={() => navigate(-1)} // Back to the previous page
                >
                    <i className="fa-solid fa-arrow-left fa-2xl"></i>
                </button>
            </div>

            {starship ? (
                <div className="container-fluid d-flex flex-column align-items-center mb-0">
                    <div className="card container my-2 bg-black" style={{ width: "600px" }}>
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-7 px-0 d-flex align-items-center">
                                <div className="h-75">
                                    <img
                                        src={url}
                                        className="card-img-top"
                                        alt={starship.properties.name}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="card-body mb-5">
                                    <div className="py-2">
                                        <h3 className="card-title text-light">{starship.properties.name}</h3>
                                    </div>
                                    <p className="text-light">Model: {starship.properties.model}</p>
                                    <p className="text-light">Starship class: {starship.properties.starship_class}</p>
                                    <p className="text-light">Manufacturer: {starship.properties.manufacturer}</p>
                                    <p className="text-light">Cost in credits: {starship.properties.cost_in_credits}</p>
                                    <p className="text-light">Length: {starship.properties.length}</p>
                                    <p className="text-light">Crew: {starship.properties.crew}</p>
                                    <p className="text-light">Passengers: {starship.properties.passengers}</p>
                                    <p className="text-light">Max atmospheric speed: {starship.properties.max_atmosphering_speed}</p>
                                    <p className="text-light">Hyperdrive rating: {starship.properties.hyperdrive_rating}</p>
                                    <p className="text-light">MGLT: {starship.properties.MGLT}</p>
                                    <p className="text-light">Cargo capacity: {starship.properties.cargo_capacity}</p>
                                    <div className="d-flex justify-content-between">
                                        <div className="container d-flex justify-content-between mt-4 mb-0">
                                            <div></div>
                                            <button
                                                type="button"
                                                className="btn btn-outline-warning"
                                                onClick={() =>
                                                    actions.addToFavorites({
                                                        name: starship.properties.name,
                                                    })
                                                }
                                            >
                                                <i
                                                    className={
                                                        store.favorites.find(
                                                            (i) => i.name === starship.properties.name
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