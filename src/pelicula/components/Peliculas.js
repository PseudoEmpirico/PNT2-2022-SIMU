import React, { useState, useEffect } from "react";
import Pelicula from "./Pelicula";

const url = "http://127.0.0.1:3001/api/movies?pageSize=10&page=1";

const Peliculas = (props) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response.json().then((data) => {
        console.log(data);
        setPeliculas(data);
      });
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {peliculas.map((pelicula) => (
          <Pelicula
            title={pelicula.title}
            fullplot={pelicula.fullplot}
            poster={pelicula.poster}
          ></Pelicula>
        ))}
      </ul>
    </div>
  );
};

export default Peliculas;
