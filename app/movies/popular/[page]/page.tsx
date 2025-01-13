import { fetchPopularMovies } from "@/lib/api/tmdb";

import SectionHeader from "@/components/section-header";
import PopularMoviesGrid from "@/components/movies/popular-movies-grid";
import Pagination from "@/components/pagination";
import { popularMoviesRoute } from "@/routes";

import { redirect } from "next/navigation";

const PopularMoviesPage = async ({
  params,
}: {
  params: Promise<{ page: string }>;
}) => {
  const { page } = await params;
  const currentPage = parseInt(page, 10);
  if (currentPage <= 0) {
    redirect(popularMoviesRoute);
  }
  const movies = await fetchPopularMovies(currentPage);

  return (
    <div>
      <SectionHeader title="Movies" />
      <PopularMoviesGrid movies={movies} />
      <Pagination baseRoute={popularMoviesRoute} currentPage={currentPage} />
    </div>
  );
};
export default PopularMoviesPage;
