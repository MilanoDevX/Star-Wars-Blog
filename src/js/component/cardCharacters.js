import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardCharacters = (props) => {
    const { store, actions } = useContext(Context);

    const color = actions.randomColor();

    return (
        <div className="card p-0 rounded bg-dark text-white" style={{ width: "15rem", borderColor: color, borderWidth: "3px" }}>
            <Link to={`/characters/${props.uid}`}>
                <img
                    src={store.characterImages[props.uid] || `https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`}
                    className="card-img-top"
                    alt={props.name}
                    style={{
                        cursor: "pointer",
                        height: "300px",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block"
                    }}
                />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="d-flex justify-content-between">
                    <div></div>
                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() =>
                            actions.addToFavorites({
                                name: props.name,
                            })
                        }
                    >
                        <i
                            className={
                                store.favorites.find((i) => i.name == props.name)
                                    ? "fa-solid fa-heart"
                                    : "fa-regular fa-heart"
                            }
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardCharacters;