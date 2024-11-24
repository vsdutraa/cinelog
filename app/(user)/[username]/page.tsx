import { notFound } from "next/navigation";
import Profile from "@/components/user/profile/profile";

const UserProfilePage = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const { username } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/username/${username}`,
  );
  if (!res.ok) {
    notFound();
  }
  const user = await res.json();

  return <Profile user={user} />;
};

export default UserProfilePage;
