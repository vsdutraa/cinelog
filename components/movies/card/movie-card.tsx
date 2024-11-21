import Link from "next/link";
import { cn } from "@/lib/utils";

interface MovieCardProps {
  id: string;
  title: string;
  posterPath: string;
  className?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  posterPath,
  className,
}) => {
  const baseClasses =
    "aspect-[2/3] w-full overflow-hidden rounded-md transition-all";

  return (
    <div className={cn(baseClasses, className)}>
      <Link href={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="h-full w-full object-cover"
          draggable="false"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
