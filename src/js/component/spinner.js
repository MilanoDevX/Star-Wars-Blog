import React from "react";
import "../../styles/home.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-border text-white" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;