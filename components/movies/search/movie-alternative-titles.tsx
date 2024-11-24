"use client";
import { X } from "lucide-react";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MovieAlternativeTitlesProps {
  titles: string;
  maxLength?: number;
}

const MovieAlternativeTitles = ({
  titles,
  maxLength = 100,
}: MovieAlternativeTitlesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = titles.length > maxLength;
  const displayTitles = isExpanded ? titles : titles.slice(0, maxLength);

  return (
    <div className="flex items-center">
      <p className="text-pretty text-xs text-muted-foreground">
        <span>Alternative titles: </span>
        {displayTitles}
        {shouldTruncate && (
          <button
            className="text-black underline-offset-4 hover:underline dark:text-white"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <span className="ml-2 font-light">Show less</span>
            ) : (
              <span className="text-primary">...</span>
            )}
          </button>
        )}
      </p>
    </div>
  );
};

export default MovieAlternativeTitles;
