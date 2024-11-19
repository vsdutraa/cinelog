import Link from "next/link";
import { Movie } from "@/models/types/types";

interface MovieSearchItemProps {
  movie: Movie;
}

const MovieSearchItem: React.FC<MovieSearchItemProps> = ({ movie }) => {
  return (
    <li>
      <Link href={`/movies/${movie.id}`} key={`${movie.id}`}>
        <div className="flex items-center space-x-4">
          {/* poster */}
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="w-16 h-24 object-cover"
            draggable="false"
          />
          {/* title and release date */}
          <div>
            <h2 className="text-lg font-medium">
              {movie.title}
              <span className="text-sm text-neutral-500 ml-2">
                {movie.release_date?.slice(0, 4)}
              </span>
            </h2>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MovieSearchItem;
