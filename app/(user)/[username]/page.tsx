import Profile from "@/components/user/profile/profile";

const UserProfilePage = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  // params
  const username = (await params).username;

  // fetch user
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${username}`,
  );
  const data = await res.json();
  const { user } = data;

  if (!user) {
    return <div>User not found</div>;
  }

  return <Profile user={user} />;
};

export default UserProfilePage;
