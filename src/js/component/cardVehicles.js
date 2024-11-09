import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CardVehicles = (props) => {

    const { store, actions } = useContext(Context);

    let randomColor = () => {
        const colorBase = "0123456789ABCDEF";
        let newColor = "#";
    
        for (let i=0; i<6; i++) {
            newColor = newColor + colorBase[Math.floor(Math.random()*colorBase.length)];
        }
        return newColor;
    }
    const color = randomColor();

    return (
            <div className="card p-0 rounded bg-dark text-white" style={{width: "15rem", borderColor: `${color}`, borderWidth: "3px"}}>
                <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.uid + ".jpg"} 
                    className="card-img-top" alt={props.name} 
                />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text"></p>
                </div>
                <div className="card-footer d-flex justify-content-between mb-2">
                    <div></div>
                    <button type="button" className="btn btn-outline-warning"
                        onClick={() => actions.addToFavorites({
                            name: props.name})
                        }                        
                    ><i class="fa-regular fa-heart"/><i class="fa-solid fa-heart"/></button>
                </div>

            </div>
    )
}

export default CardVehicles;















