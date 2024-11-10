import { fetchMovies } from "@/lib/tmdb";

interface MovieDetailsPageProps {
  params: Awaited<{ id: string }>;
}

const MovieDetails: React.FC<MovieDetailsPageProps> = async ({ params }) => {
  const movieId = params.id;
  const movie = await fetchMovies(`movie/${movieId}`);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <h2 className="text-lg">{movie.release_date.slice(0, 4)}</h2>
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
            <span className="font-semibold">Rating:</span> {movie.vote_average}{" "}
            / 10
          </p>
          <p className="text-lg mb-4">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
