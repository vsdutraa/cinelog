"use client";
import { useState, useEffect, useCallback } from "react";
// types
import { Movie } from "@/models/types/types";
// tmdb
import { fetchPopularMovies } from "@/app/api/integrations/tmdb/tmdb";
// components
import { Button } from "@/components/ui/button";
import MovieCard from "@/components/movies/card/movie-card";
import MovieCardSkeleton from "../card/movie-card-skeleton";

interface MovieListProps {
  initialMovies: Movie[];
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);

      const res = await fetchPopularMovies(page);
      const data = await res.json();
      const newMovies = data;

      setMovies((prevMovies) => [...prevMovies, ...newMovies]);

      setLoading(false);
    };

    loadMovies();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie, i) => (
          <MovieCard
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            key={`${movie.id}-${i}`}
          />
        ))}

        {loading &&
          Array.from({ length: 20 }).map((skeleton, i) => (
            <MovieCardSkeleton key={i} />
          ))}
      </div>

      <div className="flex justify-center">
        <Button
          className="text-xs font-light uppercase"
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
