import {
  fetchMovieById,
  fetchMovieDirector,
} from "@/app/api/integrations/tmdb/tmdb";
import MovieTitle from "@/components/movies/details/movie-title";
import MoviePoster from "@/components/movies/details/movie-poster";

const MovieDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  const movieRes = await fetchMovieById(id);
  if (!movieRes.ok) {
    const { message } = await movieRes.json();
    return <p>{message}</p>;
  }
  const movie = await movieRes.json();

  const directorRes = await fetchMovieDirector(id);
  const director = await directorRes.json();

  // const director = await fetchMovieDirector(id);

  return (
    <div className="container mx-auto">
      {/* <MoviePoster movie={movie} /> */}

      <MovieTitle movie={movie} director={director} />

      <div className="flex flex-col md:flex-row items-center md:items-start space-x-4">
        <div className="w-full md:w-1/5 mx-auto shadow-md">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-md shadow-lg"
            draggable="false"
          />
        </div>

        <div className="w-full md:w-4/5">
          <p className="text-lg mb-4">
            <span className="font-semibold">Rating:</span>{" "}
            {movie.vote_average.toFixed(1)} / 10
          </p>
          <p className="text-lg mb-4">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
