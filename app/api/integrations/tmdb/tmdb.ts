import { Movie, Person } from "@/models/types/types";
import { filterMovies, isMovieComplete } from "./tmdb-utils";

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async (
  page: number = 1,
): Promise<Movie[]> => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch popular movies.");
  }

  const data = await res.json();
  const movies = filterMovies(data.results);

  return movies;
};

export const fetchMovieById = async (movieId: string): Promise<Movie> => {
  if (!movieId) {
    throw new Error("Movie ID is required.");
  }

  const res = await fetch(`${BASE_URL}/movie/${movieId}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
    },
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("Movie not found.");
    }
    throw new Error("Failed to fetch movie data.");
  }

  const movie = await res.json();

  if (!isMovieComplete(movie)) {
    throw new Error("Incomplete movie data.");
  }

  return movie;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  if (!query) {
    throw new Error("Query is required.");
  }

  const res = await fetch(`${BASE_URL}/search/movie?query=${query}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
    },
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error(`No movies found for query: "${query}"`);
    }
    throw new Error(`Failed to search data for query: "${query}"`);
  }

  const data = await res.json();
  const movies = filterMovies(data.results);

  return movies;
};

export const fetchMovieCredits = async (movieId: string): Promise<any> => {
  if (!movieId) {
    throw new Error("Movie ID is required.");
  }

  const res = await fetch(`${BASE_URL}/movie/${movieId}/credits`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch credits for movie ID: ${movieId}`);
  }

  return await res.json();
};

export const fetchMovieDirector = async (movieId: string): Promise<Person> => {
  if (!movieId) {
    throw new Error("Movie ID is required.");
  }

  const credits = await fetchMovieCredits(movieId);

  const director = credits.crew.find(
    (member: any) => member.job === "Director",
  );

  if (!director) {
    throw new Error(`No director found for movie ID: ${movieId}`);
  }

  return director;
};

export const enrichMoviesWithDirector = async (
  movies: Movie[],
): Promise<(Movie & { directorName?: string })[]> => {
  return await Promise.all(
    movies.map(async (movie) => {
      try {
        const director = await fetchMovieDirector(movie.id);
        return { ...movie, directorName: director?.name || "Unknown" };
      } catch (error) {
        console.error(
          `Error fetching director for movie ID ${movie.id}:`,
          error,
        );
        return { ...movie, directorName: "Unknown" };
      }
    }),
  );
};
