import { Movie, Person } from "@/models/types/types";
import MovieDetailsHeader from "@/components/movies/details/header/movie-details-header";
import MovieTagline from "@/components/movies/details/content/movie-tagline";
import MovieOverview from "@/components/movies/details/content/movie-overview";

interface MovieDetailsProps {
  id: string;
  title: string;
  tagline?: string;
  overview: string;
  releaseYear: string;
  directorName?: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  id,
  title,
  tagline,
  overview,
  releaseYear,
  directorName,
}) => {
  return (
    <div className="w-full space-y-4">
      <MovieDetailsHeader
        id={id}
        title={title}
        releaseYear={releaseYear}
        directorName={directorName}
      />

      <div className="space-y-2">
        <MovieTagline tagline={tagline} />
        <MovieOverview overview={overview} />
      </div>
    </div>
  );
};
export default MovieDetails;
