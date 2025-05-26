import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import Spinner from "../component/spinner";

export const VehicleDetails = () => {
    const { store, actions } = useContext(Context);
    const { vehicleId } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const navigate = useNavigate();

    // Loading vehicle details
    const loadVehicleDetails = async () => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/vehicles/${vehicleId}`);
            const data = await response.json();

            if (data && data.result) {
                setVehicle({
                    ...data.result,
                    properties: {
                        ...data.result.properties,
                    },
                });
            }
        } catch (error) {
            console.error("Error fetching vehicle data:", error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        loadVehicleDetails();
    }, [vehicleId]);

    return (
        <div className="text-center bg-black mt-2">
            <h1 id="databank1" className="text-light pt-5 pb-3">Star Wars Databank</h1>

            <div className="d-flex justify-content-center my-0 w-25">
                <button
                    className="btn btn-outline-light mb-0"
                    style={{ border: "none" }}
                    onClick={() => navigate(-1)} // Back to the previous page
                >
                    <i className="fa-solid fa-arrow-left fa-2xl"></i>
                </button>
            </div>

            {vehicle ? (
                <div className="container-fluid d-flex flex-column align-items-center mb-0">
                    <div className="card container my-0 bg-black" style={{ width: "1000px" }}>
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-7 px-0 pt-4">
                                <div className="h-75">
                                    {/* <img
                                        src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleId}.jpg`}
                                        className="card-img-top"
                                        alt={vehicle.properties.name}
                                        style={{ width: "100%" }}
                                    /> */}
                                    <img
                                        src={store.vehicleImages[vehicleId] || `https://starwars-visualguide.com/assets/img/vehicles/${vehicleId}.jpg`}
                                        className="card-img-top mb-3"
                                        alt={vehicle.properties.name}
                                        style={{ width: "200%", maxWidth: "500px" }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="card-body mb-5">
                                    <div className="py-2">
                                        <h3 className="card-title text-light">{vehicle.properties.name}</h3>
                                    </div>
                                    <p className="text-light">Model: {vehicle.properties.model}</p>
                                    <p className="text-light">Vehicle class: {vehicle.properties.vehicle_class}</p>
                                    <p className="text-light">Manufacturer: {vehicle.properties.manufacturer}</p>
                                    <p className="text-light">Cost in credits: {vehicle.properties.cost_in_credits}</p>
                                    <p className="text-light">Length: {vehicle.properties.length}</p>
                                    <p className="text-light">Crew: {vehicle.properties.crew}</p>
                                    <p className="text-light">Passengers: {vehicle.properties.passengers}</p>
                                    <p className="text-light">Cargo capacity: {vehicle.properties.cargo_capacity}</p>
                                    <div className="d-flex justify-content-between">
                                        <div className="container d-flex justify-content-between mt-4 mb-0">
                                            <div></div>
                                            <button
                                                type="button"
                                                className="btn btn-outline-warning"
                                                onClick={() =>
                                                    actions.addToFavorites({
                                                        name: vehicle.properties.name,
                                                    })
                                                }
                                            >
                                                <i
                                                    className={
                                                        store.favorites.find(
                                                            (i) => i.name === vehicle.properties.name
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