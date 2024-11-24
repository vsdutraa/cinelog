"use client";

import { useState } from "react";
import { Credits } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExpandablePeopleList } from "./expandable-people-list";

interface CastCrewSectionProps {
  credits: Credits;
}

export function CastCrewSection({ credits }: CastCrewSectionProps) {
  const { cast, crew } = credits;
  const [showCharacters, setShowCharacters] = useState(false);

  return (
    <Tabs defaultValue="cast" className="w-full">
      <TabsList className="h-auto w-full justify-start rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value="cast"
          className={
            "rounded-none border-b-2 border-transparent px-4 py-2 text-xs font-medium uppercase data-[state=active]:border-primary data-[state=active]:bg-transparent"
          }
        >
          Cast
        </TabsTrigger>
        <TabsTrigger
          value="crew"
          className={
            "rounded-none border-b-2 border-transparent px-4 py-2 text-xs font-medium uppercase data-[state=active]:border-primary data-[state=active]:bg-transparent"
          }
        >
          Crew
        </TabsTrigger>
      </TabsList>

      <TabsContent value="cast" className="mt-4">
        <ExpandablePeopleList
          people={cast}
          type="cast"
          showRoles={showCharacters}
        />
      </TabsContent>
      <TabsContent value="crew" className="mt-4">
        <ExpandablePeopleList people={crew} type="crew" showRoles={true} />
      </TabsContent>
    </Tabs>
  );
}
