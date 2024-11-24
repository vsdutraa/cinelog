import NavbarLarge from "@/components/navbar/navbar-large";
import NavbarMobile from "@/components/navbar/navbar-mobile";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/100">
      <div className="container mx-auto flex h-16 items-center justify-between p-4 md:p-6">
        <NavbarLarge />
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Navbar;
