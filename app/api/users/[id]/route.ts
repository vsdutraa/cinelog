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
      return NextResponse.json({ message: "ID is required." }, { status: 400 });
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

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectMongoDB();

    const id = (await params).id;

    if (!id) {
      return NextResponse.json({ message: "id is required." }, { status: 400 });
    }

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        { message: "Invalid ID format." },
        { status: 400 }
      );
    }

    const body = await req.json();

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { message: "Request body is required." },
        { status: 400 }
      );
    }

    const updatedUser = await User.findOneAndUpdate({ _id: id }, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "User updated successfully.",
        user: {
          id: updatedUser._id,
          username: updatedUser.username,
          email: updatedUser.email,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error in PUT /api/users/[id]:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
