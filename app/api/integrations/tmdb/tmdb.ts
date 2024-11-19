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
      throw new Error(`Failed to fetch popular movies: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return null;
  }
};

export const fetchMovieById = async (id: string | number) => {
  try {
    const res = await fetch(`${BASE_URL}/movie/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch movie with ID ${id}: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching movie by ID (${id}):`, error);
    return null;
  }
};

export const searchMovies = async (query: string) => {
  if (!query) return [];

  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log("Error searching movies:", error);
    return [];
  }
};

export const fetchMovieDirector = async (id: string | number) => {
  try {
    const res = await fetch(`${BASE_URL}/movie/${id}/credits`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch credits for movie ID ${id}: ${res.status}`
      );
    }

    const data = await res.json();
    const director = data.crew.find((person: any) => person.job === "Director");
    return director ? director.name : "Unknown Director";
  } catch (error) {
    console.error("Error fetching movie director:", error);
    return null;
  }
};
