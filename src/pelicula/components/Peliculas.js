import React, { useState, useEffect } from "react";
import Pelicula from "./Pelicula";

const url = "http://127.0.0.1:3001/api/movies?pageSize=10&page=";

const Peliculas = (props) => {
  const [peliculas, setPeliculas] = useState([]);
  const [page, setPage] = useState(1);

  function HandlerClick_Button_der(event) {
    setPage(page + 1);
  }

  function HandlerClick_Button_izq(event) {
    if (page - 1 > 0) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${url}${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response
        .json()
        .then((data) => setPeliculas(data))
        .catch((error) => console.error(error));
    }

    fetchData();
  }, [page]);

  return (
    <div>
      <ul>
        {peliculas.map((pelicula) => (
          <div className="divisor">
            <Pelicula
              title={pelicula.title}
              fullplot={pelicula.fullplot}
              poster={pelicula.poster}
            ></Pelicula>
          </div>
        ))}
      </ul>
      <button onClick={HandlerClick_Button_izq}>menos</button>
      <button onClick={HandlerClick_Button_der}>Mas</button>
    </div>
  );
};

export default Peliculas;
