import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

const treatments = [
  {
    name: 'Full Leg',
    desc: 'Removal of unwanted hair from the entire leg, including thighs, knees, lower legs and feet if required, using warm wax. Leaves skin smooth and hair-free for up to several weeks.',

    time: '45 mins',
  },
  {
    name: 'Half Leg',
    desc: 'Removal of unwanted hair from half the leg (upper or lower) using warm wax. Leaves skin smooth and hair-free for several weeks.',

    time: '30 mins',
  },
  {
    name: 'Bikini',
    desc: 'Removal of unwanted hair from the bikini area using warm wax. Leaves skin smooth and hair-free for several weeks.',

    time: '30 mins',
  },
  {
    name: 'Underarm',
    desc: 'Removal of unwanted hair from the underarm area using warm wax, leaving skin smooth and clean.',

    time: '30 mins',
  },
  {
    name: 'Forearm',
    desc: 'Removal of unwanted hair from half the arm (upper or lower).',

    time: '30 mins',
  },
  {
    name: 'Upper Lip',
    desc: 'Removal of unwanted hair from the upper lip area.',

    time: '15 mins',
  },
  {
    name: 'Chin',
    desc: 'Removal of unwanted hair from the chin area.',

    time: '15 mins',
  },
  {
    name: 'Lip & Chin',
    desc: 'Removal of unwanted hair from the upper lip and chin.',

    time: '15 mins',
  },
]

export default function WaxingBar() {
  return (
    <>
      <SEO
        title="Waxing Treatments | The Aesthetics and Wellness Sanctuary"
        description="Professional waxing services for smooth, hair-free skin. Book your waxing appointment today at The Aesthetics and Wellness Sanctuary."
        keyword="waxing treatments"
      />

      <Hero
        headline="Smooth, Silky Skin at Our Waxing Bar"
        subheadline="Professional waxing treatments for lasting smoothness and confidence."
        image="/assets/images/AdobeStock_1583158775.jpeg"
        ctaText="Book Now"
      />

      <section className="section">
        <div className="container body-content">
          <h2>Expert Waxing for Effortlessly Smooth Skin</h2>
          <p>
            At The Aesthetics and Wellness Sanctuary, our Waxing Bar offers a range of professional
            waxing treatments designed to leave your skin feeling silky smooth. Using high-quality
            warm wax and expert techniques, we ensure a comfortable experience with long-lasting
            results. Whether you're preparing for a special occasion or maintaining your regular
            routine, our waxing services are tailored to your needs.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="text-center">Our Treatments</h2>
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
            <div className="split-section__text">
              <h2>Why Choose The Aesthetics and Wellness Sanctuary?</h2>
              <div className="divider" style={{ margin: '1.5rem 0' }} />
              <p>
                Our experienced professionals use premium products and gentle techniques to ensure
                your comfort throughout every treatment. In our cosy home salon, we provide a
                welcoming and relaxing atmosphere where you can feel at ease.
              </p>
              <p>
                We take the time to understand your preferences and skin sensitivity, delivering
                results that leave you feeling confident and smooth.
              </p>
            </div>
            <div className="split-section__image">
              <img src="/assets/images/AdobeStock_430724887.jpeg" alt="Waxing treatment" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
