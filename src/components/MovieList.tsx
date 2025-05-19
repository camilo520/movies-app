import React from "react";
import MovieItem from "./MovieItem";
import type { MovieListProps } from "../types/MovieType";

//---Componente para mostrar la lista de peliculas---
const MovieList: React.FC<MovieListProps> = ({ movies, onDeleteMovie }) => {
  return (
    <div>
      {movies.length ? (
        <ul>
          <div>
            {movies.map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                onDeleteMovie={onDeleteMovie}
              />
            ))}
          </div>
        </ul>
      ) : (
        <div className="flex flex-col mt-50">
          <p className="flex self-center justify-center text-center">
            No tienes peliculas creadas actualmente
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieList;
