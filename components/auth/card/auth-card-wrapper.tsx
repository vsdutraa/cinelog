import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import AuthHeader from "@/components/auth/card/auth-header";
import BackButton from "@/components/auth/buttons/back-button";

interface CardWrapperProps {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children,
}) => {
  return (
    <Card className="md:1/2 -mt-48 w-full shadow-md xl:w-1/4">
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

export default CardWrapper;
