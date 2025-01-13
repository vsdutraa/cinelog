import { Movie } from "@/types";
import { searchMovies } from "@/lib/api/tmdb";

import SectionHeader from "@/components/section-header";
import MovieSearchItem from "@/components/movies/search/movie-search-item";

const SearchResultsPage = async ({
  params,
}: {
  params: Promise<{ query: string }>;
}) => {
  const { query } = await params;
  const decodedQuery = decodeURIComponent(query);
  const movies = await searchMovies(query, {
    credits: true,
    alternativeTitles: true,
  });

  if (movies.length < 1) {
    return <p>No movies found for "{decodedQuery}"</p>;
  }

  return (
    <div className="space-y-6">
      <SectionHeader title={`Search results for "${decodedQuery}"`} />

      {movies.map((movie: Movie) => {
        const {
          id,
          title,
          poster_path,
          release_date,
          credits,
          director,
          alternative_titles,
        } = movie;

        return (
          <div key={id}>
            <MovieSearchItem
              id={id}
              title={title}
              posterPath={poster_path}
              releaseDate={release_date}
              directorName={director?.name}
              alternativeTitles={alternative_titles}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultsPage;
