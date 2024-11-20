interface MovieOverviewProps {
  overview: string;
}

const MovieOverview: React.FC<MovieOverviewProps> = ({ overview }) => {
  return (
    <p className="text-pretty font-serif leading-6 tracking-tight">
      {overview}
    </p>
  );
};
export default MovieOverview;
