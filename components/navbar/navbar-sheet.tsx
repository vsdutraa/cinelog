import { Menu } from "lucide-react";
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
import NavbarLinks from "@/components/navbar/navbar-links";
const NavbarSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="space-y-4">
        <SheetHeader>
          <SheetTitle>
            <NavbarLogo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          <NavbarLinks />
          <UserActions />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
