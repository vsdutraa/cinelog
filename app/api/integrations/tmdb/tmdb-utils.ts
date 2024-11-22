import { Movie } from "@/models/types/types";
import { fetchMovieCredits } from "./tmdb";

export const isMovieComplete = (movie: Movie): boolean => {
  return (
    !!movie.title &&
    !!movie.release_date &&
    !!movie.overview &&
    !!movie.vote_average &&
    !!movie.poster_path &&
    !!movie.backdrop_path
  );
};

export const filterMovies = (data: Movie[]): Movie[] => {
  return data.filter(isMovieComplete);
};
