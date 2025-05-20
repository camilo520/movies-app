import React, { useState } from "react";
import type { MovieItemProps } from "../types/MovieType";
import Image from "next/image";

//---Componente para mostrar una pelicula---
const MovieItem: React.FC<MovieItemProps> = ({ movie, onDeleteMovie }) => {
  //---Estado para manejar la animación de eliminación---
  const [isRemoving, setIsRemoving] = useState(false);

  //---Función para eliminar una pelicula de la lista---
  const handleDelete = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onDeleteMovie(movie.id);
    }, 500);
  };

  return (
    <div
      className={`p-2 max-w-[300px] transition-all ${
        isRemoving ? "slide-out" : ""
      }`}
    >
      <div className="shadow-[0_0_8px_0_rgba(0,0,0,0.2)] p-4 rounded-2xl mb-2 flex flex-col justify-between items-center bg-purple-200 h-[420px] ">
        <div className="w-[250px] h-[250px] max-[700px]:w-[220px] max-[700px]:h-full rounded-xl overflow-hidden relative">
          <Image
            src={movie.poster}
            alt={`Poster de ${movie.titulo}`}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="text-center mt-4">
          <p className="text-xl font-bold">Título: {movie.titulo}</p>
          <p className="text-md font-semibold">Año: {movie.anio}</p>
        </div>
        <button
          onClick={handleDelete}
          className="bg-red-400  w-[40px] rounded cursor-pointer  hover:bg-red-500"
        >
          <img
            src={"/assets/trash.svg"}
            alt="trash"
            width={50}
            height={50}
            className="hover:invert-[.99]"
          />
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
