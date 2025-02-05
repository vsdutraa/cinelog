interface MoviePosterProps {
  title: string;
  backdropPath: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ title, backdropPath }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
      alt={title}
      className="rounded-md"
    />
  );
};

export default MoviePoster;
