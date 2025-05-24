
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import logoImage from "../../img/Logo-Star-Wars_3.jpg";

export const Hero = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elemento = document.querySelector(hash);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div id="hero" className="px-4 py-0 my-0 text-center">
      <img
        className="d-block mx-auto mb-4"
        src={logoImage}
        alt="Star Wars Logo"
        style={{ width: "100%", height: "95%" }}
      />
      <div className="col-lg-6 mx-auto">
      </div>

    </div>
  )
}