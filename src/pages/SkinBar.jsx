import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

const treatments = [
  {
    name: 'Microneedling Facial',
    desc: 'A skin rejuvenation treatment using tiny, controlled needles to stimulate collagen production, improving skin texture and elasticity. Ideal for reducing fine lines, acne scars, and hyperpigmentation.',
    time: '45 mins',
  },
  {
    name: 'Microneedling Course',
    desc: '4 sessions of microneedling for the price of 3. Enhance skin texture and elasticity with this course, ideal for long-term skin rejuvenation and collagen stimulation.',
    time: '45 mins per session',
  },
  {
    name: 'Microneedling Deluxe — Kiara Reju',
    desc: 'An innovative Korean microneedling serum combining polynucleotide, hyaluronic acid, and niacinamide. The powerful trio improves skin texture, elasticity, and tone whilst reducing fine lines and pigmentation.',
    time: '45 mins',
  },
  {
    name: 'Dermaplaning',
    desc: 'Exfoliation that removes dead skin cells and peach fuzz, exposing younger, brighter skin. Helps reduce fine lines and wrinkles naturally, leaving your face with a smoother texture.',
    time: '45 mins',
  },
  {
    name: 'Skin Boosters',
    desc: 'An injectable treatment designed to deeply hydrate and rejuvenate the skin from within using hyaluronic acid, improving texture, elasticity, and radiance for a plump, refreshed appearance.',
    time: '30 mins',
  },
  {
    name: 'Skin Booster Package',
    desc: 'Three sessions of skin boosters, four weeks apart, for a comprehensive hydration and rejuvenation programme restoring moisture and enhancing skin quality.',
    time: '30 mins per session',
  },
  {
    name: 'Polynucleotides — Face, Neck or Decolletage',
    desc: 'Advanced skin rejuvenation using naturally occurring molecules to stimulate collagen production and promote cellular repair, providing deep hydration and improved elasticity.',
    time: '45 mins',
  },
  {
    name: 'Polynucleotides — Eyes',
    desc: 'Particularly effective for delicate under-eye areas, addressing dark circles, fine lines, and puffiness whilst enhancing overall skin tone and firmness.',
    time: '30 mins',
  },
  {
    name: 'Chemical Peel',
    desc: 'Exfoliates the skin using a specially formulated solution to reveal smoother, brighter, more even-toned skin. Reduces fine lines, acne scars, sun damage, and hyperpigmentation.',
    time: '30 mins',
  },
  {
    name: 'The Basic Facial',
    desc: 'A simple yet effective treatment to cleanse, exfoliate, and hydrate your skin. Includes gentle cleansing, exfoliation, a relaxing mask, facial massage, and moisturiser with sunscreen.',
    time: '30 mins',
  },
  {
    name: 'Korean Glass Skin Facial',
    desc: 'A multi-step facial inspired by renowned Korean skincare routines, focusing on deep cleansing, hydration, and skin renewal for a smooth, luminous complexion.',
    time: '30 mins',
  },
  {
    name: 'Sanctuary Signature Facial',
    desc: 'Our luxurious multi-step facial includes cleansing, exfoliation, microneedling for collagen stimulation, skin boosters for hydration, and a soothing enzyme repair mask for a radiant glow.',
    time: '60 mins',
  },
]

export default function SkinBar() {
  return (
    <>
      <SEO
        title="Skin Rejuvenation Treatments at The Aesthetics and Wellness Sanctuary"
        description="Discover personalized skin rejuvenation treatments for radiant skin at The Aesthetics and Wellness Sanctuary. Book your session today."
        keyword="Skin Rejuvenation Treatments"
      />

      <Hero
        headline="Revitalise Your Skin at Our Skin Bar"
        subheadline="Experience rejuvenating treatments tailored to elevate your natural beauty and restore your skin's youthful glow."
        image="/assets/images/AdobeStock_1807259057.jpeg"
        ctaText="Book Now"
      />

      <section className="section">
        <div className="container body-content">
          <h2>Unveil Your Radiance with Expert Care</h2>
          <p>
            At The Aesthetics and Wellness Sanctuary, our Skin Bar is dedicated to enhancing your
            natural beauty through personalised skincare solutions. Our treatments are meticulously
            designed to address individual skin concerns, ensuring that you leave feeling refreshed
            and revitalised. With our blend of advanced techniques and luxurious pampering, your
            skin will look and feel its best.
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
                Our unique approach combines the expertise of beauty and healthcare professionals,
                ensuring your treatments are not only indulgent but also safe and effective. In our
                cosy home salon, we provide a welcoming atmosphere where every client feels special.
              </p>
              <p>
                Our personalised consultations allow us to tailor treatments specifically for your
                skin's needs, delivering results that are both immediate and long-lasting.
              </p>
            </div>
            <div className="split-section__image">
              <img src="/assets/images/AdobeStock_430724887.jpeg" alt="Facial treatment" />
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
                &ldquo;The microneedling facial was a game-changer for my skin. It feels firmer
                and looks more radiant than ever!&rdquo;
              </p>
              <cite>— Sarah, Bromsgrove</cite>
            </blockquote>
            <blockquote className="testimonial">
              <p>
                &ldquo;I love the personalised care and attention at The Aesthetics and Wellness
                Sanctuary. My skin has never looked better.&rdquo;
              </p>
              <cite>— Emma, Redditch</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  )
}
