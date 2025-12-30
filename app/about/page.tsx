"use client"

import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="retro-container">
      <header className="retro-header">
        <div className="header-content">
          <div className="blink-animation">✨ ABOUT US ✨</div>
          <h1 className="site-title">
            <span className="rainbow-text">CHUDTOPIA</span>
          </h1>
          <div className="subtitle">~ Learn Our Story ~</div>
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
                ABOUT CHUDTOPIA
                <img src="/glowing-star.png" alt="star" className="title-icon" />
              </h2>

              <div className="intro-text">
                <p className="welcome-msg">
                  <span className="big-text">W</span>elcome to <strong>CHUDTOPIA</strong>, your premier destination for
                  all things related to the mysterious underground realm of <strong>AGARTHA</strong>!
                </p>

                <h3>Our Mission 🗺️</h3>
                <p>
                  Founded in 2025, Chudtopia is dedicated to exploring the legends, mysteries, and lore surrounding the
                  hollow earth theory and the mythical underground kingdom of Agartha. We bring together truth-seekers,
                  researchers, and enthusiasts from around the world!
                </p>

                <h3>What We Offer 🌟</h3>
                <ul style={{ marginLeft: "20px" }}>
                  <li>📚 Extensive archives of underground lore and ancient texts</li>
                  <li>👥 Vibrant community of fellow explorers and researchers</li>
                  <li>🗺️ Historical maps and forgotten passages</li>
                  <li>🔮 Weekly discussions on mysteries and discoveries</li>
                  <li>💬 Active forums for sharing theories and findings</li>
                </ul>

                <div className="under-construction">
                  <img src="/under-construction-banner.jpg" alt="Under Construction" className="construction-gif" />
                  <span className="blink-animation">⚠️ MORE CONTENT COMING SOON ⚠️</span>
                </div>

                <h3>Join Our Community! 🤝</h3>
                <p>
                  Whether you're a seasoned researcher or just curious about the mysteries beneath our feet, Chudtopia
                  welcomes you! Sign our guestbook, join the forums, and become part of the journey into the unknown!
                </p>
              </div>
            </div>
          </section>

          <aside className="sidebar right-sidebar">
            <div className="sidebar-box">
              <h2 className="box-title">📧 CONTACT 📧</h2>
              <div className="contact-info">
                <div>Email:</div>
                <a href="mailto:admin@chud.monster" className="email-link">
                  admin@chud.monster
                </a>
                <div className="blink-slow" style={{ marginTop: "10px" }}>
                  ⚡ NEW MEMBERS WELCOME! ⚡
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
