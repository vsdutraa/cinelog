import { fetchPopularMovies } from "@/lib/api/tmdb";
import MoviePoster from "@/components/movies/movie-poster";
import MovieCarousel from "@/components/movies/movie-carousel";
import { Separator } from "@/components/ui/separator";

const Dashboard = async () => {
  const movies = await fetchPopularMovies();
  // tmdb api returns popular movies sorted by popularity
  const mostPopularMovie = movies[0];

  return (
    <div className="space-y-2 md:space-y-4">
      <MoviePoster
        title={mostPopularMovie.title}
        backdropPath={mostPopularMovie.backdrop_path}
      />

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
};

export default Dashboard;
