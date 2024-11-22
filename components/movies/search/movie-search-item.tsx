import Link from "next/link";
import { Movie, Person } from "@/models/types/types";
import { MovieCard } from "@/components/movies/movie-card";
import {
  MovieTitle,
  MovieTitleSkeleton,
} from "@/components/movies/movie-title";
import { MovieInfo } from "@/components/movies/details/movie-info";

interface MovieSearchItemProps {
  id: string;
  title: string;
  posterPath: string;
  releaseYear: string;
  directorName?: string;
}

const MovieSearchItem: React.FC<MovieSearchItemProps> = ({
  id,
  title,
  posterPath,
  releaseYear,
  directorName,
}) => {
  return (
    <div key={id} className="flex justify-between space-x-4">
      {/* left side */}
      <MovieCard
        id={id}
        title={title}
        posterPath={posterPath}
        className="w-24 rounded-none"
      />

      {/* right side */}
      <div className="pb- flex w-full flex-col justify-between">
        <div className="flex items-center space-x-2">
          <MovieTitle id={id} title={title} size="md" />
        </div>
        <MovieInfo
          releaseYear={releaseYear}
          directorName={directorName}
          className="text-sm"
        />
      </div>
    </div>
  );
};

export default MovieSearchItem;
