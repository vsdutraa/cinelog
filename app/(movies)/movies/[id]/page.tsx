import { fetchMovieById } from "@/app/api/integrations/tmdb/tmdb";
import MovieTitle from "@/components/movies/details/movie-title";
import MoviePoster from "@/components/movies/details/movie-poster";
import MovieCard from "@/components/movies/details/movie-card";

const MovieDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  const res = await fetchMovieById(id);
  if (!res.ok) {
    const { message } = await res.json();
    return <p>{message}</p>;
  }
  const movie = await res.json();
  console.log(movie);

  return (
    <div className="container mx-auto space-y-4">
      <MoviePoster movie={movie} />

      <MovieTitle movie={movie} />

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <MovieCard movie={movie} />

        <div className="w-full space-y-2">
          <p className="text-lg">
            <span className="font-semibold">Rating:</span>{" "}
            {movie.vote_average.toFixed(1)} / 10
          </p>
          <p className="text-lg leading-6 text-justify">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
