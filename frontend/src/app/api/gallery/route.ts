import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const imagesDir = path.join(
    process.cwd(),
    "public/images/vatsalya/images"
  );

  try {
    const files = fs
      .readdirSync(imagesDir)
      .filter((file) =>
        /\.(jpg|jpeg|png|webp)$/i.test(file)
      );

    return NextResponse.json(files);
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}
