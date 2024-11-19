"use client";
import React from "react";
import Link from "next/link";

import { User } from "@/models/types/types";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/profile/user-avatar";
import UserStats from "@/components/profile/user-stats/user-stats";

interface UserHeaderProps {
  user: User;
  isOwner: boolean;
}

const UserHeader: React.FC<UserHeaderProps> = ({ user, isOwner }) => {
  const { username } = user;

  return (
    <div className="container h-28 flex items-center justify-between">
      {/* left side */}
      <div className="flex items-center space-x-6">
        <UserAvatar username={username} />
        {/* user info */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-5">
            <h1 className="text-2xl font-semibold">{username}</h1>
            {isOwner && (
              <Button
                className="px-3 h-7 text-xs bg-muted-foreground uppercase"
                asChild
              >
                <Link href="/settings">Edit profile</Link>
              </Button>
            )}
          </div>
          {/* {bio && <p className="text-sm text-muted-foreground">oi</p>} */}
        </div>
      </div>

      {/* right side */}
      <UserStats />
    </div>
  );
};
export default UserHeader;
