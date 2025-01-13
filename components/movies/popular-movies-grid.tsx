import { Movie } from "@/types";
import MovieCard from "@/components/movies/movie-card";

interface PopularMoviesGridProps {
  movies: Movie[];
}
const PopularMoviesGrid = ({ movies }: PopularMoviesGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-1 xl:grid-cols-10">
      {movies.map((movie: Movie) => {
        return (
          <div key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PopularMoviesGrid;
