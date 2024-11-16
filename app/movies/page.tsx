import MoviesList from "@/components/movies/movies-list";

export default function MoviesPage() {
  return (
    <div className="mt-6">
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-6">Popular Movies</h1>
        <MoviesList />
      </div>
    </div>
  );
}
