"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // Fetch all images from the gallery folder
    fetch("/api/gallery-images")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch(() => setImages([]))
  }, [])

  return (
    <div className="retro-container">
      <header className="retro-header">
        <div className="header-content">
          <div className="blink-animation">✨ IMAGE GALLERY ✨</div>
          <h1 className="site-title">
            <span className="rainbow-text">CHUDTOPIA</span>
          </h1>
          <div className="subtitle">~ Explore the Collection ~</div>
        </div>
      </header>

      <main className="retro-main">
        <div className="content-wrapper">
          <aside className="sidebar left-sidebar">
            <div className="sidebar-box">
              <h2 className="box-title">⚡ NAVIGATION ⚡</h2>
              <nav className="nav-links">
                <Link href="/" className="nav-link">
                  🏠 Home
                </Link>
                <Link href="/about" className="nav-link">
                  📖 About
                </Link>
                <Link href="/forum" className="nav-link">
                  💬 Forum
                </Link>
                <Link href="/gallery" className="nav-link">
                  🖼️ Gallery
                </Link>
                <Link href="/links" className="nav-link">
                  🔗 Cool Links
                </Link>
                <Link href="/guestbook" className="nav-link">
                  📝 Guestbook
                </Link>
              </nav>
            </div>
          </aside>

          <section className="main-content">
            <div className="content-box">
              <h2 className="content-title">
                <img src="/glowing-star.png" alt="star" className="title-icon" />
                IMAGE GALLERY
                <img src="/glowing-star.png" alt="star" className="title-icon" />
              </h2>

              <div className="intro-text">
                <p>Explore our collection of mysterious images, ancient maps, and underground discoveries!</p>
                <p style={{ fontSize: "0.9em", fontStyle: "italic" }}>
                  To add images: Place your image files in the <code>/public/gallery/</code> folder
                </p>
              </div>

              {images.length === 0 ? (
                <div className="under-construction">
                  <img src="/under-construction-banner.jpg" alt="Under Construction" className="construction-gif" />
                  <span className="blink-animation">⚠️ NO IMAGES YET - ADD SOME TO /public/gallery/ ⚠️</span>
                </div>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "15px",
                    marginTop: "20px",
                  }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="feature-box" style={{ padding: "10px" }}>
                      <img
                        src={`/gallery/${image}`}
                        alt={image}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          border: "3px solid #ffff00",
                          cursor: "pointer",
                        }}
                        onClick={() => window.open(`/gallery/${image}`, "_blank")}
                      />
                      <div style={{ marginTop: "5px", fontSize: "0.8em", wordBreak: "break-all" }}>{image}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <aside className="sidebar right-sidebar">
            <div className="sidebar-box">
              <h2 className="box-title">📊 GALLERY INFO 📊</h2>
              <div className="stats-content">
                <div>
                  Total Images: <strong className="rainbow-text">{images.length}</strong>
                </div>
                <div className="blink-slow" style={{ marginTop: "10px" }}>
                  ⚡ CLICK TO ENLARGE ⚡
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="retro-footer">
        <div className="footer-content">
          <div className="footer-line">
            <span className="rainbow-text">★</span> CHUD.MONSTER - EST. 2025 <span className="rainbow-text">★</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
