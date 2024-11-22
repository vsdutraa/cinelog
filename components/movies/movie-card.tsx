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
        "aspect-[2/3] w-full overflow-hidden rounded-md transition-all",
        className,
      )}
    >
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

import { Skeleton } from "@/components/ui/skeleton";

const MovieCardSkeleton = () => {
  return (
    <Skeleton className="aspect-[2/3] h-[2/3] w-full overflow-hidden rounded-md transition-all" />
  );
};

export { MovieCard, MovieCardSkeleton };
