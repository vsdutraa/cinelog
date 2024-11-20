"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Movie } from "@/models/types/types";
import { fetchPopularMovies } from "@/app/api/integrations/tmdb/tmdb";
import { Button } from "@/components/ui/button";
import MovieCard from "@/components/movies/details/movie-card";

const MoviesList = () => {
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

  const loadMoreMovies = async () => {
    setLoading(true);
    const newMovies = await fetchMovies(page + 1);
    setMovies((prevMovies) => [
      ...prevMovies,
      ...newMovies.filter(
        (newMovie: Movie) =>
          !prevMovies.some((movie) => movie.id === newMovie.id)
      ),
    ]);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {movies.map((movie) => (
          <Link href={`/movies/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} variant="list" />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Button onClick={loadMoreMovies} disabled={loading} variant="default">
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>
    </div>
  );
};

export default MoviesList;
