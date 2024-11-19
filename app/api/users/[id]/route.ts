import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/database/mongodb";
import mongoose from "mongoose";
import User from "@/models/database/user-schema";

// fetch user by id OR username
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectMongoDB();

    const id = (await params).id;

    if (!id) {
      return NextResponse.json({ message: "id is required." }, { status: 400 });
    }

    // check if params.id is a valid MongoDB ObjectId.
    // if valid, fetch the user by _id. otherwise, fetch the user by username.
    const user = await User.findOne(
      mongoose.isValidObjectId(id) ? { _id: id } : { username: id }
    );

    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    const { _id, username, email } = user;

    return NextResponse.json(
      {
        user: { id: _id, username, email },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error in GET /api/users/[id]:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
