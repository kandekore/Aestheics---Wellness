import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const serviceItems = [
  { label: 'Aesthetics Bar', to: '/aesthetics-bar' },
  { label: 'Skin Bar', to: '/skin-bar' },
  { label: 'Cosmetic Tattooing', to: '/cosmetic-tattooing-bar' },
  { label: 'Waxing Bar', to: '/waxing-bar' },
  { label: 'Massage Bar', to: '/massage-bar' },
  { label: 'Brow & Lash Bar', to: '/brow-lash-bar' },
]

const servicePaths = serviceItems.map((s) => s.to)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()
  const isServiceActive = servicePaths.includes(location.pathname)

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
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link--active' : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link--active' : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          {/* Desktop dropdown */}
          <div
            className="header__dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`header__link header__dropdown-trigger ${isServiceActive ? 'header__link--active' : ''}`}
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                className={`header__dropdown-arrow ${servicesOpen ? 'header__dropdown-arrow--open' : ''}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`header__dropdown-menu ${servicesOpen ? 'header__dropdown-menu--open' : ''}`}>
              {serviceItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `header__dropdown-item ${isActive ? 'header__dropdown-item--active' : ''}`
                  }
                  onClick={() => {
                    setServicesOpen(false)
                    setMenuOpen(false)
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/consultations"
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link--active' : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Consultations
          </NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link--active' : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

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
