import { UserButton } from "@clerk/nextjs";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

import { Button } from "./ui/button";

const Navbar = async () => {
  const { userId } = await auth();

  return (
    <div className="border-b">
      <nav className="container px-4 md:px-6 h-16 mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-neutral-900 hover:text-neutral-600"
          >
            CineLog
          </Link>

          {/* nav links */}
          <div>
            <Link
              href="/movies"
              className="text-neutral-900 hover:text-neutral-600"
            >
              Movies
            </Link>
          </div>
        </div>

        {/* user actions */}
        <div className="flex items-center">
          {userId ? (
            <UserButton />
          ) : (
            <Button asChild>
              <Link href="sign-in">Login</Link>
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
