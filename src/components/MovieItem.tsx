import React from "react";
import type { MovieItemProps } from "../types/MovieType";

//---Componente para mostrar una pelicula---
const MovieItem: React.FC<MovieItemProps> = ({ movie, onDeleteMovie }) => {
  return (
    <li className="p-2 ">
      <div className="shadow-[0px_0px_8px_0px_rgba(0,_0,_0,_0.2)] p-2 rounded mb-2 flex justify-between items-center">
        <div>
          <p className="text-xl ">
            <strong>{movie.titulo}</strong>
          </p>
          <img
            src={movie.poster}
            alt={`Poster de ${movie.titulo}`}
            className="w-24 h-auto rounded"
          />
        </div>
        <button
          onClick={() => onDeleteMovie(movie.id)}
          className="bg-red-400  w-[40px] rounded cursor-pointer  hover:bg-red-500"
        >
          <img
            src={"/assets/trash.svg"}
            alt="trash"
            width={100}
            height={100}
            className="hover:invert-[.99]"
          />
        </button>
      </div>
    </li>
  );
};

export default MovieItem;
