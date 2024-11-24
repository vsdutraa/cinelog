import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const Loading = () => {
  return (
    <div className="space-y-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="flex space-x-4">
          <div>
            <Skeleton className="aspect-[2/3] h-[2/3] w-20" />
          </div>

          <div className="flex w-full flex-col justify-between space-y-3">
            <Skeleton className="h-4 w-32 md:h-5 md:w-40" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-full md:w-1/3" />
              <Skeleton className="h-3 w-full md:w-1/3" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-3 w-44 md:w-40" />
              <Separator />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Loading;
