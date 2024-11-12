import Link from "next/link";

import NavbarSheet from "@/components/navbar/navbar-sheet";
import SearchBar from "@/components/search-bar";

const NavbarMobile = async () => {
  return (
    <nav className="container px-4 md:px-6 h-16 mx-auto flex items-center justify-between">
      {/* left side */}
      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className="text-2xl font-bold text-neutral-900 hover:text-neutral-600"
        >
          CineLog
        </Link>
      </div>
      {/* right side */}
      <div className="flex space-x-2">
        <SearchBar />
        <NavbarSheet />
      </div>
    </nav>
  );
};

export default NavbarMobile;
