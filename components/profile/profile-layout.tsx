import { User } from "@/models/types/types";
import UserHeader from "./user-header";

const ProfileLayout = ({ user }: { user: User }) => {
  return (
    <div>
      <UserHeader user={user} />
    </div>
  );
};
export default ProfileLayout;
