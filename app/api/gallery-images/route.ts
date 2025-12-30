import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), "public", "gallery")

    // Try to read the gallery directory
    try {
      const files = await fs.readdir(galleryDir)
      const imageFiles = files.filter((file) => {
        const ext = file.toLowerCase()
        return (
          ext.endsWith(".jpg") ||
          ext.endsWith(".jpeg") ||
          ext.endsWith(".png") ||
          ext.endsWith(".gif") ||
          ext.endsWith(".webp")
        )
      })

      return NextResponse.json({ images: imageFiles })
    } catch (dirError) {
      // Directory doesn't exist yet
      return NextResponse.json({ images: [] })
    }
  } catch (error) {
    return NextResponse.json({ images: [] })
  }
}
