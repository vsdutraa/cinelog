import NavbarSheet from "@/components/navbar/navbar-sheet";
import SearchBar from "@/components/navbar/search-bar";
import { ThemeSwitcher } from "@/components/navbar/theme-switcher";
import Logo from "@/components/navbar/logo";

const NavbarMobile = () => {
  return (
    <nav className="flex w-full items-center justify-between md:hidden">
      <Logo />

      {/* right side */}
      <div className="flex space-x-1.5">
        <SearchBar />
        <NavbarSheet />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavbarMobile;
