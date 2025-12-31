// Random music player
async function loadRandomMusic() {
  try {
    const response = await fetch("/api/random-music")
    const data = await response.json()

    const nowPlayingDiv = document.getElementById("now-playing")

    if (data.track) {
      nowPlayingDiv.innerHTML = `
        <p style="margin-bottom: 8px;">🎵 ${data.track} 🎵</p>
        <audio controls>
          <source src="${data.url}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      `
    } else {
      nowPlayingDiv.innerHTML =
        '<p>No music files found</p><p style="font-size: 9px; margin-top: 5px;">Add MP3 files to /music/ folder</p>'
    }
  } catch (error) {
    console.log("[v0] Error loading music:", error)
    document.getElementById("now-playing").innerHTML =
      '<p>🎵 Silence 🎵</p><p style="font-size: 9px; margin-top: 5px;">Add MP3 files to /music/ folder</p>'
  }
}

// Load random music on page load
if (document.getElementById("now-playing")) {
  loadRandomMusic()
}

// Gallery loader
async function loadGallery() {
  try {
    const response = await fetch("/api/gallery-images")
    const data = await response.json()

    const galleryGrid = document.getElementById("gallery-grid")

    if (data.images && data.images.length > 0) {
      galleryGrid.innerHTML = data.images
        .map(
          (image) => `
        <div class="gallery-item">
          <img src="${image.url}" alt="${image.name}">
          <p>${image.name}</p>
        </div>
      `,
        )
        .join("")
    } else {
      galleryGrid.innerHTML =
        '<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><h3>No images yet!</h3><p>Add images to the /gallery/ folder</p></div>'
    }
  } catch (error) {
    console.log("[v0] Error loading gallery:", error)
    const galleryGrid = document.getElementById("gallery-grid")
    if (galleryGrid) {
      galleryGrid.innerHTML =
        '<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><h3>Gallery coming soon!</h3><p>Add images to the /gallery/ folder</p></div>'
    }
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
