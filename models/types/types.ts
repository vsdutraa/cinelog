export type Movie = {
  id: string;
  title: string;
  release_date: string;
  overview: string;
  tagline?: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  crew: Person[];
  cast: Person[];
  genres: [];
};

export type Person = {
  id: string;
  name: string;
  job?: string;
  character?: string;
};

export type User = {
  id: string;
  username: string;
  email: string;
};
