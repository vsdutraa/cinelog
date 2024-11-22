"use client";

import Link from "next/link";
// icons
import { Menu } from "lucide-react";
// components
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import UserActions from "@/components/user/user-actions";
import NavbarLogo from "@/components/navbar/logo";
import NavbarLinks from "./navbar-links";

const NavbarSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="space-y-4">
        <SheetHeader>
          <SheetTitle>
            <NavbarLogo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          {/* nav links */}
          <NavbarLinks />
          <UserActions variant="col" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
