import { fetchPopularMovies } from "@/lib/api/tmdb";
import MoviePoster from "@/components/movies/movie-poster";
import SectionHeader from "@/components/section-header";
import MovieCarousel from "@/components/movies/movie-carousel";
import Link from "next/link";
import { popularMoviesRoute } from "@/routes";

const Dashboard = async () => {
  const movies = await fetchPopularMovies();
  const mostPopularMovie = movies[0];

  return (
    <div className="space-y-2 md:space-y-4">
      <section>
        <MoviePoster
          title={mostPopularMovie.title}
          backdropPath={mostPopularMovie.backdrop_path}
        />
      </section>

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
};

export default Dashboard;
