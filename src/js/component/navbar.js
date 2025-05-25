import React, { useEffect, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [interacted, setInteracted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Solo activar el efecto si estamos en la página de inicio
    if (location.pathname === "/") {
      const handleInteraction = () => setInteracted(true);

      window.addEventListener("scroll", handleInteraction);
      window.addEventListener("click", handleInteraction);

      return () => {
        window.removeEventListener("scroll", handleInteraction);
        window.removeEventListener("click", handleInteraction);
      };
    }
  }, [location.pathname]);

  return (
    <nav className="navbar bg-black m-0 px-5 py-2 fixed-top">
      <Link to={{ pathname: "/", hash: "#hero" }} style={{ textDecoration: "none" }}>
        <div className="justify-content-center text-warning">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
            style={{ maxWidth: "100px" }}
            alt="Star Wars Logo"
          />
        </div>
      </Link>

      <div className="ml-auto d-flex gap-2">
        <Link to={{ pathname: "/", hash: "#databank" }}>
          <button
            type="button"
            className={`btn btn-outline-light px-4 ${
              location.pathname === "/" && !interacted ? "blinking" : ""
            }`}
          >
            Databank
          </button>
        </Link>

        <div className="dropdown">
          <button
            type="button"
            className="btn btn-outline-warning px-4 dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end bg-warning" style={{ width: "max-content" }}>
            {store.favorites && store.favorites.length > 0 ? (
              store.favorites.map((item, index) => (
                <li className="px-3" key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      className="dropdown-item bg-warning text-black"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      {item.name}
                    </a>
                    <i
                      className="fa-solid fa-x mx-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => actions.removeFavorite(item.name)}
                    ></i>
                  </div>
                </li>
              ))
            ) : (
              <li className="d-flex justify-content-center px-3">
                <div className="d-flex justify-content-center">
                  <span className="dropdown-item bg-warning text-black">Empty</span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
