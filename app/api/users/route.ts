import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/database/mongodb";
import User from "@/models/database/user-schema";
import bcrypt from "bcrypt";

// fetch all users
export async function GET(req: NextRequest) {}

// register an user
export async function POST(req: NextRequest) {
  try {
    await connectMongoDB();

    const { email, username, password, confirmPassword } = await req.json();

    // Verificar se o e-mail já está em uso
    const existingEmail = await User.findOne({ email }).select("_id");
    if (existingEmail) {
      return NextResponse.json(
        { message: "Email is already in use." },
        { status: 400 }
      );
    }

    // Verificar se o username já está em uso
    const existingUsername = await User.findOne({ username }).select("_id");
    if (existingUsername) {
      return NextResponse.json(
        { message: "Username is already in use." },
        { status: 400 }
      );
    }

    // check if passwords match
    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "Passwords do not match." },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ email, username, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error in POST /api/users:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
