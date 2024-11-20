"use client";
import { useState, useEffect } from "react";
// types
import { Movie } from "@/models/types/types";
// tmdb
import { fetchPopularMovies } from "@/app/api/integrations/tmdb/tmdb";
// components
import { Button } from "@/components/ui/button";
import MovieCard from "@/components/movies/movie-card";

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (page: number) => {
    try {
      const res = await fetchPopularMovies(page);
      const data = await res.json();
      const movies = data;

      return movies;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadInitialMovies = async () => {
      setLoading(true);
      const initialMovies = await fetchMovies(page);
      setMovies(initialMovies);
      setLoading(false);
    };

    loadInitialMovies();
  }, []);

  const loadMore = async () => {
    setLoading(true);
    const newMovies = await fetchMovies(page + 1);
    setMovies((prevMovies) => [
      ...prevMovies,
      ...newMovies.filter(
        (newMovie: Movie) =>
          !prevMovies.some((movie) => movie.id === newMovie.id),
      ),
    ]);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            key={movie.id}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          className="text-xs uppercase"
          onClick={loadMore}
          disabled={loading}
          variant="default"
          size="sm"
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>
    </div>
  );
};

export default MovieList;