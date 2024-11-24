import { Skeleton } from "@/components/ui/skeleton";

interface MovieSynopsisProps {
  tagline?: string;
  overview: string;
}

const MovieSynopsis = ({ tagline, overview }: MovieSynopsisProps) => {
  return (
    <div className="flex flex-col gap-2">
      {tagline && <p className="text-sm font-bold uppercase">{tagline}</p>}
      <p className="text-pretty font-serif leading-6 tracking-tight">
        {overview}
      </p>
    </div>
  );
};

const MovieSynopsisSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-2/3 md:w-1/6" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
};

export { MovieSynopsis, MovieSynopsisSkeleton };
