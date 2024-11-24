import {
  fetchOptions,
  Movie,
  Person,
  AlternativeTitle,
  Credits,
} from "@/types";
import { fetchMovieAlternativeTitles, fetchMovieCredits } from "@/lib/api/tmdb";

export const isMovieComplete = (movie: Movie): boolean => {
  return (
    !!movie.title &&
    !!movie.release_date &&
    !!movie.overview &&
    !!movie.vote_average &&
    !!movie.poster_path &&
    !!movie.backdrop_path
  );
};

export const enrichMovies = async (
  movies: Movie[],
  { credits = false, alternativeTitles = false }: fetchOptions,
): Promise<Movie[]> => {
  const enrichedMovies = await Promise.all(
    movies.map(async (movie) => {
      let enrichedMovie = { ...movie };

      if (credits) {
        const creditsData = await fetchMovieCredits(movie.id);
        enrichedMovie = { ...enrichedMovie, credits: creditsData };
      }
      if (alternativeTitles) {
        const alternativeTitlesData = await fetchMovieAlternativeTitles(
          movie.id,
        );

        enrichedMovie = {
          ...enrichedMovie,
          alternative_titles: alternativeTitlesData,
        };
      }

      return enrichedMovie;
    }),
  );

  return enrichedMovies;
};

export function formatAlternativeTitles(data: {
  titles: AlternativeTitle[];
}): string {
  return data.titles.map((title) => title.title).join(", ");
}

export function filterMovies(movies: Movie[]): Movie[] {
  return movies.filter(isMovieComplete);
}

export const filterDirector = (credits: Credits): Person => {
  const director = credits.crew.find(
    (member: Person) => member.job === "Director",
  );
  if (!director) {
    throw new Error("Director not found");
  }
  return director;
};
