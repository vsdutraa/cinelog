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
    <div>
      <MovieTitle id={id} title={title} />
      <MovieInfo releaseYear={releaseYear} directorName={directorName} />
    </div>
  );
};
export default MovieDetailsHeader;
