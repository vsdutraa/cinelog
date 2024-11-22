"use client";
import Link from "next/link";

import Logo from "@/components/navbar/logo";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import SearchBar from "@/components/navbar/search-bar";
import UserActions from "@/components/user/user-actions";
import NavbarLinks from "@/components/navbar/navbar-links";

const NavbarLarge = () => {
  return (
    <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      {/* left side */}
      <div className="flex items-center space-x-6">
        <Logo />
        <NavbarLinks />
      </div>

      {/* right side */}

      <div className="flex space-x-2">
        <SearchBar />
        <UserActions />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavbarLarge;
