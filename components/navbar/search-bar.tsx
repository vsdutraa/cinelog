"use client";

import { searchRoute } from "@/routes";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${searchRoute}/${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <div className="flex h-10 w-full max-w-[150px] items-center space-x-2 rounded-lg border px-3.5 py-1.5">
        <Search className="-mr-2 h-5 w-5" />

        <Input
          type="text"
          placeholder="Search..."
          className="h-8 w-full border-0 text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
