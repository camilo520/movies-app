"use client";
import { useEffect, useState } from "react";
import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import type { Movie } from "../types/MovieType";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function MovieApp() {
  //---Estado para manejar las peliculas---
  const [movies, setMovies] = useLocalStorage<Movie[]>("movies", []);
  const [searchMovie, setSearchMovie] = useState("");

  //---Estado para manejar el orden de las peliculas---
  const [sortBy, setSortBy] = useState<keyof Movie | "">("");

  //---Función para agregar una pelicula a la lista y que lo añada con un id predeterminado---
  const addMovie = (movie: Omit<Movie, "id">) => {
    const maxId = movies.length > 0 ? Math.max(...movies.map((m) => m.id)) : 0;
    const newMovie = { ...movie, id: maxId + 1 };
    setMovies([...movies, newMovie]);
  };

  //--Logica para filtrar las peliculas---
  const filteredMovies = movies.filter((movie) =>
    movie.titulo.toLowerCase().includes(searchMovie.toLowerCase())
  );

  //---Función para eliminar una pelicula de la lista---
  const deleteMovie = (id: number) => {
    const updatedMovies = movies.filter((m) => m.id !== id);
    setMovies(updatedMovies);
  };

  //---Función para ordenar las peliculas---
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (!sortBy) return 0;

    const fieldA = a[sortBy];
    const fieldB = b[sortBy];

    if (typeof fieldA === "number" && typeof fieldB === "number") {
      return fieldA - fieldB;
    }

    if (typeof fieldA === "string" && typeof fieldB === "string") {
      return fieldA.localeCompare(fieldB);
    }

    return 0;
  });

  return (
    <div className="p-4 flex flex-col justify-center  h-full ">
      <div className="w-full flex justify-center flex-col items-center">
        <h1 className="text-4xl font-bold mb-5 flex justify-center text-center">
          Gestiona tus Películas
        </h1>
        <MovieForm movies={movies} onAddMovie={addMovie} />
      </div>
      <div className="pt-2 flex w-full justify-center ">
        <div className="flex w-full justify-start flex-col gap-5 p-10 max-[700px]:p-5 rounded-2xl shadow-[0px_8px_17px_-2px_rgba(0,_0,_0,_0.2)] bg-gradient-to-tl from-violet-300 to-indigo-200">
          <h2 className="text-2xl font-bold self-center text-center">
            Tu lista de películas
          </h2>
          <div className="flex flex-row max-[700px]:flex-col justify-center items-center gap-10">
            <div className=" flex flex-col max-w-[400px] justify-start w-full gap-3">
              <label className="font-bold text-xl">
                Ordenar películas por:{" "}
              </label>
              <select
                onChange={(e) => setSortBy(e.target.value as keyof Movie)}
                className="border p-2  cursor-pointer text-sm bg-amber-50 rounded-lg"
              >
                <option value="">Seleccione...</option>
                <option value="titulo">Titulo</option>
                <option value="anio">Año</option>
              </select>
            </div>
            <div className="flex flex-col  max-w-[400px] justify-start w-full gap-3">
              <label className="font-bold text-xl">Busca tu película</label>
              <input
                type="text"
                placeholder="Escribe el titulo..."
                value={searchMovie}
                onChange={(e) => setSearchMovie(e.target.value)}
                className="border p-2 rounded-lg bg-amber-50"
              />
            </div>
          </div>

          <div className=" max-h-[500px] overflow-y-auto">
            <MovieList movies={sortedMovies} onDeleteMovie={deleteMovie} />
          </div>
        </div>
      </div>
    </div>
  );
}
