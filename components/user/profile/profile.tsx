"use client";
import React from "react";

import { User } from "@/models/types/types";
import { useSession } from "next-auth/react";
import UserHeader from "@/components/user/profile/user-header";

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const { data: session } = useSession();

  const { username } = user;
  const isOwner = session?.user.id === user.id;

  return (
    <div>
      <UserHeader user={user} isOwner={isOwner} />
    </div>
  );
};
export default Profile;
