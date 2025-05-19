export interface Movie {
  id: number;
  titulo: string;
  poster: string;
  anio: string;
}

export interface MovieItemProps {
  movie: Movie;
  onDeleteMovie: (id: number) => void;
}

export interface MovieFormProps {
  movies: Movie[];
  onAddMovie: (movie: Omit<Movie, "id">) => void;
}

export interface MovieListProps {
  movies: Movie[];
  onDeleteMovie: (id: number) => void;
}
