import React from "react";

const CardPlanets = (props) => {
    const url = (props.uid) == 1 ? ("https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png") : ("https://starwars-visualguide.com/assets/img/planets/" + props.uid + ".jpg")

    return (
            <div className="card p-0 border-dark rounded" style={{width: "15rem"}}>
                <img src={url} 
                    className="card-img-top" alt={props.name} 
                />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-outline-primary">Learn more!</button>
                        <button type="button" className="btn btn-outline-warning"><i class="fa-regular fa-heart"/><i class="fa-solid fa-heart"/></button>
                    </div>
                </div>
            </div>
    )
}

export default CardPlanets;










