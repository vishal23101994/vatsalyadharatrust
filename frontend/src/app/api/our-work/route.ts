import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const basePath = path.join(
    process.cwd(),
    "public/images/vatsalya"
  );

  const sections = [
    "annadan",
    "education",
    "healthcare",
    "ambulance",
    "animal",
    "elderly",
  ];

  const data: Record<string, string[]> = {};

  sections.forEach((section) => {
    const sectionPath = path.join(basePath, section);

    if (fs.existsSync(sectionPath)) {
      const files = fs
        .readdirSync(sectionPath)
        .filter((file) =>
          /\.(jpg|jpeg|png|webp)$/i.test(file)
        );

      data[section] = files;
    } else {
      data[section] = [];
    }
  });

  return NextResponse.json(data);
}
