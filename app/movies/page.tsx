import { Movie } from "@/types";
import { fetchPopularMovies } from "@/lib/api/tmdb";
import MovieCard from "@/components/movies/movie-card";
import MovieCarousel from "@/components/movies/movie-carousel";
import { Separator } from "@/components/ui/separator";

export default async function MovieListPage() {
  const movies = await fetchPopularMovies();

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div>
          <p className="text-sm uppercase text-muted-foreground">
            Popular movies this week
          </p>
          <Separator />
        </div>
        <MovieCarousel movies={movies} />
      </div>
    </div>
  );
  // return (
  //   <div className="container mx-auto space-y-6">
  //     <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
  //       {movies.map((movie: Movie) => (
  //         <MovieCard
  //           key={movie.id}
  //           id={movie.id}
  //           title={movie.title}
  //           posterPath={movie.poster_path}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
}
