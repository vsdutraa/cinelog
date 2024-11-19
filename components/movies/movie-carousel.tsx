"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { Movie } from "@/models/types/types";

const MovieCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div>
      {movies && (
        <Swiper
          modules={[Mousewheel]}
          spaceBetween={5}
          mousewheel={true}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <div className="rounded-sm shadow-md">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-auto rounded"
                    draggable="false"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default MovieCarousel;
