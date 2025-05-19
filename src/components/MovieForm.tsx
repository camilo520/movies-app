import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { MovieFormProps } from "../types/MovieType";

const MovieForm: React.FC<MovieFormProps> = ({ onAddMovie, movies }) => {
  //---Estado para manejar las peliculas---
  const [newMovie, setNewMovie] = useState({
    titulo: "",
    poster: "",
    anio: "",
  });

  //---Función para agregar una pelicula a la lista---
  const handleSubmit = () => {
    const exists = movies.some(
      (movie) => movie.titulo.toLowerCase() === newMovie.titulo.toLowerCase()
    );
    if (exists) {
      toast.error("La pelicula ya está registrada.", {
        position: "top-center",
        autoClose: 3000,
        isLoading: false,
      });
      return;
    }

    onAddMovie(newMovie);
    toast.success("Pelicula agregada exitosamente!", {
      position: "top-center",
      autoClose: 1000,
      isLoading: false,
    });

    setNewMovie({ titulo: "", poster: "", anio: "" });
  };

  //Función para evitar el scroll del raton en los inputs de tipo número---
  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    e.currentTarget.blur();
  };

  //---Condición para habilitar el botón de agregar producto---
  const isSubmitted =
    newMovie.titulo.trim() !== "" &&
    newMovie.poster.trim() !== "" &&
    newMovie.anio.trim() !== "";

  return (
    <div className="mb-4 flex flex-col gap-3">
      <ToastContainer />
      <input
        type="text"
        placeholder="Ingrese el titulo de la pelicula..."
        value={newMovie.titulo}
        onChange={(e) => setNewMovie({ ...newMovie, titulo: e.target.value })}
        className="border p-2 rounded-lg"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const imageURL = URL.createObjectURL(file);
            setNewMovie({ ...newMovie, poster: imageURL });
          }
        }}
        className="border p-2 rounded-lg"
      />
      <input
        type="number"
        placeholder="Ingrese el año de estreno de la pelicula..."
        value={newMovie.anio}
        onChange={(e) => {
          const value = e.target.value;
          if (value.length <= 4) {
            setNewMovie({ ...newMovie, anio: value });
          }
        }}
        onWheel={handleWheel}
        className="border p-2 rounded-lg"
        maxLength={4}
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
