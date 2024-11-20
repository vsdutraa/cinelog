import Link from "next/link";
import { Movie, Person } from "@/models/types/types";
import MovieCard from "@/components/movies/movie-card";
import MovieTitle from "@/components/movies/movie-title";

interface MovieSearchItemProps {
  movie: Movie;
}

const MovieSearchItem: React.FC<MovieSearchItemProps> = ({ movie }) => {
  const director = movie.crew?.find(
    (person: Person) => person.job === "Director",
  );

  return (
    <div key={`${movie.id}`} className="flex justify-between space-x-4">
      {/* left side */}
      <MovieCard movie={movie} className="w-24" />

      {/* right side */}
      <div className="flex w-full flex-col justify-between">
        <MovieTitle movie={movie} size="md" />
        {director && (
          <p className="font-light">
            <span className="text-muted-foreground">Directed by</span>{" "}
            {director.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieSearchItem;
