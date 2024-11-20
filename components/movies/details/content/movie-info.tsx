import { cn } from "@/lib/utils";

interface MovieInfoProps {
  releaseYear: string;
  directorName?: string;
  size?: "lg" | "md" | "sm";
}

const sizeClasses = {
  lg: "text-lg",
  md: "text-md",
  sm: "text-sm",
};

const MovieInfo: React.FC<MovieInfoProps> = ({
  releaseYear,
  directorName,
  size = "lg",
}) => {
  return (
    <div
      className={cn(
        "flex items-center space-x-1.5 text-lg font-light",
        sizeClasses[size],
      )}
    >
      <p>{releaseYear}.</p>
      <p>
        <span className="text-muted-foreground">Directed by </span>{" "}
        {directorName}
      </p>
    </div>
  );
};
export default MovieInfo;
