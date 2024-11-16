import { fetchPopularMovies } from "@/lib/tmdb";
import MovieCarousel from "@/components/movies/movie-carousel";
import MoviePoster from "@/components/movies/movie-poster";

const Dashboard = async () => {
  const data = await fetchPopularMovies(1);
  const movies = data?.results || [];

  return (
    <div className="mt-4">
      {movies && <MoviePoster movie={movies[0]} />}

      <h1 className="relative mt-6 text-black text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-snug px-4">
        Discover movies you love. Mark the ones to watch. Let friends in on your
        top picks.
      </h1>

      <div className="mt-6">{movies && <MovieCarousel movies={movies} />}</div>

      <div className="pb-6"></div>
    </div>
  );
};

export default Dashboard;
