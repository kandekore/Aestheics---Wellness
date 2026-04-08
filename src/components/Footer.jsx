import { Link } from 'react-router-dom'
import './Footer.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-us' },
  { label: 'Aesthetics', to: '/aesthetics-bar' },
  { label: 'Skin', to: '/skin-bar' },
  { label: 'Tattooing', to: '/cosmetic-tattooing-bar' },
  { label: 'Contact', to: '/contact-us' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <img
            src="/assets/brand/logo_clean_cut.png"
            alt="The Aesthetics and Wellness Sanctuary"
            className="footer__logo"
          />
          <p className="footer__tagline">
            Your premier haven for facial rejuvenation and holistic wellness.
          </p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <nav>
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="footer__link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer__services">
          <h4>Our Services</h4>
          <nav>
            <Link to="/aesthetics-bar" className="footer__link">Aesthetics Bar</Link>
            <Link to="/skin-bar" className="footer__link">Skin Bar</Link>
            <Link to="/cosmetic-tattooing-bar" className="footer__link">Cosmetic Tattooing</Link>
            <Link to="/consultations" className="footer__link">Consultations</Link>
            <Link to="/faqs" className="footer__link">FAQs</Link>
          </nav>
        </div>

        <div className="footer__areas">
          <h4>Areas We Serve</h4>
          <nav>
            <Link to="/services-in-bromsgrove" className="footer__link">Bromsgrove</Link>
            <Link to="/services-in-redditch" className="footer__link">Redditch</Link>
            <Link to="/services-in-droitwich" className="footer__link">Droitwich</Link>
            <Link to="/services-in-birmingham" className="footer__link">Birmingham</Link>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} The Aesthetics and Wellness Sanctuary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
