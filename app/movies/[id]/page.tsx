import { fetchMovies, fetchMovieCredits } from "@/lib/tmdb";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const movieId = params.id;

  const movie = await fetchMovies(`movie/${movieId}`);
  const credits = await fetchMovieCredits(movieId);
  const [director] = credits.crew.filter(
    (member: any) => member.job === "Director"
  );

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* title and directors */}
      <div className="container mx-auto flex flex-col gap-2 mb-4">
        <div className="flex items-end gap-2 md:gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {movie.title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-neutral-500">
            {movie.release_date.slice(0, 4)}
          </p>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl text-neutral-700">
          Directed by{" "}
          <span className="font-semibold">{director?.name || "Unknown"}</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        {/* poster image */}
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
            <span className="font-semibold">TMDB Rating:</span>{" "}
            {movie.vote_average.toFixed(1)} / 10
          </p>
          <p className="text-lg mb-4">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
