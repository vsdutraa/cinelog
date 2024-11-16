import { fetchMovies } from "@/lib/tmdb";
import MovieCarousel from "@/components/dashboard/movie-carousel";

const Dashboard = async () => {
  const data = await fetchMovies("movie/popular");
  const movies = data.results;

  return (
    <div className="mt-4">
      {movies && (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-md">
          <img
            src={`https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`}
            alt={movies[0].title}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>
      )}

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
