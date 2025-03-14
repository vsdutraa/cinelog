import { fetchPopularMovies } from "@/lib/api/tmdb";

import SectionHeader from "@/components/section-header";
import MovieCarousel from "@/components/movies/movie-carousel";
import Link from "next/link";
import { popularMoviesRoute } from "@/routes";

export default async function MovieListPage() {
  const movies = await fetchPopularMovies();

  return (
    <div className="space-y-6">
      <section>
        <SectionHeader title="Popular movies this week">
          <Link href={popularMoviesRoute}>
            <p className="hover:text-primary">More</p>
          </Link>
        </SectionHeader>
        <MovieCarousel movies={movies} />
      </section>
    </div>
  );
}
