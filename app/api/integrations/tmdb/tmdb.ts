import { NextResponse } from "next/server";
import {
  addCreditsToMovie,
  addCreditsToMovies,
  filterMovies,
  isMovieComplete,
} from "./tmdb-utils";

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async (page: number = 1) => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/popular?language=en-US&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { message: "Failed to fetch popular movies." },
        { status: res.status }
      );
    }

    const data = await res.json();
    const movies = data.results;
    const filteredMovies = filterMovies(movies);
    const moviesWithCredits = await addCreditsToMovies(filteredMovies);

    return NextResponse.json(moviesWithCredits, { status: 200 });
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
};

export const fetchMovieById = async (id: string) => {
  try {
    if (!id) {
      return NextResponse.json({ message: "ID is required." }, { status: 400 });
    }

    const res = await fetch(`${BASE_URL}/movie/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: "Movie not found." },
        { status: 404 }
      );
    }

    const movie = await res.json();

    if (!isMovieComplete(movie)) {
      return NextResponse.json(
        { message: "Movie not found." },
        { status: 404 }
      );
    }

    const movieWithCredits = await addCreditsToMovie(movie);

    return NextResponse.json(movieWithCredits, { status: 200 });
  } catch (error) {
    console.error(`Error fetching movie by ID (${id}):`, error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
};

export const searchMovies = async (query: string) => {
  try {
    if (!query) {
      return NextResponse.json(
        { message: "Query is required." },
        { status: 400 }
      );
    }

    const res = await fetch(`${BASE_URL}/search/movie?query=${query}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: `Failed to search data for: ${query}` },
        { status: 400 }
      );
    }

    const data = await res.json();
    const movies = data.results;

    const filteredMovies = filterMovies(movies);
    const moviesWithCredits = await addCreditsToMovies(filteredMovies);

    return NextResponse.json(moviesWithCredits, { status: 200 });
  } catch (error) {
    console.error("Error searching movies:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
};

export const fetchMovieCredits = async (id: string) => {
  try {
    if (!id) {
      return NextResponse.json({ message: "ID is required." }, { status: 400 });
    }

    const res = await fetch(`${BASE_URL}/movie/${id}/credits`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: `Failed to fetch credits for movie ID: ${id}` },
        { status: res.status }
      );
    }

    const credits = await res.json();

    return NextResponse.json(credits, { status: 200 });
  } catch (error) {
    console.error("Error searching for director:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
};
