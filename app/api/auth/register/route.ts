import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB();

    const { email, username, password, confirmPassword } = await req.json();

    // check if user already exists
    const user = await User.findOne({ email }).select("_id");
    if (user) {
      console.log("User: ", user);
      return NextResponse.json(
        { message: "User already exists." },
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
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
