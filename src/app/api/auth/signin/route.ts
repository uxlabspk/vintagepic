import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import { comparePassword, generateToken, isValidEmail } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, rememberMe } = body;

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    // Create session
    const expiresAt = new Date();
    if (rememberMe) {
      expiresAt.setDate(expiresAt.getDate() + 30); // 30 days for remember me
    } else {
      expiresAt.setDate(expiresAt.getDate() + 7); // 7 days default
    }

    // Delete old sessions for this user (optional - keeps only latest session)
    await prisma.session.deleteMany({
      where: { userId: user.id },
    });

    // Create new session
    await prisma.session.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: "Signed in successfully",
        user: userWithoutPassword,
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
