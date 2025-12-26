import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import {
  hashPassword,
  generateToken,
  isValidEmail,
  isValidPassword,
  isValidUsername,
} from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, username, email, password } = body;

    // Validation
    if (!fullName || !username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
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

    // Validate username format
    if (!isValidUsername(username)) {
      return NextResponse.json(
        {
          error:
            "Username must be 3-20 characters and contain only letters, numbers, and underscores",
        },
        { status: 400 }
      );
    }

    // Validate password strength
    if (!isValidPassword(password)) {
      return NextResponse.json(
        {
          error:
            "Password must be at least 8 characters and contain uppercase, lowercase, and numbers",
        },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return NextResponse.json(
          { error: "Email already registered" },
          { status: 409 }
        );
      }
      if (existingUser.username === username) {
        return NextResponse.json(
          { error: "Username already taken" },
          { status: 409 }
        );
      }
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await prisma.user.create({
      data: {
        fullName,
        username,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        fullName: true,
        username: true,
        email: true,
        avatar: true,
        bio: true,
        isVerified: true,
        createdAt: true,
      },
    });

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    // Create session
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    await prisma.session.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    return NextResponse.json(
      {
        message: "Account created successfully",
        user,
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
