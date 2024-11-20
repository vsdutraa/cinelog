interface MovieTaglineProps {
  tagline?: string;
}

const MovieTagline: React.FC<MovieTaglineProps> = ({ tagline }) => {
  return (
    <div>
      {tagline && <p className="text-sm font-bold uppercase">{tagline}</p>}
    </div>
  );
};
export default MovieTagline;
