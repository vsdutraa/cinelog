import { Movie } from "@/types/db";
import { searchMovies } from "@/lib/api/tmdb";
import { filterDirector } from "@/lib/api/tmdb-utils";

import MovieSearchItem from "@/components/movies/search/movie-search-item";
import { Separator } from "@/components/ui/separator";
import { delay } from "@/lib/delay";

const SearchResultsPage = async ({
  params,
}: {
  params: Promise<{ query: string }>;
}) => {
  // await delay(2000);

  const query = (await params).query;
  const decodedQuery = decodeURIComponent(query);
  const movies = await searchMovies(query, {
    credits: true,
    alternativeTitles: true,
  });

  if (movies.length < 1) {
    return <p>Not found.</p>;
  }

  return (
    <div className="space-y-6">
      {movies.map((movie: Movie) => {
        const {
          id,
          title,
          poster_path,
          release_date,
          credits,
          alternative_titles,
        } = movie;
        const director = filterDirector(credits);
        const directorName = director.name;
        const releaseYear = release_date.slice(0, 4);

        return (
          <div key={id}>
            <MovieSearchItem
              id={id}
              title={title}
              posterPath={poster_path}
              releaseYear={releaseYear}
              directorName={directorName}
              alternativeTitles={alternative_titles}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultsPage;
