import { Movie } from "@/models/types/types";
import {
  enrichMoviesWithDirector,
  fetchMovieDirector,
  searchMovies,
} from "@/app/api/integrations/tmdb/tmdb";

import MovieSearchItem from "@/components/movies/search/movie-search-item";
import ResultsHeader from "@/components/movies/search/results-header";
import { Separator } from "@/components/ui/separator";

const SearchResultsPage = async ({
  params,
}: {
  params: Promise<{ query: string }>;
}) => {
  try {
    const query = (await params).query;
    const decodedQuery = decodeURIComponent(query);
    const movies = await searchMovies(query);
    const moviesWithDirectors = await enrichMoviesWithDirector(movies);

    return (
      <div className="space-y-4">
        <ResultsHeader title={`Showing matches for "${decodedQuery}"`} />
        {movies.length < 1 && <p>There was no matches for your search term.</p>}
        <div className="space-y-6">
          {moviesWithDirectors.map((movie: Movie) => {
            const {
              id,
              title,
              poster_path: posterPath,
              release_date: releaseDate,
              directorName,
            } = movie;
            const releaseYear = releaseDate.slice(0, 4);

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
  } catch (error: any) {}
};

export default SearchResultsPage;
