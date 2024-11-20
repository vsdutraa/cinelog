import { fetchMovieById } from "@/app/api/integrations/tmdb/tmdb";

import { Movie, Person } from "@/models/types/types";

import MoviePoster from "@/components/movies/movie-poster";
import MovieCard from "@/components/movies/movie-card";
import MovieDetails from "@/components/movies/details/movie-details";
import MovieActions from "@/components/movies/actions/movie-actions";
import MovieGenreBadges from "@/components/movies/details/content/movie-genres";

const MovieDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const res = await fetchMovieById((await params).id);
  if (!res.ok) {
    const { message } = await res.json();
    return <p>{message}</p>;
  }
  const movie: Movie = await res.json();

  const {
    id,
    title,
    tagline,
    overview,
    release_date: releaseDate,
    poster_path: posterPath,
    crew,
    cast,
  } = movie;
  const releaseYear = releaseDate.slice(0, 4);
  const genres = movie.genres?.map((genre: any) => genre.name) || [];
  console.log(genres);

  const director = movie.crew?.find(
    (person: Person) => person.job === "Director",
  );
  const directorName = director?.name || "Unknown";

  return (
    <div className="container space-y-4">
      <div className="grid grid-cols-1 space-y-6 md:grid-cols-4 md:space-x-6 md:space-y-0">
        {/* left side */}
        <div className="flex flex-col space-y-2">
          <MovieCard id={id} title={title} posterPath={posterPath} />
          <MovieGenreBadges genres={genres} />
        </div>
        {/* right side */}
        <div className="col-span-3">
          <MovieDetails
            id={id}
            title={title}
            tagline={tagline}
            overview={overview}
            releaseYear={releaseYear}
            directorName={directorName}
          />
        </div>
      </div>

      {/* <MovieActions /> */}
    </div>
  );
};
export default MovieDetailsPage;
