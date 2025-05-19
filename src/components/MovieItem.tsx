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
      className={`p-2 max-w-[400px] transition-all ${
        isRemoving ? "slide-out" : ""
      }`}
    >
      <div className="shadow-[0px_0px_8px_0px_rgba(0,_0,_0,_0.2)] p-2 rounded-2xl mb-2 flex  justify-center items-center flex-col ">
        <div>
          <Image
            src={movie.poster}
            alt={`Poster de ${movie.titulo}`}
            className="rounded-2xl"
            width={300}
            height={300}
          />

          <p className="text-xl text-center">
            <strong>Titulo: {" " + movie.titulo}</strong>
          </p>
          <p className="text-center">
            <strong>
              Año:
              {" " + movie.anio}
            </strong>
          </p>
        </div>
        <div>
          <button
            onClick={handleDelete}
            className="bg-red-400  w-[30px] rounded cursor-pointer  hover:bg-red-500"
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
    </div>
  );
};

export default MovieItem;
