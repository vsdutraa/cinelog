// next imports
import Link from "next/link";

import { Movie } from "@/lib/types";
import { searchMovies } from "@/lib/tmdb";
// components
import { Separator } from "@/components/ui/separator";

const SearchResults = async ({
  params,
}: {
  params: Promise<{ query: string }>;
}) => {
  const query = (await params).query;
  const decodedQuery = decodeURIComponent(query);

  const data = await searchMovies(query);
  const movies = data.results;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">
        Results for "{decodedQuery}"
      </h1>
      {movies.length > 0 ? (
        <ul className="space-y-4">
          {movies.map(
            (movie: Movie) =>
              movie.poster_path &&
              movie.overview && (
                <li key={movie.id}>
                  <Link href={`/movie/${movie.id}`} key={`${movie.id}`}>
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
                          <span className="text-sm text-neutral-500 ml-2">
                            {movie.release_date?.slice(0, 4)}
                          </span>
                        </h2>
                      </div>
                    </div>
                  </Link>
                  {movies.length > 1 && <Separator />}
                </li>
              )
          )}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
