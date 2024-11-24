export type fetchOptions = {
  credits?: boolean;
  alternativeTitles?: boolean;
};

export type Movie = {
  id: string;
  title: string;
  release_date: string;
  overview: string;
  tagline?: string;
  genres: [{ id: string; name: string }];
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  credits?: Credits;
  alternative_titles?: string;
};

export type Person = {
  id: string;
  name: string;
  job?: string;
  character?: string;
};

export type Credits = {
  cast: Person[];
  crew: Person[];
};

export type AlternativeTitle = {
  iso_3166_1: string;
  title: string;
};
