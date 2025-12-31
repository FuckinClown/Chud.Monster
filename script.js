// Random music player
async function loadRandomMusic() {
  // List of music files - add your MP3 filenames here
  const musicFiles = [
    "example-song.mp3",
    // Add more files like: "cool-tune.mp3", "awesome-beat.mp3"
  ]

  const nowPlayingDiv = document.getElementById("now-playing")

  if (musicFiles.length > 0) {
    // Pick random song
    const randomSong = musicFiles[Math.floor(Math.random() * musicFiles.length)]
    const songPath = `music/${randomSong}`
    const songName = randomSong.replace(".mp3", "").replace(/-|_/g, " ")

    nowPlayingDiv.innerHTML = `
      <p style="margin-bottom: 8px;">🎵 ${songName} 🎵</p>
      <audio controls autoplay loop>
        <source src="${songPath}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `
  } else {
    nowPlayingDiv.innerHTML =
      '<p style="font-size: 11px;">Add music files!</p><p style="font-size: 9px; margin-top: 5px;">1. Add filenames to musicFiles array in script.js<br>2. Put MP3 files in /music/ folder</p>'
  }
}

// Load random music on page load
if (document.getElementById("now-playing")) {
  loadRandomMusic()
}

// Gallery loader
async function loadGallery() {
  // List of gallery images - add your image filenames here
  const galleryImages = [
    "example-image.jpg",
    // Add more files like: "cool-pic.png", "awesome-gif.gif"
  ]

  const galleryGrid = document.getElementById("gallery-grid")

  if (galleryImages.length > 0) {
    galleryGrid.innerHTML = galleryImages
      .map(
        (image) => `
      <div class="gallery-item">
        <img src="gallery/${image}" alt="${image}">
        <p>${image}</p>
      </div>
    `,
      )
      .join("")
  } else {
    galleryGrid.innerHTML =
      '<div style="grid-column: 1/-1; text-align: center; padding: 40px; background: #00ffff; border: 3px solid #ffff00; border-radius: 10px;"><h3>No images yet!</h3><p style="margin-top: 10px;">1. Add image filenames to galleryImages array in script.js<br>2. Put image files in /gallery/ folder</p></div>'
  }
}

// Load gallery if on gallery page
if (document.getElementById("gallery-grid")) {
  loadGallery()
}

// Guestbook form handler
const guestbookForm = document.getElementById("guestbook-form")
if (guestbookForm) {
  guestbookForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const message = document.getElementById("message").value

    const entriesDiv = document.getElementById("guestbook-entries")
    const date = new Date().toLocaleDateString()

    const entry = document.createElement("div")
    entry.className = "guestbook-entry"
    entry.innerHTML = `
      <p><strong>${name}</strong> - ${date}</p>
      <p>${message}</p>
    `

    entriesDiv.insertBefore(entry, entriesDiv.firstChild)

    guestbookForm.reset()
    alert("Thanks for signing the guestbook! 🎉")
  })
}
