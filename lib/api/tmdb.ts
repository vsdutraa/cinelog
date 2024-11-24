import { fetchOptions, Movie, Person } from "@/types";
import {
  enrichMovies,
  filterMovies,
  formatAlternativeTitles,
  isMovieComplete,
} from "@/lib/api/tmdb-utils";

const TMDB_API_URL = "https://api.themoviedb.org/3";

async function tmdbFetch(endpoint: string) {
  const res = await fetch(`${TMDB_API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`TMDB API fetch error: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}

export const fetchPopularMovies = async (
  page: number = 1,
  { credits = false, alternativeTitles = false }: fetchOptions = {},
): Promise<Movie[]> => {
  const data = await tmdbFetch(`/movie/popular?language=en-US&page=${page}`);
  const movies = filterMovies(data.results);

  if (credits || alternativeTitles) {
    return enrichMovies(movies, { credits, alternativeTitles });
  }

  return movies;
};

export const fetchMovieById = async (
  movieId: string,
  { credits = false, alternativeTitles = false }: fetchOptions = {},
): Promise<Movie> => {
  const [movieData, creditsData, alternativeTitlesData] = await Promise.all([
    tmdbFetch(`/movie/${movieId}`),
    credits ? fetchMovieCredits(movieId) : Promise.resolve(null),
    alternativeTitles
      ? fetchMovieAlternativeTitles(movieId)
      : Promise.resolve(null),
  ]);

  if (!isMovieComplete(movieData)) {
    throw new Error("Incomplete movie data.");
  }

  return {
    ...movieData,
    ...(credits && { credits: creditsData }),
    ...(alternativeTitles && { alternative_titles: alternativeTitlesData }),
  };
};

export const searchMovies = async (
  query: string,
  { credits = false, alternativeTitles = false }: fetchOptions = {},
): Promise<Movie[]> => {
  const data = await tmdbFetch(`/search/movie?query=${query}`);
  const movies = filterMovies(data.results);

  if (credits || alternativeTitles) {
    return enrichMovies(movies, { credits, alternativeTitles });
  }

  return movies;
};

export const fetchMovieCredits = async (movieId: string): Promise<any> => {
  return await tmdbFetch(`/movie/${movieId}/credits`);
};

export const fetchMovieAlternativeTitles = async (
  movieId: string,
): Promise<string> => {
  const alternativeTitles = await tmdbFetch(
    `/movie/${movieId}/alternative_titles`,
  );
  return formatAlternativeTitles(alternativeTitles);
};
