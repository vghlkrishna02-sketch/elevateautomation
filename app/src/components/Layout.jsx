import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AuroraBackground, Magnet } from './anim.jsx'

const LOGO = 'assets/img/logo-mark.svg'

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Elevate Automation — home">
      <span className="brand-mark"><img src={LOGO} alt="" width="38" height="38" /></span>
      <span className="brand-name"><strong>Elevate</strong><span>Automation</span></span>
    </Link>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setOpen(false) }, [loc.pathname])
  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <Brand />
          <button className="nav-toggle" aria-label="Open menu" aria-expanded={open}
            onClick={() => setOpen(v => !v)}><span></span></button>
          <div className={`nav-menu${open ? ' open' : ''}`} id="navMenu">
            <NavLink to="/solutions" className={({ isActive }) => isActive ? 'active' : undefined}>Solutions</NavLink>
            <NavLink to="/industries" className={({ isActive }) => isActive ? 'active' : undefined}>Industries</NavLink>
            <NavLink to="/plans" className={({ isActive }) => isActive ? 'active' : undefined}>Plans</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink>
            <div className="nav-cta">
              <a className="btn btn-wa" href="https://wa.me/918200191137" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.2-3.8-.8-3.2-1.3-5.2-4.5-5.4-4.7-.2-.2-1.3-1.7-1.3-3.3 0-1.5.8-2.3 1.1-2.6.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l.9 2.1c.1.2.1.4 0 .6l-.4.8c-.1.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.2.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.9-.1 1.5Z"/></svg>
                WhatsApp
              </a>
              <Magnet><Link className="btn btn-primary" to="/contact">Book a Demo</Link></Magnet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>Intelligent WhatsApp automation &amp; AI-powered CRM systems that put your B2B sales on autopilot.</p>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><Link to="/solutions">WhatsApp AI Assistant</Link></li>
              <li><Link to="/solutions">Admin CRM Dashboard</Link></li>
              <li><Link to="/solutions">Lead Scoring</Link></li>
              <li><Link to="/plans">Plans</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:team@elevateautomation.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>team@elevateautomation.in</a></li>
              <li><a href="tel:+918200191137"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.5a2 2 0 0 1-.6 1.9L7.6 9.8a16 16 0 0 0 6 6l1.7-1.4a2 2 0 0 1 1.9-.6l2.5.5a2 2 0 0 1 1.7 2Z"/></svg>+91 82001 91137</a></li>
              <li><a href="https://wa.me/918200191137" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Z"/></svg>Message us on WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Elevate Automation. All rights reserved.</span>
          <div className="links"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/contact">Contact</Link></div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <>
      <AuroraBackground />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
