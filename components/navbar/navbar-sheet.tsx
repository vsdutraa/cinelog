import Link from "next/link";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import UserActions from "@/components/user-actions";

const NavbarSheet = async () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="space-y-4">
        <SheetHeader>
          <SheetTitle>
            {/* logo */}
            <Link href="/" className="text-2xl font-bold text-neutral-900">
              CineLog
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          {/* nav links */}
          <div>
            <Link href="/movies" className="text-neutral-900">
              Movies
            </Link>
          </div>

          <UserActions variant="col" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
