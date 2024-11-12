import Link from "next/link";

import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

interface UserActionsProps {
  variant?: "col" | "row";
}

const UserActions = async ({ variant = "row" }: UserActionsProps) => {
  const { userId } = await auth();

  const layoutClasses =
    variant === "col" ? "flex flex-col space-y-2" : "flex flex-row space-x-2";

  return (
    <div>
      {userId ? (
        <div className="flex items-center">
          <UserButton />
        </div>
      ) : (
        <div className={layoutClasses}>
          <Button variant="outline" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserActions;
