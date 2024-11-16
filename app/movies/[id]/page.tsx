import { fetchMovieById, fetchMovieDirector } from "@/lib/tmdb";
import MoviePoster from "@/components/movies/movie-poster";

const MovieDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const movie = await fetchMovieById(id);
  const director = await fetchMovieDirector(id);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="relative">
        <MoviePoster movie={movie} />
      </div>

      <div className="md:flex items-end md:space-x-3 mb-4">
        <h1 className="text-2xl md:text-3xl font-serif font-black text-shadow">
          {movie.title}
        </h1>
        <div className="flex items-end space-x-2">
          <p className="text-lg md:text-xl">
            {movie.release_date?.slice(0, 4)}
          </p>
          <p className="text-lg md:text-xl capitalize">
            <span className="text-neutral-600 font-light">Directed by</span>{" "}
            {director}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto rounded-md shadow-lg"
            draggable="false"
          />
        </div>

        <div className="flex-1">
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
