import { NextRequest, NextResponse } from "next/server";
import { RegisterSchema } from "@/lib/zod/auth-form";
import { getUsers, createUser } from "@/services/user-service";
import { ZodError } from "zod";

export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json(users, { status: 200 });
  } catch (error: any) {
    console.error("Error in GET api/users", error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { message: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = RegisterSchema.parse(body);

    const newUser = await createUser(validatedData);

    return NextResponse.json(
      { message: "User registered successfully", user: newUser },
      { status: 201 },
    );
  } catch (error: unknown) {
    console.error("Error in POST /api/users:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Validation failed", errors: error.errors },
        { status: 400 },
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
