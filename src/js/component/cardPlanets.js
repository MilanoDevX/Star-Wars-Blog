import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPlanets = (props) => {
    const url = (props.uid) == 1 ? ("https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png") : ("https://starwars-visualguide.com/assets/img/planets/" + props.uid + ".jpg")

    const { store, actions } = useContext(Context);

    let randomColor = () => {
        const colorBase = "0123456789ABCDEF";
        let newColor = "#";

        for (let i = 0; i < 6; i++) {
            newColor = newColor + colorBase[Math.floor(Math.random() * colorBase.length)];
        }
        return newColor;
    }
    const color = randomColor();

    return (
        <div className="card p-0 rounded bg-dark text-white" style={{ width: "15rem", borderColor: `${color}`, borderWidth: "3px" }}>
            <Link to={`/planets/${props.uid}`}>
                <img src={url}
                    className="card-img-top"
                    alt={props.name}
                    style={{ cursor: "pointer" }}
                />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"></p>
                <div className="d-flex justify-content-between">
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
        </div >
    )
}

export default CardPlanets;










