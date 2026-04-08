import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

const serviceHighlights = [
  { name: 'Aesthetics Bar', desc: 'Fat dissolving, dermal fillers, anti-wrinkle treatments, and B12 injections.', link: '/aesthetics-bar' },
  { name: 'Skin Bar', desc: 'Microneedling, dermaplaning, skin boosters, polynucleotides, chemical peels, and luxury facials.', link: '/skin-bar' },
  { name: 'Cosmetic Tattooing', desc: 'Powder brow, combi brow, and lip blush semi-permanent makeup.', link: '/cosmetic-tattooing-bar' },
  { name: 'Wellness', desc: 'Full body massage, back massage, Indian head massage, and waxing services.', link: '/contact-us' },
]

export default function LocationPage({ title, subtitle, seoTitle, seoDescription, location }) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />

      <Hero
        headline={title}
        subheadline={subtitle}
        image="/assets/images/AdobeStock_430724887.jpeg"
        ctaText="Book Your Consultation Now"
      />

      <section className="section">
        <div className="container body-content">
          <h2>Welcome to Your Sanctuary</h2>
          <p>
            At The Aesthetics and Wellness Sanctuary, we believe that every individual deserves a
            personalised beauty and skincare experience. Conveniently located near {location}, our
            boutique home salon offers a haven where you can relax and rejuvenate, confident in the
            care of experienced professionals. Our unique blend of beauty and healthcare expertise
            ensures that you receive treatments that are not only luxurious but also safe and
            effective.
          </p>

          <h2>Tailored Skincare Solutions</h2>
          <p>
            Our array of advanced skincare treatments is designed to meet the unique needs of your
            skin. Whether you're looking to enhance your skin texture, reduce fine lines, or
            rejuvenate your complexion, we have the perfect solution.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="text-center">Our Services for {location} Clients</h2>
          <div className="divider" />
          <div className="sections-grid">
            {serviceHighlights.map((service) => (
              <Link to={service.link} key={service.name} className="section-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <span className="service-card__link" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                  Learn More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__text">
              <h2>Why Choose Us?</h2>
              <div className="divider" style={{ margin: '1.5rem 0' }} />
              <p>
                What sets The Aesthetics and Wellness Sanctuary apart is our commitment to
                personalised care. As two friends with backgrounds in beauty and nursing, we offer
                a unique approach that combines luxury with a deep commitment to your safety and
                wellbeing.
              </p>
              <ul className="feature-list">
                <li>Personalised treatment plans tailored to your specific skin concerns</li>
                <li>A warm, welcoming atmosphere where you can truly relax</li>
                <li>Professional expertise combining beauty and healthcare knowledge</li>
                <li>A commitment to using the highest quality products and techniques</li>
              </ul>
              <a
                href="https://facesconsent.com/bookings/lisa-osborn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{ marginTop: '1.5rem' }}
              >
                Book Your Appointment
              </a>
            </div>
            <div className="split-section__image">
              <img
                src="/assets/images/AdobeStock_967493104.jpeg"
                alt={`Skincare treatments near ${location}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container text-center">
          <h2>Ready to Transform Your Skin?</h2>
          <div className="divider" />
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto' }}>
            Book a consultation with us today to begin your journey to radiant, rejuvenated skin.
            We welcome clients from {location} and the surrounding areas.
          </p>
          <a
            href="https://facesconsent.com/bookings/lisa-osborn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginTop: '1.5rem' }}
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  )
}
