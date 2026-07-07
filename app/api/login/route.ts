import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const isAdmin = Boolean(adminEmail && adminPassword && email === adminEmail && password === adminPassword);

  return NextResponse.json({ isAdmin });
}
