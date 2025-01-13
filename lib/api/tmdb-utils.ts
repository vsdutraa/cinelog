import {
  Movie,
  Credits,
  Person,
  AlternativeTitles,
  fetchOptions,
} from "@/types";
import { fetchMovieCredits, fetchMovieAlternativeTitles } from "./tmdb";

export function filterMovies(movies: Movie[]): Movie[] {
  return movies.filter(
    (movie) => movie.poster_path && movie.release_date && movie.overview,
  );
}

export function filterDirector(credits: Credits): Person | undefined {
  if (!credits) throw new Error("Credits must be provided");
  const director = credits.crew.find((person) => person.job === "Director");
  if (!director) return { id: "0", name: "Unknown" };
  return director;
}

export function formatAlternativeTitles(data: AlternativeTitles): string {
  if (!data) throw new Error("Alternative titles must be provided");
  const titles = data.titles.map((item) => item.title);
  return titles.join(", ");
}

export async function enrichMovie(
  movie: Movie,
  options: fetchOptions,
): Promise<Movie> {
  const enrichedMovie = { ...movie };

  if (options.credits) {
    const credits = await fetchMovieCredits(movie.id);
    enrichedMovie.credits = credits;
    enrichedMovie.director = filterDirector(credits);
  }

  if (options.alternativeTitles) {
    const alternativeTitles = await fetchMovieAlternativeTitles(movie.id);
    enrichedMovie.alternative_titles =
      formatAlternativeTitles(alternativeTitles);
  }

  return enrichedMovie;
}
