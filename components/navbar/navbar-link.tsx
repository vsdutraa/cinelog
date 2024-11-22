import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarLinkProps {
  href: string;
  label: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`transition-all ${isActive ? "text-black dark:text-white" : "text-neutral-500"}`}
      >
        {label}
      </Link>
    </li>
  );
};
export default NavbarLink;
