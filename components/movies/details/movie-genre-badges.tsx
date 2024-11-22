import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface MovieGenreBadgesProps {
  genres: [{ id: string; name: string }];
}

const MovieGenreBadges = ({ genres }: MovieGenreBadgesProps) => {
  return (
    <div className="flex flex-wrap gap-1">
      {genres.map((genre) => (
        <Badge key={genre.id}>{genre.name}</Badge>
      ))}
    </div>
  );
};

const MovieGenreBadgesSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-0.5">
      <Skeleton className="h-5 w-16 rounded-full" />
      <Skeleton className="h-5 w-20 rounded-full" />
      <Skeleton className="h-5 w-16 rounded-full" />
    </div>
  );
};

export { MovieGenreBadges, MovieGenreBadgesSkeleton };
