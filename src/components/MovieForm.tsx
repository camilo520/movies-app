import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { MovieFormProps } from "../types/MovieType";

const MovieForm: React.FC<MovieFormProps> = ({ onAddMovie, movies }) => {
  //---Estado para manejar las peliculas---
  const [newMovie, setNewMovie] = useState({
    id: 0,
    titulo: "",
    poster: "",
    anio: 0,
  });

  //---Función para agregar una pelicula a la lista---
  const handleSubmit = () => {
    const exists = movies.some((movie) => movie.id === newMovie.id);
    if (exists) {
      toast.error("El código ya está registrado. Intente con otro código.", {
        position: "top-center",
        autoClose: 3000,
        isLoading: false,
      });
      return;
    }

    onAddMovie(newMovie);
    toast.success("¡Producto agregado exitosamente!", {
      position: "top-center",
      autoClose: 1000,
      isLoading: false,
    });

    setNewMovie({ id: 0, titulo: "", poster: "", anio: 0 });
  };

  //---Función para evitar caracteres especiales en los inputs de tipo número---
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "-" || e.key === "e" || e.key === "+" || e.key === ".") {
      e.preventDefault();
    }
  };

  //Función para evitar el scroll del raton en los inputs de tipo número---
  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    e.currentTarget.blur();
  };

  //---Condición para habilitar el botón de agregar producto---
  const isSubmitted =
    newMovie.id > 0 &&
    newMovie.titulo.trim() !== "" &&
    newMovie.poster.trim() !== "" &&
    newMovie.anio > 0;

  return (
    <div className="mb-4 flex flex-col gap-3">
      <ToastContainer />
      <input
        type="number"
        placeholder="Ingrese el código del producto..."
        value={newMovie.id || ""}
        onChange={(e) =>
          setNewMovie({ ...newMovie, id: Number(e.target.value) })
        }
        onKeyDown={handleKeyDown}
        onWheel={handleWheel}
        className="border rounded-lg p-2  no-arrows"
      />
      <input
        type="text"
        placeholder="Ingrese el titulo de la pelicula..."
        value={newMovie.titulo}
        onChange={(e) => setNewMovie({ ...newMovie, titulo: e.target.value })}
        className="border p-2 rounded-lg"
      />
      <input
        type="number"
        placeholder="Ingrese el año de estreno de la pelicula..."
        value={newMovie.anio}
        onChange={(e) =>
          setNewMovie({ ...newMovie, anio: Number(e.target.value) })
        }
        className="border p-2 rounded-lg"
      />
      <button
        onClick={handleSubmit}
        disabled={!isSubmitted}
        className={`text-white p-2 w-[200px] self-center rounded-3xl shadow-[0px_8px_17px_-2px_rgba(0,_0,_0,_0.2)] ${
          !isSubmitted
            ? "cursor-not-allowed bg-gray-500"
            : "cursor-pointer bg-green-800 hover:bg-green-700"
        }`}
      >
        Agregar Pelicula
      </button>
    </div>
  );
};

export default MovieForm;
