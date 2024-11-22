import Link from "next/link";

import NavbarSheet from "@/components/navbar/navbar-sheet";
import SearchBar from "@/components/navbar/search-bar";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import Logo from "./logo";

const NavbarMobile = async () => {
  return (
    <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <Logo />

      {/* right side */}
      <div className="flex gap-2">
        <SearchBar />
        <NavbarSheet />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavbarMobile;
