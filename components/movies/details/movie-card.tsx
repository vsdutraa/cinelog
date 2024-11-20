import { cn } from "@/lib/utils";
import { Movie } from "@/models/types/types";

interface MovieCardProps {
  movie: Movie;
  variant?: "default" | "list" | "search";
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  variant = "default",
}) => {
  const baseClasses = "rounded-md shadow-lg overflow-hidden aspect-[2/3]";

  const variantStyles = {
    default: "w-full md:w-2/5 lg:w-1/5 mx-auto",
    list: "",
    search: "w-24",
  };

  const movieCardClass = cn(baseClasses, variantStyles[variant]);

  return (
    <div className={movieCardClass}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover rounded-md"
        draggable="false"
      />
    </div>
  );
};

export default MovieCard;
