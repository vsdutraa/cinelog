"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      redirect(`/movies/${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <div className="flex items-center w-full max-w-[150px] space-x-2 rounded-lg border px-3.5 py-1.5 h-10">
        <Search className="w-5 h-5 -mr-2" />

        <Input
          type="text"
          placeholder="Search"
          className="w-full border-0 focus-visible:ring-transparent h-8 font-semibold"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
}
