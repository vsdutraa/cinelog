import { Movie } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MovieCard from "@/components/movies/movie-card";

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel = ({ movies }: MovieCarouselProps) => {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {movies.map((movie: Movie) => (
            <CarouselItem
              key={movie.id}
              className="basis-1/2 pl-1 md:basis-1/5"
            >
              <MovieCard
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex">
          <CarouselPrevious
            variant="ghost"
            className="-left-8 hover:bg-transparent hover:stroke-muted-foreground"
          />

          <CarouselNext
            variant="ghost"
            className="-right-8 hover:bg-transparent hover:stroke-muted-foreground"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default MovieCarousel;
