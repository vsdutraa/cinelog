import { User } from "@/models/types/types";

import UserAvatar from "@/components/profile/user-avatar";

const UserHeader = ({ user }: { user: User }) => {
  const { username } = user;

  const bio = "oi";

  return (
    <div className="container h-28 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <UserAvatar username={username} />
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">{username}</h1>
          {bio && <p className="text-sm text-muted-foreground">oi</p>}
        </div>
      </div>
      <div>Hello</div>
    </div>
  );
};
export default UserHeader;
