import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        if (!credentials) throw new Error("No credentials provided.");

        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("User not found.");
          } else {
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );
            if (!passwordsMatch) {
              throw new Error("Passwords do not match.");
            }
            return user;
          }
        } catch (error) {
          console.error("Error during authentication:", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
