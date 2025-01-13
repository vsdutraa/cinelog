import { movieDetailRoute } from "@/routes";
import Link from "next/link";

interface MovieCardProps {
  id: string;
  title: string;
  posterPath: string;
}

const MovieCard = ({ id, title, posterPath }: MovieCardProps) => {
  return (
    <div className="aspect-[2/3] overflow-hidden rounded-md transition-all">
      <Link href={`${movieDetailRoute}/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          draggable="false"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
