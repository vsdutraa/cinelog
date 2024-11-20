import { Movie } from "@/models/types/types";
import { searchMovies } from "@/app/api/integrations/tmdb/tmdb";

import MovieSearchItem from "@/components/movies/search/movie-search-item";
import ResultsHeader from "@/components/movies/search/results-header";
import { Separator } from "@/components/ui/separator";
import { getDirectorName, getReleaseYear } from "@/utils/movieUtils";

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
      <div className="space-y-6">
        {movies.map((movie: Movie) => {
          const {
            id,
            title,
            poster_path: posterPath,
            release_date: releaseDate,
            crew,
          } = movie;
          const directorName = getDirectorName(crew);
          const releaseYear = getReleaseYear(releaseDate);

          return (
            <div key={id}>
              <MovieSearchItem
                id={id}
                title={title}
                posterPath={posterPath}
                releaseYear={releaseYear}
                directorName={directorName}
              />
              <Separator />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultsPage;
