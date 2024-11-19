import NavbarLarge from "@/components/navbar/navbar-large";
import NavbarMobile from "@/components/navbar/navbar-mobile";

const Navbar = async () => {
  return (
    <nav className="border-b mb-8">
      {/* visible only on medium and larger screens */}
      <div className="hidden md:flex">
        <NavbarLarge />
      </div>

      {/* visible only on small screens */}
      <div className="flex md:hidden">
        <NavbarMobile />
      </div>
    </nav>
  );
};

export default Navbar;
