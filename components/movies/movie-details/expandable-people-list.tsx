import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PersonCard } from "@/components/movies/movie-details/person-card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Person } from "@/types";

interface ExpandablePeopleListProps {
  people: Person[];
  type: "cast" | "crew";
  showRoles: boolean;
}

export function ExpandablePeopleList({
  people,
  type,
  showRoles,
}: ExpandablePeopleListProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedPeople = showAll ? people : people.slice(0, 10);

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {displayedPeople.map((person, i) => (
          <PersonCard
            key={`${person.id}${i}`}
            name={person.name}
            role={type === "cast" ? person.character : person.job}
            showRole={showRoles}
          />
        ))}
      </div>
      {people.length > 10 && (
        <div className="flex w-full justify-start">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
