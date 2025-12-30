"use client"

import Link from "next/link"

export default function LinksPage() {
  const coolLinks = [
    { icon: "🗺️", title: "Hollow Earth Society", url: "#", desc: "Official research organization" },
    { icon: "📚", title: "Ancient Mysteries Archive", url: "#", desc: "Digital library of lost texts" },
    { icon: "🔮", title: "Underground Network", url: "#", desc: "Community of explorers" },
    { icon: "🌍", title: "Inner Earth Portal", url: "#", desc: "News and theories" },
    { icon: "👥", title: "Agartha Forums", url: "#", desc: "Discussion boards" },
    { icon: "🎵", title: "Underground Radio", url: "#", desc: "Mysterious audio broadcasts" },
  ]

  return (
    <div className="retro-container">
      <header className="retro-header">
        <div className="header-content">
          <div className="blink-animation">✨ COOL LINKS ✨</div>
          <h1 className="site-title">
            <span className="rainbow-text">CHUDTOPIA</span>
          </h1>
          <div className="subtitle">~ Links We Love ~</div>
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
              <h2 className="content-title">🔗 COOL SITES TO VISIT 🔗</h2>

              <div className="intro-text">
                <p>Check out these awesome sites from fellow truth-seekers and underground enthusiasts!</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {coolLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="feature-box"
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                      <div className="feature-icon" style={{ fontSize: "2.5em" }}>
                        {link.icon}
                      </div>
                      <div>
                        <h3 style={{ margin: 0, color: "#00ffff" }}>{link.title}</h3>
                        <p style={{ margin: "5px 0 0 0", fontSize: "0.9em" }}>{link.desc}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="under-construction" style={{ marginTop: "30px" }}>
                <span className="blink-animation">⚠️ MORE LINKS COMING SOON ⚠️</span>
              </div>
            </div>
          </section>

          <aside className="sidebar right-sidebar">
            <div className="sidebar-box">
              <h2 className="box-title">🔥 WEBMASTER 🔥</h2>
              <div className="contact-info">
                <p style={{ fontSize: "0.9em" }}>Want to exchange links? Email us!</p>
                <a href="mailto:admin@chud.monster" className="email-link">
                  admin@chud.monster
                </a>
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
