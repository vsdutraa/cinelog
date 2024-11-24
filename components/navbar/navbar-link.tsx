"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarLinkProps {
  href: string;
  label: string;
}

const NavbarLink = ({ href, label }: NavbarLinkProps) => {
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
