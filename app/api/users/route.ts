import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const username = req.nextUrl.searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { message: "Username is required." },
        { status: 400 }
      );
    }

    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    const { _id, username: name, email } = user;

    return NextResponse.json(
      {
        user: {
          id: _id,
          username: name,
          email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { message: "An error occurred while searching for the user." },
      { status: 500 }
    );
  }
}
