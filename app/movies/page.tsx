"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Movie } from "@/lib/types";
import { fetchMovies } from "@/lib/tmdb";

import { Button } from "@/components/ui/button";

const Movies = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const data = await fetchMovies("movie/popular", { page });
      if (data) {
        setMovies((prevMovies) => {
          const newMovies = data.results.filter(
            (newMovie: Movie) =>
              !prevMovies.some((movie) => movie.id === newMovie.id)
          );
          return [...prevMovies, ...newMovies];
        });
      }
      setLoading(false);
    };

    getMovies();
  }, [page]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="mt-6">
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-6">Popular Movies</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {movies &&
            movies.map((movie, i) => (
              <Link href={`/movie/${movie.id}`} key={`${movie.id}`}>
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

        <div className="flex justify-center mt-2">
          <Button onClick={loadMoreMovies} disabled={loading} variant="default">
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
