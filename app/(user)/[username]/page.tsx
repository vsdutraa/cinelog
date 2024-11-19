import ProfileLayout from "@/components/profile/profile-layout";

const UserProfilePage = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const username = (await params).username;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${username}`
  );
  const data = await res.json();

  const { user, message } = data;

  if (!user) {
    return <div>{message}</div>;
  }

  return <ProfileLayout user={user} />;
};

export default UserProfilePage;
