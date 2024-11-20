import Link from "next/link";
import { Movie, Person } from "@/models/types/types";
import MovieCard from "./details/movie-card";

interface MovieSearchItemProps {
  movie: Movie;
}

const MovieSearchItem: React.FC<MovieSearchItemProps> = ({ movie }) => {
  const director = movie.crew?.find(
    (person: Person) => person.job === "Director"
  );

  return (
    <li>
      <Link href={`/movies/${movie.id}`} key={`${movie.id}`}>
        <div className="flex items-center space-x-4">
          {/* left side */}
          <MovieCard variant="search" movie={movie} />

          {/* right side */}
          <div className="w-full flex flex-col">
            <div className="flex items-end">
              <p className="text-xl font-bold">
                {movie.title}{" "}
                <span className="text-muted-foreground text-sm font-light ml-1">
                  {movie.release_date?.slice(0, 4)}
                </span>
              </p>
            </div>

            <p>Directed by {director?.name}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MovieSearchItem;
