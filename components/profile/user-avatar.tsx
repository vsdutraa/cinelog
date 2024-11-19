import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = ({ username }: { username: string }) => {
  return (
    <div>
      <img
        src="https://github.com/shadcn.png"
        alt="Avatar"
        className="h-28 w-28 rounded-full"
      />
    </div>
  );
};
export default UserAvatar;
