import { Movie } from "@/models/types/types";

interface Movie {
  movie: Movie;
}

const MovieCard = ({ movie }) => {
  return (
    <div className="w-full md:w-1/5 mx-auto shadow-md">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-md shadow-lg"
        draggable="false"
      />
    </div>
  );
};
export default MovieCard;
