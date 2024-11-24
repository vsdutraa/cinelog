import { User } from "@/types/db";
import UserHeader from "@/components/user/profile/user-header";
import { getServerSession } from "@/lib/auth/get-server-session";

interface ProfileProps {
  user: User;
}

const Profile = async ({ user }: ProfileProps) => {
  const session = await getServerSession();
  const isOwner = session?.user.id === user.id;

  return (
    <div>
      <UserHeader user={user} isOwner={isOwner} />
    </div>
  );
};
export default Profile;
