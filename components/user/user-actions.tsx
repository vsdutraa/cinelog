import { getServerSession } from "@/lib/auth/get-server-session";
import Link from "next/link";
import LogoutButton from "@/components/auth/buttons/logout-button";
import { Button } from "@/components/ui/button";

const UserActions = async () => {
  const session = await getServerSession();

  return (
    <div>
      {session ? (
        <LogoutButton />
      ) : (
        <div className="flex flex-col gap-2 md:flex-row">
          <Button variant="outline" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserActions;
