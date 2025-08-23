import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.REVALIDATION_TOKEN}`) {
    return new NextResponse("Invalid token", { status: 401 });
  }

  const body = await request.json();
  const tag = body.model;

  if (!tag) {
    return new NextResponse("Tag is required", { status: 400 });
  }

  revalidateTag(tag);

  return new NextResponse("Revalidated", { status: 200 });
}
