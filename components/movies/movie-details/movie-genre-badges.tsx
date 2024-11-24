import { Badge } from "@/components/ui/badge";

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

export default MovieGenreBadges;
