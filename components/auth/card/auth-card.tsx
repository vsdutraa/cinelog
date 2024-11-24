"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import AuthHeader from "@/components/auth/card/auth-header";
import BackButton from "@/components/auth/buttons/back-button";

interface AuthCardProps {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
}

const AuthCard = ({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children,
}: AuthCardProps) => {
  return (
    <Card className="w-full md:w-1/2 xl:w-1/4">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default AuthCard;
