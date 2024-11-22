import { fetchPopularMovies } from "@/app/api/integrations/tmdb/tmdb";
import MovieCarousel from "@/components/movies/movie-carousel";
import MoviePoster from "@/components/movies/movie-poster";

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

      <MovieCarousel movies={movies} />
    </div>
  );
};

export default Dashboard;
