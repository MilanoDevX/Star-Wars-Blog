import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardFilms = (props) => {

    const { store, actions } = useContext(Context);

    const color = actions.randomColor();

    return (
        <div className="card p-0 rounded bg-dark text-white" style={{ width: "15rem", borderColor: `${color}`, borderWidth: "3px" }}>
            <Link to={`/films/${props.uid}`}>
                <img src={store.filmImages[props.uid] || `https://starwars-visualguide.com/assets/img/films/${props.uid}.jpg`}
                    className="card-img-top" alt={props.name}
                />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"></p>
            </div>
            <div className="card-footer d-flex justify-content-between mb-2">
                <div></div>
                <button type="button" className="btn btn-outline-warning"
                    onClick={() => actions.addToFavorites({
                        name: props.name
                    })
                    }>
                    <i className={
                        store.favorites.find(i => i.name == props.name)
                            ? "fa-solid fa-heart"
                            : "fa-regular fa-heart"
                    } />
                </button>
            </div>

        </div>
    )
}

export default CardFilms;










