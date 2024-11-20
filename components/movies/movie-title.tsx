import Link from "next/link";

import { cn } from "@/lib/utils";
import { Movie } from "@/models/types/types";

interface MovieTitleProps {
  id: string;
  title: string;
  size?: "lg" | "md";
  className?: string;
}

const baseClasses =
  "font-serif font-black tracking-tighter leading-5 text-pretty";

const sizeClasses = {
  lg: "text-2xl md:text-3xl lg:text-4xl",
  md: "text-md md:text-lg lg:text-xl",
};

const MovieTitle: React.FC<MovieTitleProps> = ({
  id,
  title,
  size = "lg",
  className,
}) => {
  return (
    <Link href={`/movies/${id}`}>
      <h1 className={cn(sizeClasses[size], baseClasses, className)}>{title}</h1>
    </Link>
  );
};
export default MovieTitle;
