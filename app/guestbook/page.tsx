"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export default function GuestbookPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thanks for signing our guestbook! (This is a demo - not actually saving)")
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="retro-container">
      <header className="retro-header">
        <div className="header-content">
          <div className="blink-animation">✨ GUESTBOOK ✨</div>
          <h1 className="site-title">
            <span className="rainbow-text">CHUDTOPIA</span>
          </h1>
          <div className="subtitle">~ Sign Our Guestbook ~</div>
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
              <h2 className="content-title">📝 SIGN OUR GUESTBOOK 📝</h2>

              <div className="intro-text">
                <p>Leave your mark on Chudtopia! Sign our guestbook and let us know you were here!</p>
              </div>

              <form onSubmit={handleSubmit} className="guestbook-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="retro-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="retro-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Leave a message..."
                  className="retro-textarea"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button type="submit" className="retro-button">
                  SIGN GUESTBOOK!
                </button>
              </form>

              <div style={{ marginTop: "30px" }}>
                <h3>Recent Entries:</h3>
                <div className="feature-box">
                  <div>
                    <strong className="rainbow-text">★ MysterySeeker99</strong> - 12/29/2025
                  </div>
                  <p style={{ marginTop: "5px" }}>Amazing site! Can't wait to explore more about Agartha!</p>
                </div>
                <div className="feature-box">
                  <div>
                    <strong className="rainbow-text">★ UndergroundExplorer</strong> - 12/28/2025
                  </div>
                  <p style={{ marginTop: "5px" }}>This brings back so many memories of the old web! Love it!</p>
                </div>
              </div>
            </div>
          </section>

          <aside className="sidebar right-sidebar">
            <div className="sidebar-box">
              <h2 className="box-title">📊 GUESTBOOK 📊</h2>
              <div className="stats-content">
                <div>
                  Total Signatures: <strong className="rainbow-text">847</strong>
                </div>
                <div className="blink-slow" style={{ marginTop: "10px" }}>
                  ⚡ BE OUR GUEST! ⚡
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
