"use client";
import { useEffect, useState } from "react";
import MovieForm from "../components/MovieForm";
import MovieList from "../components/MovieList";
import type { Movie } from "../types/MovieType";
import Image from "next/image";

export default function MovieApp() {
  //---Estado para manejar las peliculas---
  const [movies, setMovies] = useState<Movie[]>([]);

  //---Estado para manejar el orden de las peliculas---
  const [sortBy, setSortBy] = useState<keyof Movie | "">("");

  // Cargar películas desde localStorage al iniciar
  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  // Guardar películas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  //---Función para agregar una pelicula a la lista---
  const addMovie = (movie: Omit<Movie, "id">) => {
    const maxId = movies.length > 0 ? Math.max(...movies.map((m) => m.id)) : 0;
    const newMovie = { ...movie, id: maxId + 1 };
    setMovies([...movies, newMovie]);
  };

  //---Función para eliminar un producto de la lista---
  const deleteMovie = (id: number) => {
    const updatedMovies = movies.filter((m) => m.id !== id);
    setMovies(updatedMovies);
  };

  //---Función para ordenar las peliculas---
  const sortedProducts = [...movies].sort((a, b) => {
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
    <div className="p-4 flex flex-row justify-between gap-4 bg-slate-100 h-screen ">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-5 flex justify-center text-center">
          Gestiona tus Peliculas
        </h1>
        <MovieForm movies={movies} onAddMovie={addMovie} />
        <div className="flex flex-col justify-center p-8 gap-10">
          <p className="text-center font-bold text-2xl pl-30 pr-30">
            Administra tus peliculas de manera eficiente
          </p>
        </div>
      </div>
      <div className="pt-10 flex w-1/2 justify-center ">
        <div className="flex w-full justify-start flex-col gap-5 p-4 rounded-2xl shadow-[0px_8px_17px_-2px_rgba(0,_0,_0,_0.2)] bg-gradient-to-tl from-violet-300 to-indigo-200">
          <h2 className="text-2xl font-bold self-center text-center">
            Tu lista de peliculas
          </h2>
          <div className=" flex flex-col justify-start gap-3">
            <label className="font-bold text-xl">Ordenar peliculas por: </label>
            <select
              onChange={(e) => setSortBy(e.target.value as keyof Movie)}
              className="border p-2  cursor-pointer text-sm bg-amber-50 rounded-lg"
            >
              <option value="">Seleccione...</option>
              <option value="nombre">Titulo</option>
              <option value="anio">Año</option>
            </select>
          </div>
          <div className=" max-h-[600px] overflow-y-auto">
            <MovieList movies={sortedProducts} onDeleteMovie={deleteMovie} />
          </div>
        </div>
      </div>
    </div>
  );
}
