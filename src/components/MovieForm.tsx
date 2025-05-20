import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { MovieFormProps } from "../types/MovieType";
import Image from "next/image";

const MovieForm: React.FC<MovieFormProps> = ({ onAddMovie, movies }) => {
  //---Estado para manejar las peliculas---
  const [newMovie, setNewMovie] = useState({
    titulo: "",
    poster: "",
    anio: "",
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  //---Función para cambiar el estado de la imagen---
  const handleOpenFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setNewMovie((prev) => ({ ...prev, poster: imageURL }));
    }
  };

  //Función para evitar el scroll del raton en los inputs de tipo número---
  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    e.currentTarget.blur();
  };

  //---Condición para habilitar el botón de agregar una pelicula---
  const isSubmitted =
    newMovie.titulo.trim() !== "" &&
    newMovie.poster.trim() !== "" &&
    newMovie.anio.trim() !== "" &&
    newMovie.anio.length == 4;

  return (
    <div className=" flex max-[700px]:flex-col justify-center items-center content-center max-[700px]:gap-1 gap-10 max-[700px]:pb-2">
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
          type="button"
          onClick={handleOpenFile}
          className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 cursor-pointer shadow-[0px_8px_17px_-2px_rgba(0,_0,_0,_0.2)]"
        >
          Subir imagen
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
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
      {newMovie.poster && (
        <Image
          src={newMovie.poster}
          alt="Previsualización"
          className={`h-auto object-contain self-center rounded-md border  shadow-[0px_8px_17px_-2px_rgba(0,_0,_0,_0.2)] ${
            newMovie.poster ? "slide-in" : "slide-out"
          }`}
          width={300}
          height={300}
        />
      )}
    </div>
  );
};

export default MovieForm;
