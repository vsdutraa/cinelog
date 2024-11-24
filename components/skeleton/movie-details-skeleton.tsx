import { Skeleton } from "@/components/ui/skeleton";

const MovieDetailsPageSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      <div className="space-y-2">
        <Skeleton className="aspect-[2/3] h-[2/3] w-full" />
        <div className="flex flex-wrap gap-0.5">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
      </div>

      <div className="space-y-6 md:col-span-2 lg:col-span-3">
        <div className="space-y-3">
          <Skeleton className="h-6 w-2/3 md:h-8 md:w-2/5" />
          <Skeleton className="h-4 w-56" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-2/3 md:w-1/6" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailsPageSkeleton;
