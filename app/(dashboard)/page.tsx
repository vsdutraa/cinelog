import { fetchPopularMovies } from "@/app/api/integrations/tmdb/tmdb";
import MovieCarousel from "@/components/movies/carousel/movie-carousel";
import MoviePoster from "@/components/movies/movie-poster";

const Dashboard = async () => {
  const res = await fetchPopularMovies();
  const data = await res.json();
  const movies = data;
  // tmdb api returns popular movies sorted by popularity
  const mostPopularMovie = movies[0];

  return (
    <div className="space-y-2 md:space-y-4">
      <MoviePoster
        title={mostPopularMovie.title}
        backdropPath={mostPopularMovie.backdrop_path}
      />

      {/* <h1 className="px-4 text-center text-2xl font-bold leading-snug text-black sm:text-3xl md:text-4xl">
        Discover movies you love. Mark the ones to watch. Let friends in on your
        top picks.
      </h1> */}

      <MovieCarousel movies={movies} />
    </div>
  );
};

export default Dashboard;
