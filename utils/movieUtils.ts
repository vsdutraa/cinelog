import { Movie, Person } from "@/models/types/types";

export const getReleaseYear = (releaseDate: string) => {
  const releaseYear = releaseDate.slice(0, 4);
  return releaseYear;
};

export const getDirectorName = (crew: Person[]) => {
  const director = crew?.find((person: Person) => person.job === "Director");
  const directorName = director?.name || "Unknown";
  return directorName;
};
