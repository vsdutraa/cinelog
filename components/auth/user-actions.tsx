"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import LogoutButton from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";

interface UserActionsProps {
  variant?: "col" | "row";
}

const UserActions = ({ variant = "row" }: UserActionsProps) => {
  const { data: session } = useSession();

  const layoutClasses =
    variant === "col" ? "flex flex-col space-y-2" : "flex flex-row space-x-2";
  return (
    <div>
      {session ? (
        <LogoutButton />
      ) : (
        <div className={layoutClasses}>
          <Button variant="outline" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserActions;
