export interface Movie {
  id: number;
  titulo: string;
  poster: string;
  anio: string;
}

export interface MovieItemProps {
  movie: Movie;
  onDeleteMovie: (id: number) => void;
  onEditMovie: (movie: Movie) => void;
}

export interface MovieFormProps {
  movies: Movie[];
  onAddMovie: (movie: Omit<Movie, "id">) => void;
  onUpdateMovie: (movie: Movie) => void;
  movieToEdit: Movie | null;
}

export interface MovieListProps {
  movies: Movie[];
  onDeleteMovie: (id: number) => void;
}
