// Random music player
async function loadRandomMusic() {
  // List of music files - add your files here
  const musicFiles = ["song1.mp3", "song2.mp3", "song3.mp3"]

  const nowPlayingDiv = document.getElementById("now-playing")
  console.log("[v0] Loading music, found files:", musicFiles)

  if (musicFiles.length > 0) {
    // Pick random song
    const randomSong = musicFiles[Math.floor(Math.random() * musicFiles.length)]
    const songPath = `/music/${randomSong}`
    const songName = randomSong.replace(".mp3", "").replace(/-|_/g, " ")

    console.log("[v0] Playing:", songPath)

    nowPlayingDiv.innerHTML = `
      <p style="margin-bottom: 8px;">🎵 ${songName} 🎵</p>
      <audio controls autoplay>
        <source src="${songPath}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    `
  } else {
    console.log("[v0] No music files in array")
    nowPlayingDiv.innerHTML =
      '<p>No music files found</p><p style="font-size: 9px; margin-top: 5px;">Add MP3 filenames to musicFiles array in script.js</p>'
  }
}

// Load random music on page load
if (document.getElementById("now-playing")) {
  loadRandomMusic()
}

// Gallery loader
async function loadGallery() {
  // List of gallery images - add your files here
  const galleryImages = ["image1.jpg", "image2.png", "image3.gif"]

  const galleryGrid = document.getElementById("gallery-grid")
  console.log("[v0] Loading gallery, found images:", galleryImages)

  if (galleryImages.length > 0) {
    galleryGrid.innerHTML = galleryImages
      .map(
        (image) => `
      <div class="gallery-item">
        <img src="/gallery/${image}" alt="${image}">
        <p>${image}</p>
      </div>
    `,
      )
      .join("")
    console.log("[v0] Gallery loaded with", galleryImages.length, "images")
  } else {
    console.log("[v0] No images in array")
    galleryGrid.innerHTML =
      '<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><h3>No images yet!</h3><p>Add image filenames to galleryImages array in script.js and put the files in /gallery/ folder</p></div>'
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
