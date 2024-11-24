import { NextRequest, NextResponse } from "next/server";
import { getUserById } from "@/services/user-service";
import { NotFoundError } from "@/services/errors";

export async function GET({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const user = await getUserById(id);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/users/id/[id]:", error);

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
