import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession as NextAuthGetServerSession } from "next-auth";

import { options } from "@/lib/auth/options";

export function getServerSession(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return NextAuthGetServerSession(...args, options);
}
