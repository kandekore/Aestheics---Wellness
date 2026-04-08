import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

export default function Consultations() {
  return (
    <>
      <SEO
        title="Personalised Skincare Consultations | The Aesthetics Sanctuary"
        description="Discover tailored skincare solutions with our expert consultations for radiant, healthy skin."
        keyword="personalised skincare consultations"
      />

      <Hero
        headline="Personalised Skincare Consultations"
        subheadline="Discover tailored treatments for radiant skin. Let our experts guide you to a healthier, more glowing complexion."
        image="/assets/images/AdobeStock_967493104.jpeg"
        ctaText="Schedule Your Consultation"
      />

      <section className="section">
        <div className="container body-content">
          <h2>Experience Bespoke Skincare Solutions</h2>
          <p>
            At The Aesthetics and Wellness Sanctuary, we believe that every individual's skin is
            unique. Our personalised skincare consultations are designed to address your specific
            skin concerns and goals. During these sessions, our experienced professionals will
            evaluate your skin type and condition, discuss your skincare aspirations, and recommend
            treatments that are perfectly suited to enhance your natural beauty.
          </p>

          <h2>A Tailored Approach to Your Skin</h2>
          <p>
            Our consultations are more than just a discussion; they are a comprehensive analysis of
            your skin's needs. We start by understanding your skincare history, lifestyle, and
            personal preferences. This information helps us craft a bespoke treatment plan that
            targets your concerns effectively. Whether you're dealing with fine lines, uneven skin
            tone, or loss of elasticity, our experts provide the guidance you need to achieve
            healthier, radiant skin.
          </p>

          <h2>Why Consultations Matter</h2>
          <p>Without proper guidance, skincare can be overwhelming. Our consultations demystify the process and empower you with knowledge and confidence. We focus on:</p>
          <ul>
            <li>Assessing skin type and concerns</li>
            <li>Understanding your skincare goals</li>
            <li>Recommending personalised treatments</li>
            <li>Providing insights into maintaining skin health</li>
          </ul>
          <p>
            With expert advice, you can make informed decisions about your skincare regimen,
            ensuring optimal results and long-term benefits.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container text-center">
          <h2>Book Your Consultation Today</h2>
          <div className="divider" />
          <p className="intro-text">
            Our commitment to personalised care means you're never just another client. Your
            consultation is the first step towards achieving your ideal skin. With no obligation,
            it's an opportunity to explore the possibilities and see how our expert treatments can
            transform your skin.
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

      <section className="section">
        <div className="container">
          <div className="sections-grid">
            <div className="section-card">
              <h3>Consultation</h3>
              <p>
                A personalised face treatment designed to address your unique skin concerns. Our
                experienced professionals will evaluate your skin type, discuss your skincare goals,
                and recommend tailored treatments to enhance your complexion.
              </p>
              <p style={{ marginTop: '0.75rem' }}><strong>Duration:</strong> 15 mins</p>
              <a
                href="https://facesconsent.com/bookings/lisa-osborn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                style={{ marginTop: '1rem' }}
              >
                Book Now
              </a>
            </div>
            <div className="section-card">
              <h3>Patch Test</h3>
              <p>
                A specialised test designed to assess skin sensitivity and compatibility with
                various products. This preliminary test ensures a safe and personalised skincare
                experience tailored to your unique needs.
              </p>
              <p style={{ marginTop: '0.75rem' }}><strong>Duration:</strong> 15 mins</p>
              <a
                href="https://facesconsent.com/bookings/lisa-osborn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                style={{ marginTop: '1rem' }}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
