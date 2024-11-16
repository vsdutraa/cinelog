"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Movie } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { fetchPopularMovies } from "@/lib/tmdb";

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (page: number) => {
    try {
      const data = await fetchPopularMovies(page);
      return data?.results || [];
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
            <div className="rounded-sm shadow-sm overflow-hidden aspect-[2/3]">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-md"
                draggable="false"
              />
            </div>
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
