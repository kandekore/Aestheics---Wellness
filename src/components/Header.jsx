import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-us' },
  { label: 'Aesthetics', to: '/aesthetics-bar' },
  { label: 'Skin', to: '/skin-bar' },
  { label: 'Tattooing', to: '/cosmetic-tattooing-bar' },
  { label: 'Contact', to: '/contact-us' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          <img
            src="/assets/brand/logo_clean_cut.png"
            alt="The Aesthetics and Wellness Sanctuary"
            style={{ maxWidth: '234px', height: 'auto' }}
          />
        </Link>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `header__link ${isActive ? 'header__link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://facesconsent.com/bookings/lisa-osborn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary header__cta"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  )
}
