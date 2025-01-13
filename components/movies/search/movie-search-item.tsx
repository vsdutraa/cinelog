import MovieCard from "@/components/movies/movie-card";
import MovieTitle from "@/components/movies/movie-title";
import MovieAlternativeTitles from "@/components/movies/search/movie-alternative-titles";

interface MovieSearchItemProps {
  id: string;
  title: string;
  posterPath: string;
  alternativeTitles?: string;
  releaseDate: string;
  directorName?: string;
}

const MovieSearchItem = ({
  id,
  title,
  posterPath,
  alternativeTitles,
  releaseDate,
  directorName,
}: MovieSearchItemProps) => {
  return (
    <div className="flex space-x-4">
      <div className="w-32">
        <MovieCard id={id} title={title} posterPath={posterPath} />
      </div>

      <div className="flex w-full flex-col justify-between space-y-6">
        <MovieTitle id={id} title={title} size="md" />

        <MovieAlternativeTitles titles={alternativeTitles} />

        <div>
          <div className="flex items-center space-x-1.5 text-xs font-light">
            <p>{releaseDate.slice(0, 4)}.</p>
            {directorName && (
              <p>
                <span className="text-muted-foreground">Directed by </span>{" "}
                {directorName}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchItem;
