"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSession } from "next-auth/react";

const MovieActions = () => {
  const { data: session } = useSession();
  const id = session?.user.id;

  return (
    <Card className="w-full">
      <CardHeader></CardHeader>
    </Card>
  );
};
export default MovieActions;
