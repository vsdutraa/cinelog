import { connectMongoDB } from "@/lib/database/mongodb";
import User from "@/models/database/user-schema";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        if (!credentials) throw new Error("No credentials provided.");

        const { email, password } = credentials;

        await connectMongoDB();
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("User not found.");
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!passwordsMatch) {
          throw new Error("Passwords do not match.");
        }

        return {
          id: user._id,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    newUser: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
      };
      return session;
    },
  },
};
