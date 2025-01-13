import { fetchPopularMovies } from "@/lib/api/tmdb";

import SectionHeader from "@/components/section-header";
import PopularMoviesGrid from "@/components/movies/popular-movies-grid";

const PopularMoviesPage = async () => {
  const movies = await fetchPopularMovies();

  return (
    <div>
      <SectionHeader title="Movies" />
      <PopularMoviesGrid movies={movies} />
    </div>
  );
};
export default PopularMoviesPage;
