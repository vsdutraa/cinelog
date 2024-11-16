import { Movie } from "@/lib/types";

const MoviePoster = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] mb-4">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
        draggable="false"
      />
    </div>
  );
};

export default MoviePoster;
