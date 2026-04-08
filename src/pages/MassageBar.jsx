import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

const treatments = [
  {
    name: 'Full Body Massage',
    desc: 'Relaxing massage treatment for the whole body to relieve tension, improve circulation and promote overall wellbeing.',

    time: '60 mins',
  },
  {
    name: 'Back Massage',
    desc: 'Targeted massage focusing on the back, neck and shoulders to relieve tension, reduce muscle tightness and promote relaxation.',

    time: '30 mins',
  },
  {
    name: 'Indian Head Massage',
    desc: 'Traditional massage focusing on the head, neck and shoulders to relieve stress, ease tension and promote deep relaxation.',

    time: '30 mins',
  },
]

export default function MassageBar() {
  return (
    <>
      <SEO
        title="Massage Treatments | The Aesthetics and Wellness Sanctuary"
        description="Relaxing massage treatments to relieve tension and promote wellbeing. Book your massage today at The Aesthetics and Wellness Sanctuary."
        keyword="massage treatments"
      />

      <Hero
        headline="Unwind and Restore at Our Massage Bar"
        subheadline="Relaxing massage treatments designed to relieve tension and restore your sense of wellbeing."
        image="/assets/images/AdobeStock_967493104.jpeg"
        ctaText="Book Now"
      />

      <section className="section">
        <div className="container body-content">
          <h2>Relax, Restore and Rejuvenate</h2>
          <p>
            At The Aesthetics and Wellness Sanctuary, our Massage Bar offers a range of therapeutic
            treatments designed to melt away stress and tension. Whether you need targeted relief
            for aching muscles or a full body experience to promote deep relaxation, our skilled
            therapists will tailor each session to your individual needs, leaving you feeling
            refreshed and revitalised.
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
            <div className="split-section__image">
              <img src="/assets/images/AdobeStock_90393332.jpeg" alt="Massage treatment" />
            </div>
            <div className="split-section__text">
              <h2>Why Choose Us?</h2>
              <div className="divider" style={{ margin: '1.5rem 0' }} />
              <p>
                Our therapists combine expert techniques with a genuine passion for wellness,
                ensuring every massage is a deeply relaxing and restorative experience. In our
                intimate home salon, you'll enjoy a peaceful escape from the everyday.
              </p>
              <p>
                We take the time to understand your needs, whether you're seeking relief from
                chronic tension or simply looking to unwind and recharge.
              </p>
              <a
                href="https://facesconsent.com/bookings/lisa-osborn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{ marginTop: '1rem' }}
              >
                Book Your Massage Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
