/**
 * Configuration options for the fetch function
 * @type {Object} fetchOptions
 */
export type fetchOptions = {
  credits?: boolean;
  alternativeTitles?: boolean;
};

/**
 * A desconstructed movie object from the TMDB API
 * @type {Object} Movie
 */
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
  director?: Person;
  alternative_titles?: string;
};

/**
 * A desconstructed person object from the TMDB API
 * @type {Object} Person
 */
export type Person = {
  id: string;
  name: string;
  job?: string;
  character?: string;
};

/**
 * A desconstructed credits object from the TMDB API
 * @type {Object} Credits
 */
export type Credits = {
  cast: Person[];
  crew: Person[];
};

/**
 * A alternative titles object from the TMDB API
 * @type {Object} AlternativeTitles
 */
export type AlternativeTitles = {
  id: string;
  titles: [
    {
      iso_3166_1: string;
      title: string;
      type: string;
    },
  ];
};
