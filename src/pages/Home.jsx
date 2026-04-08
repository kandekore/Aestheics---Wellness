import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

const services = [
  {
    title: 'Aesthetics Bar',
    desc: 'Non-surgical solutions including fat dissolving, dermal fillers, and anti-wrinkle treatments for a youthful, defined appearance.',
    image: '/assets/images/AdobeStock_703596744.jpeg',
    link: '/aesthetics-bar',
  },
  {
    title: 'Skin Bar',
    desc: 'From microneedling to chemical peels, our advanced skincare solutions rejuvenate your complexion and restore radiance.',
    image: '/assets/images/AdobeStock_430724887.jpeg',
    link: '/skin-bar',
  },
  {
    title: 'Cosmetic Tattooing',
    desc: 'Semi-permanent makeup services including powder brow, combi brow, and lip blush for effortless, lasting beauty.',
    image: '/assets/images/AdobeStock_765070588.jpeg',
    link: '/cosmetic-tattooing-bar',
  },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Luxury Home Salon in Worcestershire - The Aesthetics Sanctuary"
        description="Discover a luxury home salon experience in Worcestershire. Personalized care, expert treatments. Book now for radiant, youthful beauty."
        keyword="luxury home salon"
      />

      <Hero
        headline="Transform Your Beauty Experience"
        subheadline="Discover personalised luxury treatments in a serene home salon setting."
        image="/assets/images/AdobeStock_430724887.jpeg"
        ctaText="Book Your Consultation"
      />

      <section className="section">
        <div className="container text-center">
          <h2>Welcome to The Aesthetics and Wellness Sanctuary</h2>
          <div className="divider" />
          <p className="intro-text">
            Step into a world where beauty meets care. We blend expertise in beauty and healthcare
            to provide treatments that are not only luxurious but safe and personalised to your
            unique needs. Our mission is to enhance your natural beauty while ensuring a comforting
            and intimate setting, far removed from the hustle and bustle of larger spas.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="text-center">Our Signature Treatments</h2>
          <div className="divider" />
          <div className="services-grid">
            {services.map((service) => (
              <Link to={service.link} key={service.title} className="service-card">
                <div className="service-card__image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-card__content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span className="service-card__link">Discover More</span>
                </div>
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
              <ul className="feature-list">
                <li>
                  <strong>Personalised Care:</strong> Every treatment begins with a detailed
                  consultation to tailor our services to your specific requirements.
                </li>
                <li>
                  <strong>Expertise & Safety:</strong> With backgrounds in beauty and nursing,
                  we ensure each service is performed with precision and care.
                </li>
                <li>
                  <strong>Intimate Environment:</strong> Our cosy setting provides a relaxing
                  atmosphere where you can feel special and valued.
                </li>
              </ul>
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
            <div className="split-section__image">
              <img
                src="/assets/images/AdobeStock_967493104.jpeg"
                alt="Luxury skincare treatment"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container text-center">
          <h2>What Our Clients Say</h2>
          <div className="divider" />
          <div className="testimonials-grid">
            <blockquote className="testimonial">
              <p>
                &ldquo;The Aesthetics and Wellness Sanctuary is my go-to place for skincare.
                The personalised approach and professional care make every visit a delight!&rdquo;
              </p>
              <cite>— Sarah, Bromsgrove</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>
                &ldquo;I love the intimate setting and the expertise Lisa and her team bring to
                every treatment. My skin has never felt better!&rdquo;
              </p>
              <cite>— Emma, Redditch</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2>Ready to Transform?</h2>
          <div className="divider" />
          <p>Book your personalised consultation today and discover the difference.</p>
          <a
            href="https://facesconsent.com/bookings/lisa-osborn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginTop: '1rem' }}
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </>
  )
}
