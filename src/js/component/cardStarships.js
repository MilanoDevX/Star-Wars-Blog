import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardStarships = (props) => {

    const { store, actions } = useContext(Context);

//    const url = (props.uid) == 2 ? ("https://m.gadzetomania.pl/cc-3f5e9be6cec2aa45edf491d723c12,750,470,0,0.jpg") :

//         (props.uid) == 3 ? ("https://i.pinimg.com/originals/f4/d9/7a/f4d97afd77c37ead846e8e8c9dc58bd3.jpg") :

//            (props.uid) == 17 ? ("https://th.bing.com/th/id/OIP.JcvxWswPAc1_N8lwZSwnYAHaFL?rs=1&pid=ImgDetMain") :

//                (props.uid) == 32 ? ("https://i.pinimg.com/736x/9c/7a/02/9c7a02d817523f9d8461f03f61415efa--star-wars-tribute.jpg") : ("https://starwars-visualguide.com/assets/img/starships/" + props.uid + ".jpg")


    const color = actions.randomColor();

    return (
        <div className="card p-0 rounded bg-dark text-white" style={{ width: "15rem", borderColor: `${color}`, borderWidth: "3px" }}>
            <Link to={`/starships/${props.uid}`}>
                {/* <img src={url}
                    className="card-img-top" alt={props.name}
                    style={{ height: "233px" }}
                /> */}
                <img
                    src={store.starshipImages[props.uid] || `https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`}
                    className="card-img-top"
                    alt={props.name}
                    style={{
                        cursor: "pointer",
                        height: "233px",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block"
                    }}
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

export default CardStarships;















