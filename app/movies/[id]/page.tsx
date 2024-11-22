import {
  fetchMovieById,
  fetchMovieDirector,
} from "@/app/api/integrations/tmdb/tmdb";

import { MovieCard } from "@/components/movies/movie-card";
import { MovieGenreBadges } from "@/components/movies/details/movie-genre-badges";
import { MovieTitle } from "@/components/movies/movie-title";
import { MovieInfo } from "@/components/movies/details/movie-info";
import { MovieSynopsis } from "@/components/movies/details/movie-synopsis";

const MovieDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  try {
    const { id: movieId } = await params;
    const movie = await fetchMovieById(movieId);
    const {
      id,
      title,
      tagline,
      overview,
      release_date: releaseDate,
      poster_path: posterPath,
      genres,
    } = movie;

    const releaseYear = releaseDate.slice(0, 4);
    const { name: directorName } = await fetchMovieDirector(movieId);

    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        <div className="space-y-2">
          <MovieCard id={id} title={title} posterPath={posterPath} />
          <MovieGenreBadges genres={genres} />
        </div>

        <div className="space-y-4 md:col-span-2 lg:col-span-3">
          <div>
            <MovieTitle id={id} title={title} />
            <MovieInfo
              releaseYear={releaseYear}
              directorName={directorName}
              className="text-md"
            />
          </div>

          <MovieSynopsis tagline={tagline} overview={overview} />
        </div>
      </div>
    );
  } catch (error: any) {
    console.error("Error fetching movie: ", error.message);

    return <div>Error loading movie data. Please try again later.</div>;
  }
};
export default MovieDetailsPage;
