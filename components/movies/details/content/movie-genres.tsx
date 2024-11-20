import { Badge } from "@/components/ui/badge";

interface MovieGenreBadgesProps {
  genres: string[];
}

const MovieGenreBadges: React.FC<MovieGenreBadgesProps> = ({ genres }) => {
  //   genres = [...genres, "Crazy", "Unbelievable", "Whimsical", "Funny"];

  return (
    <div className="flex flex-wrap gap-1">
      {genres.map((genre, i) => (
        <Badge key={i}>{genre}</Badge>
      ))}
    </div>
  );
};
export default MovieGenreBadges;
