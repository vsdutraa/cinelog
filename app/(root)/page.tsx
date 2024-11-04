"use client";

import { Eye, Bookmark, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../lib/tmdb";
import Link from "next/link";
import MovieCarousel from "@/components/movie-carousel";

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

  console.log(movies);

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

      <div className="grid grid-cols-1 sm:grid-cols-3 mt-6 text-black ">
        <div className="flex flex-col items-center text-center py-4 md:p-6 lg:p-8">
          <Eye className="text-black w-10 h-10 mb-4 " />
          {/* Ícone com tamanho ajustado */}
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Track films you’ve watched.
          </p>
        </div>

        <div className="flex flex-col items-center text-center py-4 md:p-6 lg:p-8">
          <Bookmark className="text-black w-10 h-10 mb-4" />
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Save those you want to see.
          </p>
        </div>

        <div className="flex flex-col items-center text-center py-4 md:p-6 lg:p-8">
          <Share2 className="text-black w-10 h-10  mb-4" />
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Tell your friends what’s good.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
