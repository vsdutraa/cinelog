// import MovieActions from "@/components/movies/actions/movie-actions";
"use client";

import { useEffect } from "react";
import { fetchMovieById } from "../api/integrations/tmdb/tmdb";

const TestPage = () => {
  useEffect(() => {
    const load = async () => {
      const res = await fetchMovieById("912649");
      const data = await res.json();
      console.log(data);
    };
    load();
  }, []);

  return <div>{/* <MovieActions /> */}</div>;
};
export default TestPage;
