import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    {
      sup: "hi!",
    },
    { status: 500 }
  );
}
