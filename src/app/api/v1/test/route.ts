import { NextResponse } from "next/server";
import { db } from "~/server/db";

export async function GET() {
  const users = await db.query.users.findMany();
  return NextResponse.json({ message: "Hello World", users }, { status: 200 });
}

export const runtime = "edge";