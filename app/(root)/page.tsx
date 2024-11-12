"use client";

import { useEffect, useState } from "react";
import { fetchMovies } from "../../lib/tmdb";

import MovieCarousel from "@/components/movie-carousel";
import FeaturesGrid from "@/components/features";

const Dashboard = () => {
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
    <div className="mt-4">
      {movies.length > 0 && (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-md">
          {/* Imagem de fundo */}
          <img
            src={`https://image.tmdb.org/t/p/original/${movies[2].backdrop_path}`}
            alt={movies[0].title}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>
      )}

      <h1 className="relative mt-6 text-black text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-snug px-4">
        Discover movies you love. Mark the ones to watch. Let friends in on your
        top picks.
      </h1>

      <div className="mt-6">
        {movies.length > 0 && <MovieCarousel movies={movies} />}
      </div>

      <FeaturesGrid />
    </div>
  );
};

export default Dashboard;
