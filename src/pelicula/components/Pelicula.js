import React from "react";
import "./Pelicula.css";

const Pelicula = (props) => {
  return (
    <li className="peliculas-list">
      <div>
        <img src={props.poster} alt={props.title} />
        <h2>{props.title}</h2>
        <h5>{props.fullplot}</h5>
      </div>
    </li>
  );
};

export default Pelicula;
