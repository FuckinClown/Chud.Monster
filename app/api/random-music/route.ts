import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export async function GET() {
  try {
    const musicDir = path.join(process.cwd(), "public", "music")

    // Try to read the music directory
    try {
      const files = await fs.readdir(musicDir)
      const mp3Files = files.filter((file) => file.toLowerCase().endsWith(".mp3"))

      if (mp3Files.length === 0) {
        return NextResponse.json({ song: "Add MP3s to /public/music/" })
      }

      // Pick a random MP3
      const randomSong = mp3Files[Math.floor(Math.random() * mp3Files.length)]
      return NextResponse.json({ song: randomSong })
    } catch (dirError) {
      // Directory doesn't exist yet
      return NextResponse.json({ song: "Add MP3s to /public/music/" })
    }
  } catch (error) {
    return NextResponse.json({ song: "No music available" })
  }
}
