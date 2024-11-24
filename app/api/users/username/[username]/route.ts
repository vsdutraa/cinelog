import { connectMongoDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { getUserByUsername } from "@/services/user-service";
import { NotFoundError } from "@/services/errors";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> },
) {
  try {
    const { username } = await params;

    const user = await getUserByUsername(username);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    // console.error("Error in GET /api/users/username/[username]:", error);

    if (error instanceof NotFoundError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.status },
      );
    }

    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { message: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
