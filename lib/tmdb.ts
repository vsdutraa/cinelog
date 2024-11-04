const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (endpoint: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${endpoint}?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
};
