import { Movie, Director } from "@/models/types/types";

interface MovieTitleProps {
  movie: Movie;
  director: Director;
}

const MovieTitle: React.FC<MovieTitleProps> = ({ movie, director }) => {
  return (
    <div className="md:flex items-end md:space-x-3 mb-4">
      <h1 className="text-2xl md:text-3xl font-serif font-black text-shadow">
        {movie.title}
      </h1>
      <div className="flex items-end space-x-2">
        <p className="text-lg md:text-xl">{movie.release_date?.slice(0, 4)}</p>
        <p className="text-lg md:text-xl">
          <span className="text-neutral-600 font-light">Directed by</span>{" "}
          {director.name}
        </p>
      </div>
    </div>
  );
};
export default MovieTitle;
