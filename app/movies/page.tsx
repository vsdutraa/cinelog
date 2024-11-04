"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchMovies } from "@/lib/tmdb";

const Movies = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetchMovies("movie/popular");
      if (data && data.results) {
        setMovies(data.results);
      }
    };
    getPopularMovies();
  }, []);

  return (
    <div className="mt-6">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {movies &&
            movies.map((movie) => (
              <Link href={`/movies/${movie.id}`} key={movie.id}>
                <div className="rounded-sm shadow-md overflow-hidden">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-auto rounded"
                    draggable="false"
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
