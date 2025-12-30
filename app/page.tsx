"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [currentTime, setCurrentTime] = useState("")
  const [currentSong, setCurrentSong] = useState("")

  useEffect(() => {
    setVisitorCount(Math.floor(Math.random() * 9999) + 1000)

    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString())
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)

    fetch("/api/random-music")
      .then((res) => res.json())
      .then((data) => setCurrentSong(data.song))
      .catch(() => setCurrentSong("No music available"))

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="retro-container">
      <header className="retro-header">
        <div className="header-content">
          <div className="blink-animation">✨ WELCOME TO ✨</div>
          <h1 className="site-title">
            <span className="rainbow-text">CHUDTOPIA</span>
          </h1>
          <div className="subtitle">~ Your Gateway to Agartha ~</div>
          <div className="marquee-container">
            <div className="marquee">
              <span className="marquee-content">
                ★ Enter the Underground Kingdom ★ Where Legends Come Alive ★ Join the Community ★ Explore the Mysteries
                ★
              </span>
              <span className="marquee-content">
                ★ Enter the Underground Kingdom ★ Where Legends Come Alive ★ Join the Community ★ Explore the Mysteries
                ★
              </span>
            </div>
          </div>
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

            <div className="sidebar-box">
              <h2 className="box-title">📊 STATS 📊</h2>
              <div className="stats-content">
                <div className="stat-item">
                  <span className="blink-slow">VISITORS:</span>
                  <div className="counter">
                    {visitorCount
                      .toString()
                      .split("")
                      .map((digit, i) => (
                        <span key={i} className="counter-digit">
                          {digit}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="stat-item">
                  <span>TIME:</span>
                  <div className="time-display">{currentTime}</div>
                </div>
              </div>
            </div>

            <div className="sidebar-box">
              <h2 className="box-title">🎵 NOW PLAYING 🎵</h2>
              <div className="now-playing">
                <div className="speaker-icon">🔊</div>
                <div className="song-info">
                  <div className="blink-animation">♪ {currentSong} ♪</div>
                </div>
              </div>
            </div>

            <div className="sidebar-box badges-box">
              <div className="web-badges">
                <div className="badge">
                  BEST VIEWED IN
                  <br />
                  NETSCAPE 4.0
                </div>
                <div className="badge">
                  HTML 3.2
                  <br />
                  COMPLIANT
                </div>
                <div className="badge">
                  GEOCITIES
                  <br />
                  CERTIFIED
                </div>
              </div>
            </div>
          </aside>

          <section className="main-content">
            <div className="content-box">
              <h2 className="content-title">
                <img src="/glowing-star.png" alt="star" className="title-icon" />
                WELCOME TO THE UNDERGROUND
                <img src="/glowing-star.png" alt="star" className="title-icon" />
              </h2>

              <div className="intro-text">
                <p className="welcome-msg">
                  <span className="big-text">G</span>reetings, fellow explorer! You have discovered
                  <strong> CHUDTOPIA</strong>, the premier online destination for seekers of the legendary underground
                  realm of <strong>AGARTHA</strong>! 🌍
                </p>

                <div className="under-construction">
                  <img src="/under-construction-banner.jpg" alt="Under Construction" className="construction-gif" />
                  <span className="blink-animation">⚠️ SITE UNDER CONSTRUCTION ⚠️</span>
                </div>

                <p>
                  This mystical corner of the internet is dedicated to exploring the hidden mysteries beneath our feet.
                  Join our community of truth-seekers, mythologists, and underground enthusiasts as we delve into the
                  secrets of the hollow earth!
                </p>
              </div>

              <div className="feature-grid">
                <div className="feature-box">
                  <div className="feature-icon">🗺️</div>
                  <h3>Ancient Maps</h3>
                  <p>Explore historical charts & forgotten passages</p>
                </div>
                <div className="feature-box">
                  <div className="feature-icon">👥</div>
                  <h3>Community</h3>
                  <p>Connect with fellow explorers worldwide</p>
                </div>
                <div className="feature-box">
                  <div className="feature-icon">📚</div>
                  <h3>Lore Library</h3>
                  <p>Vast archives of underground knowledge</p>
                </div>
                <div className="feature-box">
                  <div className="feature-icon">🔮</div>
                  <h3>Mysteries</h3>
                  <p>Uncover secrets & hidden truths</p>
                </div>
              </div>

              <div className="news-section">
                <h3 className="section-title">
                  <span className="blink-slow">★★★</span> LATEST NEWS <span className="blink-slow">★★★</span>
                </h3>
                <div className="news-item">
                  <span className="news-date">[12/30/2025]</span>
                  <span className="news-text">🎉 Welcome to the newly redesigned Chudtopia!</span>
                </div>
                <div className="news-item">
                  <span className="news-date">[12/28/2025]</span>
                  <span className="news-text">🗺️ New underground map section coming soon...</span>
                </div>
                <div className="news-item">
                  <span className="news-date">[12/25/2025]</span>
                  <span className="news-text">🎄 Happy Holidays from the Underground!</span>
                </div>
              </div>
            </div>

            <div className="content-box" id="guestbook">
              <h2 className="content-title">📝 SIGN OUR GUESTBOOK 📝</h2>
              <div className="guestbook-form">
                <input type="text" placeholder="Your Name" className="retro-input" />
                <input type="email" placeholder="Your Email" className="retro-input" />
                <textarea placeholder="Leave a message..." className="retro-textarea" rows={4}></textarea>
                <button className="retro-button">SIGN GUESTBOOK!</button>
              </div>
            </div>
          </section>

          <aside className="sidebar right-sidebar">
            <div className="sidebar-box">
              <h2 className="box-title">🔥 HOT LINKS 🔥</h2>
              <div className="hot-links">
                <a href="#" className="hot-link">
                  <span className="link-bullet">➤</span> Hollow Earth Theory
                </a>
                <a href="#" className="hot-link">
                  <span className="link-bullet">➤</span> Ancient Civilizations
                </a>
                <a href="#" className="hot-link">
                  <span className="link-bullet">➤</span> Underground Cities
                </a>
                <a href="#" className="hot-link">
                  <span className="link-bullet">➤</span> Mystery Archive
                </a>
                <a href="#" className="hot-link">
                  <span className="link-bullet">➤</span> Community Forum
                </a>
              </div>
            </div>

            <div className="sidebar-box">
              <h2 className="box-title">📰 WEBRING 📰</h2>
              <div className="webring">
                <div className="webring-title">Chudtopia Webring</div>
                <div className="webring-nav">
                  <button className="webring-btn">« PREV</button>
                  <button className="webring-btn">RANDOM</button>
                  <button className="webring-btn">NEXT »</button>
                </div>
              </div>
            </div>

            <div className="sidebar-box">
              <h2 className="box-title">⭐ AFFILIATES ⭐</h2>
              <div className="affiliates">
                <div className="affiliate-badge">MYSTERY ZONE</div>
                <div className="affiliate-badge">UNDERGROUND NET</div>
                <div className="affiliate-badge">AGARTHA PORTAL</div>
              </div>
            </div>

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
          <div className="footer-line">
            Best viewed at 1024x768 resolution in Internet Explorer 6.0 or Netscape Navigator
          </div>
          <div className="footer-line blink-slow">⚠️ THIS SITE IS OPTIMIZED FOR MAXIMUM NOSTALGIA ⚠️</div>
          <div className="footer-badges">
            <span className="footer-badge">© 2025 CHUDTOPIA</span>
            <span className="footer-badge">ALL RIGHTS RESERVED</span>
            <span className="footer-badge">MADE WITH ❤️ & HTML</span>
          </div>
        </div>
      </footer>

      <div className="floating-elements">
        <div className="float-star" style={{ left: "10%", animationDelay: "0s" }}>
          ⭐
        </div>
        <div className="float-star" style={{ left: "30%", animationDelay: "2s" }}>
          ✨
        </div>
        <div className="float-star" style={{ left: "50%", animationDelay: "1s" }}>
          💫
        </div>
        <div className="float-star" style={{ left: "70%", animationDelay: "3s" }}>
          ⭐
        </div>
        <div className="float-star" style={{ left: "90%", animationDelay: "1.5s" }}>
          ✨
        </div>
      </div>
    </div>
  )
}
