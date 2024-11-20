interface MovieInfoProps {
  releaseYear: string;
  directorName?: string;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ releaseYear, directorName }) => {
  return (
    <div className="flex items-center space-x-1.5 text-lg font-light">
      <p>{releaseYear}.</p>
      <p>
        <span className="text-muted-foreground">Directed by </span>{" "}
        {directorName}
      </p>
    </div>
  );
};
export default MovieInfo;
