"use client";
import Link from "next/link";

import SearchBar from "@/components/navbar/search-bar";
import UserActions from "@/components/auth/user-actions";

const NavbarLarge = () => {
  const navLinks = [{ href: "/movies", label: "Movies" }];

  return (
    <nav className="container px-4 md:px-6 h-16 mx-auto flex items-center justify-between">
      {/* left side */}
      <div className="flex items-center space-x-6">
        {/* logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-neutral-900 hover:text-neutral-600"
        >
          CineLog
        </Link>

        {/* nav links */}
        <div className="flex space-x-4 ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-900 hover:animate-pulse"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* right side */}

      <div className="flex space-x-2">
        <SearchBar />
        <UserActions />
      </div>
    </nav>
  );
};

export default NavbarLarge;
