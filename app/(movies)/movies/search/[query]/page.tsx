import { Movie } from "@/models/types/types";
import { searchMovies } from "@/app/api/integrations/tmdb/tmdb";

import MovieSearchItem from "@/components/movies/movie-search-item";
import { Separator } from "@/components/ui/separator";

const SearchResults = async ({
  params,
}: {
  params: Promise<{ query: string }>;
}) => {
  const query = (await params).query;
  const decodedQuery = decodeURIComponent(query);

  const res = await searchMovies(query);
  const data = await res.json();
  const movies = data.results;

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">
        Results for "{decodedQuery}"
      </h1>
      {movies.length > 0 ? (
        <ul className="space-y-4">
          {movies.map(
            (movie: Movie) =>
              movie.poster_path && (
                <div key={movie.id}>
                  <MovieSearchItem movie={movie} />
                  <Separator />
                </div>
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
