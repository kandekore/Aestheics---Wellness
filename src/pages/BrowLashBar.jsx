import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

const treatments = [
  {
    name: 'Brow Shape, Wax & Tint',
    desc: 'Eyebrow shaping with wax, followed by brow tint to define and enhance the natural shape. Patch test required at least 24 hours before tinting.',

    time: '30 mins',
  },
  {
    name: 'Lash Tint',
    desc: 'Tint applied to the eyelashes to darken and define the lashes for a fuller, more noticeable look. Patch test required at least 24 hours before treatment.',

    time: '30 mins',
  },
  {
    name: 'Brow Shape, Waxing, Tint & Lash Tint',
    desc: 'Eyebrow shaping with wax, brow tint and lash tint to define and enhance the brows and lashes for a fuller, more polished look. Patch test required at least 24 hours before treatment.',

    time: '30 mins',
  },
]

export default function BrowLashBar() {
  return (
    <>
      <SEO
        title="Brow & Lash Treatments | The Aesthetics and Wellness Sanctuary"
        description="Professional brow shaping, tinting and lash treatments to define and enhance your natural features. Book today."
        keyword="brow and lash treatments"
      />

      <Hero
        headline="Define Your Look at Our Brow & Lash Bar"
        subheadline="Expert brow shaping, tinting and lash treatments to frame your features beautifully."
        image="/assets/images/AdobeStock_215050004.jpeg"
        ctaText="Book Now"
      />

      <section className="section">
        <div className="container body-content">
          <h2>Perfectly Defined Brows and Lashes</h2>
          <p>
            At The Aesthetics and Wellness Sanctuary, our Brow &amp; Lash Bar is dedicated to
            enhancing your natural features with precision and care. From expert brow shaping to
            lash tinting, our treatments are designed to give you a polished, effortless look that
            lasts. Please note that a patch test is required at least 24 hours before any tinting
            treatment.
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
                Our skilled professionals take pride in delivering precise, tailored results that
                enhance your natural beauty. In our welcoming home salon, every treatment is
                carried out with care and attention to detail.
              </p>
              <p>
                We'll work with you to find the perfect shape and shade to complement your features,
                so you leave feeling confident and polished.
              </p>
            </div>
            <div className="split-section__image">
              <img src="/assets/images/AdobeStock_1583158775.jpeg" alt="Brow and lash treatment" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
