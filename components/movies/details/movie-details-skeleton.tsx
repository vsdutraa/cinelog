import { MovieCardSkeleton } from "@/components/movies/movie-card";
import { MovieGenreBadgesSkeleton } from "@/components/movies/details/movie-genre-badges";
import { MovieTitleSkeleton } from "@/components/movies/movie-title";
import { MovieSynopsisSkeleton } from "@/components/movies/details/movie-synopsis";
import { MovieInfoSkeleton } from "@/components/movies/details/movie-info";

const MovieDetailsPageSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      <div className="space-y-2">
        <MovieCardSkeleton />
        <MovieGenreBadgesSkeleton />
      </div>

      <div className="space-y-6 md:col-span-2 lg:col-span-3">
        <div className="space-y-3">
          <MovieTitleSkeleton />
          <MovieInfoSkeleton />
        </div>

        <MovieSynopsisSkeleton />
      </div>
    </div>
  );
};
export default MovieDetailsPageSkeleton;
