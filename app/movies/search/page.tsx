"use client";
import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { Movie } from "@/lib/types";
import { searchMovies } from "@/lib/tmdb";

import { Separator } from "@/components/ui/separator";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const movies = await searchMovies(query);
      setResults(movies);
      setLoading(false);
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Results for "{query}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <ul className="space-y-4">
          {results.map(
            (movie) =>
              movie.poster_path &&
              movie.overview && (
                <li key={movie.id}>
                  <Link href={`/movies/${movie.id}`} key={`${movie.id}`}>
                    <div className="flex items-center space-x-4">
                      {/* poster */}
                      <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                        className="w-16 h-24 object-cover"
                        draggable="false"
                      />
                      {/* title and relesae date */}
                      <div>
                        <h2 className="text-lg font-medium">
                          {movie.title}
                          <span className="text-sm text-gray-500 ml-2">
                            {movie.release_date.slice(0, 4)}
                          </span>
                        </h2>
                      </div>
                    </div>
                  </Link>
                  {results.length > 1 && <Separator />}
                </li>
              )
          )}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}
