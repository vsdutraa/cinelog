export type Movie = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
};
