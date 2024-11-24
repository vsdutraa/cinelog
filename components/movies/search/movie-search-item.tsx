import MovieCard from "@/components/movies/movie-card";
import MovieTitle from "@/components/movies/movie-title";
import MovieInfo from "@/components/movies/movie-info";
import MovieAlternativeTitles from "@/components/movies/search/movie-alternative-titles";
import { Separator } from "@/components/ui/separator";

interface MovieSearchItemProps {
  id: string;
  title: string;
  posterPath: string;
  releaseYear: string;
  directorName: string;
  alternativeTitles: any;
}

const MovieSearchItem = ({
  id,
  title,
  posterPath,
  releaseYear,
  directorName,
  alternativeTitles,
}: MovieSearchItemProps) => {
  return (
    <div className="flex space-x-4">
      <div>
        <MovieCard
          id={id}
          title={title}
          posterPath={posterPath}
          className="w-20"
        />
      </div>

      <div className="flex w-full flex-col justify-between">
        <MovieTitle id={id} title={title} size="md" />

        {alternativeTitles && (
          <MovieAlternativeTitles titles={alternativeTitles} />
        )}
        <div className="space-y-2">
          <MovieInfo
            releaseYear={releaseYear}
            directorName={directorName}
            className="text-xs"
          />
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default MovieSearchItem;
