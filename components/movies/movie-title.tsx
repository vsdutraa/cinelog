import Link from "next/link";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface MovieTitleProps {
  id: string;
  title: string;
  size?: "lg" | "md";
  className?: string;
}

const MovieTitle = ({ id, title, size = "lg", className }: MovieTitleProps) => {
  const sizeClasses = {
    lg: "text-2xl md:text-3xl lg:text-4xl",
    md: "text-md md:text-lg lg:text-xl",
  };

  return (
    <Link href={`/movies/${id}`}>
      <h1
        className={cn(
          "text-pretty font-serif font-black leading-5 tracking-tighter",
          sizeClasses[size],
          className,
        )}
      >
        {title}
      </h1>
    </Link>
  );
};

const MovieTitleSkeleton = ({ size = "lg" }: { size?: "lg" | "md" }) => {
  const sizeClasses = {
    lg: "h-6 w-2/3 md:w-2/5 md:h-8",
    md: "h-4 w-32 md:w-40 md:h-5",
  };

  return <Skeleton className={sizeClasses[size]} />;
};

export { MovieTitle, MovieTitleSkeleton };
