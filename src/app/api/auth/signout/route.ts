import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import { verifyToken } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json(
        { error: "No token provided" },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }

    // Delete session from database
    await prisma.session.deleteMany({
      where: {
        token,
        userId: decoded.userId,
      },
    });

    return NextResponse.json(
      { message: "Signed out successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Signout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
