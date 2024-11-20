import { Movie } from "@/models/types/types";
import { fetchMovieCredits } from "./tmdb";

// filter single movie
const isMovieComplete = (movie: Movie): boolean => {
  return (
    !!movie.title &&
    !!movie.release_date &&
    !!movie.overview &&
    !!movie.vote_average &&
    !!movie.poster_path &&
    !!movie.backdrop_path
  );
};

// filter array of movies
const filterMovies = (data: Movie[]): Movie[] => {
  return data.filter(isMovieComplete);
};

export const addCreditsToMovies = async (movies: Movie[]): Promise<Movie[]> => {
  const moviesWithCredits = await Promise.all(
    movies.map(async (movie: Movie) => {
      const res = await fetchMovieCredits(movie.id);
      const credits = await res.json();

      movie.crew = credits.crew || [];
      movie.cast = credits.cast || [];

      return movie;
    })
  );

  return moviesWithCredits;
};

export const addCreditsToMovie = async (movie: Movie): Promise<Movie> => {
  const res = await fetchMovieCredits(movie.id);
  const credits = await res.json();

  movie.crew = credits.crew || [];
  movie.cast = credits.cast || [];

  return movie;
};

export { isMovieComplete, filterMovies };
