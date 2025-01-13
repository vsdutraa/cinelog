import { moviesRoute } from "@/routes";
import NavbarLink from "@/components/navbar/navbar-link";

const NavbarLinks = () => {
  const links = [{ href: moviesRoute, label: "Movies" }];

  return (
    <ul className="flex gap-4 md:flex-row">
      {links.map((link) => (
        <NavbarLink key={link.href} href={link.href} label={link.label} />
      ))}
    </ul>
  );
};
export default NavbarLinks;
