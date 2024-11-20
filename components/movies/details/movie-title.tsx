import { Movie, Person } from "@/models/types/types";

interface MovieTitleProps {
  movie: Movie;
  // director: Contributor;
}

const MovieTitle: React.FC<MovieTitleProps> = ({ movie }) => {
  const director = movie.crew?.find(
    (person: Person) => person.job === "Director"
  );

  console.log(movie);

  return (
    <div className="md:flex items-end md:space-x-3">
      <h1 className="text-2xl md:text-3xl font-serif font-black text-shadow">
        {movie.title}
      </h1>
      <div className="flex items-end space-x-3">
        <p className="text-lg md:text-xl">{movie.release_date?.slice(0, 4)}</p>
        <p className="text-lg md:text-xl">
          <span className="text-neutral-600 font-light">Directed by</span>{" "}
          {director?.name}
        </p>
      </div>
    </div>
  );
};
export default MovieTitle;
