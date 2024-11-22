import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface MovieInfoProps {
  releaseYear: string;
  directorName?: string;
  className?: string;
}

const MovieInfo = ({
  releaseYear,
  directorName,
  className,
}: MovieInfoProps) => {
  return (
    <div
      className={cn(
        "flex items-center space-x-1.5 text-lg font-light",
        className,
      )}
    >
      <p>{releaseYear}.</p>
      <p>
        <span className="text-muted-foreground">Directed by </span>{" "}
        {directorName}
      </p>
    </div>
  );
};

const MovieInfoSkeleton = () => {
  return (
    <div className="flex items-center space-x-1.5 text-lg font-light">
      <Skeleton className="h-4 w-56" />
    </div>
  );
};

export { MovieInfo, MovieInfoSkeleton };
