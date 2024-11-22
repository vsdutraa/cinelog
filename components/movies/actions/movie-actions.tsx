"use client";
import { useSession } from "next-auth/react";

import { Eye, Heart, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ActionButton from "@/components/movies/actions/action-button";

const MovieActions = () => {
  const { data: session } = useSession();
  const id = session?.user.id;

  return (
    <Card className="w-full">
      <CardContent className="py-4">
        <div className="grid w-full items-center justify-center gap-2 xl:grid-cols-3">
          <ActionButton label="Watch">
            <Eye />
          </ActionButton>
          <ActionButton label="Like">
            <Heart />
          </ActionButton>
          <ActionButton label="Watchlist">
            <Clock />
          </ActionButton>
        </div>
      </CardContent>
    </Card>
  );
};
export default MovieActions;
