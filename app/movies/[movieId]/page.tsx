import { fetchMovieById } from "@/lib/api/tmdb";

import MovieCard from "@/components/movies/movie-card";
import MovieGenreBadges from "@/components/movies/movie-details/movie-genre-badges";
import MovieTitle from "@/components/movies/movie-title";
import MovieInfo from "@/components/movies/movie-info";
import { MovieSynopsis } from "@/components/movies/movie-details/movie-synopsis";
import { filterDirector } from "@/lib/api/tmdb-utils";
import { CastCrewSection } from "@/components/movies/movie-details/cast-crew-section";

const MovieDetailsPage = async ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = await params;
  const movie = await fetchMovieById(movieId, { credits: true });
  const {
    id,
    title,
    tagline,
    overview,
    release_date,
    poster_path,
    genres,
    credits,
  } = movie;
  const releaseYear = release_date.slice(0, 4);
  const director = filterDirector(credits!);
  const directorName = director.name;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      <div className="space-y-2">
        <MovieCard id={id} title={title} posterPath={poster_path} />
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

        <CastCrewSection credits={credits!} />
      </div>
    </div>
  );
};
export default MovieDetailsPage;
