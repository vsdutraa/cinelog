// components/SearchBar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { searchMovies } from "@/lib/tmdb";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 2) {
      const data = await searchMovies(searchQuery);
      setResults(data?.results || []);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-60 md:w-80">
      <Input
        type="text"
        placeholder="Search movies..."
        className="w-full"
        value={query}
        onChange={handleSearch}
      />
      <Search className="absolute right-2 top-2 text-gray-400" />

      {/* Condicional para exibir o DropdownMenuContent */}
      {query.length > 2 && results.length > 0 && (
        <DropdownMenu>
          <DropdownMenuContent
            align="start"
            className="absolute w-full max-h-64 overflow-y-auto mt-2 bg-white shadow-lg rounded-md"
          >
            {results.map((movie) => (
              <DropdownMenuItem key={movie.id} asChild>
                <Link
                  href={`/movies/${movie.id}`}
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                >
                  {movie.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default SearchBar;
