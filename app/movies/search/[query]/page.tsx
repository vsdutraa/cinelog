import { Movie } from "@/models/types/types";
import { searchMovies } from "@/app/api/integrations/tmdb/tmdb";

import MovieSearchItem from "@/components/movies/search/movie-search-item";
import ResultsHeader from "@/components/movies/search/results-header";
import { Separator } from "@/components/ui/separator";

const SearchResultsPage = async ({
  params,
}: {
  params: Promise<{ query: string }>;
}) => {
  const query = (await params).query;
  const decodedQuery = decodeURIComponent(query);

  const res = await searchMovies(query);
  const data = await res.json();
  const movies = data;

  return (
    <div className="space-y-4">
      <ResultsHeader title={`Showing matches for "${decodedQuery}"`} />
      {movies.length < 1 && <p>There was no matches for your search term.</p>}
      <div className="space-y-4">
        {movies.map((movie: Movie) => (
          <div key={movie.id} className="space-y-2">
            <MovieSearchItem movie={movie} />
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
