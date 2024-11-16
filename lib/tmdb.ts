const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (
  endpoint: string,
  params: Record<string, any> = {}
) => {
  try {
    const queryParams = new URLSearchParams({
      ...params,
      language: "en-US",
    });

    const res = await fetch(`${BASE_URL}/${endpoint}?${queryParams}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching movies:", error);
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
