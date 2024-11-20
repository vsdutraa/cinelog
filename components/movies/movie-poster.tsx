import { Movie } from "@/models/types/types";

interface MoviePosterProps {
  title: string;
  backdropPath: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ title, backdropPath }) => {
  return (
    <div className="relative h-[400px] w-full md:h-[600px]">
      <img
        src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
        alt={title}
        className="h-full w-full rounded-md object-cover"
        draggable="false"
      />
    </div>
  );
};

export default MoviePoster;
