"use client"

import Link from "next/link"

export default function ForumPage() {
  const forumCategories = [
    { icon: "🗺️", title: "Maps & Exploration", posts: 234, threads: 45 },
    { icon: "📚", title: "Ancient Texts", posts: 156, threads: 28 },
    { icon: "🔮", title: "Mysteries & Theories", posts: 567, threads: 89 },
    { icon: "💬", title: "General Discussion", posts: 892, threads: 142 },
    { icon: "🌍", title: "Hollow Earth", posts: 445, threads: 67 },
    { icon: "👥", title: "Meet & Greet", posts: 321, threads: 54 },
  ]

  return (
    <div className="retro-container">
      <header className="retro-header">
        <div className="header-content">
          <div className="blink-animation">✨ COMMUNITY FORUM ✨</div>
          <h1 className="site-title">
            <span className="rainbow-text">CHUDTOPIA</span>
          </h1>
          <div className="subtitle">~ Join the Discussion ~</div>
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
              <h2 className="content-title">💬 FORUM CATEGORIES 💬</h2>

              <div className="intro-text">
                <p>
                  Welcome to the Chudtopia Forums! Join thousands of truth-seekers in discussing the mysteries of
                  Agartha and the underground world.
                </p>

                <div className="under-construction">
                  <span className="blink-animation">⚠️ FORUM COMING SOON ⚠️</span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {forumCategories.map((category, index) => (
                  <div key={index} className="feature-box" style={{ cursor: "pointer" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div className="feature-icon" style={{ fontSize: "2em" }}>
                        {category.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ margin: 0 }}>{category.title}</h3>
                        <div style={{ fontSize: "0.9em", marginTop: "5px" }}>
                          <span className="rainbow-text">{category.threads} threads</span> • {category.posts} posts
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="sidebar right-sidebar">
            <div className="sidebar-box">
              <h2 className="box-title">📊 FORUM STATS 📊</h2>
              <div className="stats-content">
                <div>
                  Total Members: <strong className="rainbow-text">2,847</strong>
                </div>
                <div>
                  Total Posts: <strong>15,892</strong>
                </div>
                <div>
                  Active Today: <strong className="blink-slow">47</strong>
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
