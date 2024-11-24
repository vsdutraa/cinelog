import Link from "next/link";
import { cn } from "@/lib/utils";

interface MovieCardProps {
  id: string;
  title: string;
  posterPath: string;
  className?: string;
}

const MovieCard = ({ id, title, posterPath, className }: MovieCardProps) => {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-md transition-all",
        className,
      )}
    >
      <Link href={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="h-full w-full transition-transform duration-500 hover:scale-105"
          draggable="false"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
