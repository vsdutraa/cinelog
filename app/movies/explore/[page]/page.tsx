import { fetchPopularMovies } from "@/app/api/integrations/tmdb/tmdb";
import { MovieCard, MovieCardSkeleton } from "@/components/movies/movie-card";
import { Pagination } from "@/components/ui/pagination";

export default async function MovieListPage({
  params,
}: {
  params: Promise<{ page: number }>;
}) {
  const { page } = await params;
  console.log(page);

  const movies = await fetchPopularMovies(page);

  return (
    <div className="container mx-auto space-y-6">
      {/* Grid de filmes */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center"></div>
    </div>
  );
}
