import React from "react";
import MovieItem from "./MovieItem";
import type { MovieListProps } from "../types/MovieType";

//---Componente para mostrar la lista de peliculas---
const MovieList: React.FC<MovieListProps> = ({ movies, onDeleteMovie }) => {
  return (
    <div className="flex p-4 justify-center items-center flex-col">
      {movies.length ? (
        <div className="flex flex-wrap gap-4 h-full">
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onDeleteMovie={onDeleteMovie}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <p className="self-center text-center">
            No tienes películas creadas actualmente
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieList;
