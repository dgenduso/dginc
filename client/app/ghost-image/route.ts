import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src");
  if (!src) return new NextResponse("Missing src", { status: 400 });

  // Only proxy requests to the configured Ghost instance
  const ghostUrl = process.env.GHOST_URL ?? "";
  if (!src.startsWith(ghostUrl)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const res = await fetch(src);
  if (!res.ok) return new NextResponse("Not found", { status: 404 });

  const contentType = res.headers.get("content-type") ?? "image/jpeg";
  const buffer = await res.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
