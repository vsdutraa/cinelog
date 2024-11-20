import { Movie, Person } from "@/models/types/types";
import MovieTitle from "@/components/movies/movie-title";
import MovieInfo from "@/components/movies/details/content/movie-info";

interface MovieTitleProps {
  id: string;
  title: string;
  releaseYear: string;
  directorName?: string;
}

const MovieDetailsHeader: React.FC<MovieTitleProps> = ({
  id,
  title,
  releaseYear,
  directorName,
}) => {
  return (
    <div className="space-y-2 md:space-y-0">
      <MovieTitle id={id} title={title} />
      <MovieInfo releaseYear={releaseYear} directorName={directorName} />
    </div>
  );
};
export default MovieDetailsHeader;
