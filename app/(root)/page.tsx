import { fetchPopularMovies } from "@/app/api/integrations/tmdb/tmdb";
import MovieCarousel from "@/components/movies/list/movie-carousel";
import MoviePoster from "@/components/movies/details/movie-poster";

const Dashboard = async () => {
  const res = await fetchPopularMovies(1);
  const data = await res.json();
  const movies = data?.results || [];

  return (
    <div>
      {movies && <MoviePoster movie={movies[0]} />}

      <h1 className="relative mt-6 text-black text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-snug px-4">
        Discover movies you love. Mark the ones to watch. Let friends in on your
        top picks.
      </h1>

      <div className="mt-6">{movies && <MovieCarousel movies={movies} />}</div>
    </div>
  );
};

export default Dashboard;
