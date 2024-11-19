export type Movie = {
  id: string;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
};

export type Director = {
  name: string;
};

export type User = {
  id: string;
  username: string;
  email: string;
};
