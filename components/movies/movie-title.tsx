import { movieDetailRoute } from "@/routes";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MovieTitleProps {
  id: string;
  title: string;
  size?: "lg" | "md";
}

const MovieTitle = ({ id, title, size = "lg" }: MovieTitleProps) => {
  const sizeClasses = {
    lg: "text-2xl md:text-3xl lg:text-4xl",
    md: "text-md md:text-lg lg:text-xl",
  };

  return (
    <Link href={`${movieDetailRoute}/${id}`}>
      <h1
        className={cn(
          "text-pretty font-serif font-black leading-5 tracking-tighter transition-all hover:text-muted-foreground",
          sizeClasses[size],
        )}
      >
        {title}
      </h1>
    </Link>
  );
};

export default MovieTitle;
