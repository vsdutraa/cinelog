import { Skeleton } from "@/components/ui/skeleton";

const MovieCardSkeleton = () => {
  return (
    <Skeleton className="aspect-[2/3] h-full w-full overflow-hidden rounded-md transition-all" />
  );
};

export default MovieCardSkeleton;
