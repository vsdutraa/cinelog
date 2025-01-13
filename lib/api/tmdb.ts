import {
  fetchOptions,
  Movie,
  Person,
  Credits,
  AlternativeTitles,
} from "@/types";
import { filterMovies, enrichMovie } from "@/lib/api/tmdb-utils";

const TMDB_API_URL = "https://api.themoviedb.org/3";

async function tmdbFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${TMDB_API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
    // cache for 1 hour
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`TMDB API fetch error: ${res.statusText}`);
  }

  return res.json();
}

export const fetchPopularMovies = async (
  page: number = 1,
  options: fetchOptions = {},
): Promise<Movie[]> => {
  const data = await tmdbFetch<{ results: Movie[] }>(
    `/movie/popular?language=en-US&page=${page}`,
  );
  const movies = filterMovies(data.results);
  return Promise.all(movies.map((movie) => enrichMovie(movie, options)));
};

export const fetchMovieById = async (
  movieId: string,
  options: fetchOptions = {},
): Promise<Movie> => {
  const movie = await tmdbFetch<Movie>(`/movie/${movieId}?language=en-US`);
  return enrichMovie(movie, options);
};

export const searchMovies = async (
  query: string,
  options: fetchOptions = {},
): Promise<Movie[]> => {
  const data = await tmdbFetch<{ results: Movie[] }>(
    `/search/movie?query=${encodeURIComponent(query)}&language=en-US`,
  );
  const movies = filterMovies(data.results);
  return Promise.all(movies.map((movie) => enrichMovie(movie, options)));
};

export async function fetchMovieCredits(movieId: string): Promise<Credits> {
  return tmdbFetch<Credits>(`/movie/${movieId}/credits`);
}

export async function fetchMovieAlternativeTitles(
  movieId: string,
): Promise<AlternativeTitles> {
  return tmdbFetch<AlternativeTitles>(`/movie/${movieId}/alternative_titles`);
}
