import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const PageNotFound = () => {

    return (
        <div className="text-center bg-black mt-4 mb-3">
            <h3 id="databank1" className="text-light pt-5 pb-3" style={{fontFamily:"Orbitron"}}>404 - REQUESTED DATA, EXIST IT DOES NOT.</h3>
            <img src="https://img-9gag-fun.9cache.com/photo/anMp5XB_460s.jpg" alt="R2D2-hacking" style={{width:"55%"}}/>
        </div>
    );
};