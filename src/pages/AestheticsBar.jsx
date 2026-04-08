import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

const treatments = [
  {
    name: 'Lemon Bottle Fat Dissolving — Small Area',
    desc: 'A non-surgical solution to reduce stubborn pockets of fat in areas such as the jaw and double chin, helping to contour and sculpt for a more defined appearance.',
    time: '30 mins',
  },
  {
    name: 'Lemon Bottle Fat Dissolving — Medium Area',
    desc: 'Target stubborn fat on the back and arms with this non-surgical treatment that breaks down fat cells, naturally eliminated by the body for a slimmer silhouette.',
    time: '30 mins',
  },
  {
    name: 'Lemon Bottle Fat Dissolving — Large Area',
    desc: 'Effective fat dissolving treatment for larger areas such as the stomach and thighs, sculpting and contouring for a more defined appearance.',
    time: '45 mins',
  },
  {
    name: 'Full Body Lipo',
    desc: 'Comprehensive non-surgical fat dissolving treatment using 10 vials, targeting any areas of your choice for an all-over sculpted, contoured look.',
    time: '60 mins',
  },
  {
    name: '1.1ml Dermal Filler',
    desc: 'Enhance the shape, volume, and symmetry of your lips with hyaluronic acid-based dermal fillers for natural-looking, fuller results.',
    time: '30 mins',
  },
  {
    name: '0.5ml Dermal Filler',
    desc: 'A subtle enhancement for your lips, adding definition and restoring lost fullness with a natural, youthful appearance.',
    time: '30 mins',
  },
  {
    name: 'Marionette Filler',
    desc: 'Smooths and lifts lines from the corners of the mouth, restoring volume and support for a refreshed, youthful look and enhanced facial harmony.',
    time: '30 mins',
  },
  {
    name: 'Nasolabial Filler',
    desc: 'Targets smile lines running from nose to mouth, restoring lost volume and softening deep folds for a smoother, more youthful appearance.',
    time: '30 mins',
  },
  {
    name: 'B12 Injection',
    desc: 'A quick, effective treatment to boost energy, support metabolism, reduce fatigue, improve focus, and promote overall wellbeing.',
    time: '30 mins',
  },
  {
    name: 'Anti-Wrinkle — 3 Areas',
    desc: 'Treat forehead, frown lines, and crow\'s feet with botulinum toxin to temporarily relax facial muscles, reducing fine lines for a refreshed appearance.',
    time: '60 mins',
  },
  {
    name: 'Anti-Wrinkle — 2 Areas',
    desc: 'Choose two areas from forehead, frown lines, or crow\'s feet for targeted anti-wrinkle treatment with prescription fee included.',
    time: '60 mins',
  },
  {
    name: 'Anti-Wrinkle — 1 Area',
    desc: 'Focused treatment on a single area — forehead, frown lines, or crow\'s feet — for a smoother, rejuvenated look.',
    time: '60 mins',
  },
]

export default function AestheticsBar() {
  return (
    <>
      <SEO
        title="Aesthetic Treatments for a Radiant You"
        description="Discover personalised aesthetic treatments for youthful, radiant beauty. Book now for a tailored experience."
        keyword="Aesthetic treatments"
      />

      <Hero
        headline="Transform Your Beauty with Precision"
        subheadline="Discover personalised aesthetic solutions for a youthful, radiant you."
        image="/assets/images/AdobeStock_703596744.jpeg"
        ctaText="Book Now"
      />

      <section className="section">
        <div className="container body-content">
          <h2>Welcome to the Aesthetics Bar</h2>
          <p>
            At The Aesthetics and Wellness Sanctuary, our Aesthetics Bar is where science meets
            beauty. We offer a range of cutting-edge treatments designed to enhance your natural
            features and restore youthful vitality. Our personalised approach ensures that every
            treatment is tailored to your individual needs, providing results that are both stunning
            and subtle.
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
              <img src="/assets/images/AdobeStock_90393332.jpeg" alt="Anti-wrinkle treatment" />
            </div>
            <div className="split-section__text">
              <h2>Why Choose Us?</h2>
              <div className="divider" style={{ margin: '1.5rem 0' }} />
              <p>
                Our unique combination of beauty and healthcare expertise sets us apart. As friends
                with a shared passion for aesthetics, we bring a personal touch to every treatment.
                Our home salon provides a warm and intimate environment where you can relax and trust
                in the care of knowledgeable professionals.
              </p>
              <p>
                Safety, precision, and individualised attention are at the heart of everything we do.
              </p>
              <a
                href="https://facesconsent.com/bookings/lisa-osborn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{ marginTop: '1rem' }}
              >
                Book Your Consultation Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
