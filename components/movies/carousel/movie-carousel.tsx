"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { Movie } from "@/models/types/types";
import MovieCard from "@/components/movies/movie-card";

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  return (
    <Swiper
      modules={[Mousewheel]}
      spaceBetween={5}
      mousewheel={true}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 5 },
        1024: { slidesPerView: 6 },
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieCarousel;
