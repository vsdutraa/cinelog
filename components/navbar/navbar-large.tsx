import Logo from "@/components/navbar/logo";
import { ThemeSwitcher } from "@/components/navbar/theme-switcher";
import SearchBar from "@/components/navbar/search-bar";
import NavbarLinks from "@/components/navbar/navbar-links";

const NavbarLarge = () => {
  return (
    <div className="hidden w-full items-center justify-between md:flex">
      {/* left side */}
      <div className="flex items-center space-x-6">
        <Logo />
        <NavbarLinks />
      </div>

      {/* right side */}

      <div className="flex space-x-2">
        <SearchBar />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default NavbarLarge;
