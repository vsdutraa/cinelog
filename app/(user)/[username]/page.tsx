const UserProfilePage = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const username = (await params).username;
  const res = await fetch(
    `http://localhost:3000/api/users?username=${username}`
  );
  const { user, message } = await res.json();

  if (!user) {
    return <div>{message}</div>;
  }

  return <div>{user.username}</div>;
};

export default UserProfilePage;
