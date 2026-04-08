import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

const treatments = [
  {
    name: 'Powder Brow',
    desc: 'A soft, shaded effect achieved using a machine to deposit pigment into the skin, creating a fuller, powdered look. Perfect for those seeking a more defined, soft, and filled-in brow appearance.',
    time: '120 mins',
  },
  {
    name: 'Combi Brow',
    desc: 'A hybrid treatment combining the natural, hair-like strokes of microblading with the soft, powdered finish of brow shading. Gives a fuller, defined brow with a more textured and dimensional look.',
    time: '120 mins',
  },
  {
    name: 'Lip Blush',
    desc: 'A semi-permanent makeup treatment that enhances the natural colour and shape of the lips. Creates a soft, natural flush of colour lasting up to 2-3 years, correcting asymmetry and adding definition.',
    time: '120 mins',
  },
]

export default function CosmeticTattooingBar() {
  return (
    <>
      <SEO
        title="Cosmetic Tattooing Bar - Effortless Beauty"
        description="Enhance your features with our Cosmetic Tattooing Bar. Achieve lasting beauty with our expert semi-permanent makeup services."
        keyword="Cosmetic Tattooing Bar"
      />

      <Hero
        headline="Achieve Effortless Beauty"
        subheadline="Enhance your natural features with our bespoke semi-permanent makeup services."
        image="/assets/images/AdobeStock_1583158775.jpeg"
        ctaText="Book Your Consultation Today"
      />

      <section className="section">
        <div className="container body-content">
          <h2>Welcome to the Cosmetic Tattooing Bar</h2>
          <p>
            At The Aesthetics and Wellness Sanctuary, our Cosmetic Tattooing Bar offers a
            transformative experience that combines artistry with precision. Designed for
            discerning women who seek a refined, natural look, our services will enhance your
            features and simplify your beauty routine.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <div className="divider" />
          <div className="treatments-grid">
            {treatments.map((t) => (
              <div className="treatment-card" key={t.name}>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
                <span style={{ fontSize: '0.8rem', color: '#999', display: 'block', marginBottom: '1rem' }}>
                  Duration: {t.time}
                </span>
                <a
                  href="https://facesconsent.com/bookings/lisa-osborn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="split-section__image">
              <img src="/assets/images/AdobeStock_765070588.jpeg" alt="Cosmetic tattooing" />
            </div>
            <div className="split-section__text">
              <h2>The Process</h2>
              <div className="divider" style={{ margin: '1.5rem 0' }} />
              <p>
                Each treatment begins with a comprehensive consultation where we discuss your
                beauty goals and examine your natural features. Our skilled practitioners use
                high-quality pigments and advanced techniques to ensure a safe and satisfying
                experience.
              </p>
              <p>
                Your comfort and satisfaction are our top priorities, and we take every measure
                to ensure you leave feeling confident and beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container text-center">
          <h2>What Our Clients Say</h2>
          <div className="divider" />
          <blockquote className="testimonial" style={{ maxWidth: '600px', margin: '2rem auto 0' }}>
            <p>
              &ldquo;The best decision I've made for my beauty routine! The results are natural
              and stunning. I feel more confident every day.&rdquo;
            </p>
            <cite>— Sarah, Bromsgrove</cite>
          </blockquote>
        </div>
      </section>
    </>
  )
}
