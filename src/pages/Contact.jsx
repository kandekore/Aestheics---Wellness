import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact The Aesthetics and Wellness Sanctuary"
        description="Get in touch with The Aesthetics and Wellness Sanctuary for expert skincare advice and personalized beauty treatments."
        keyword="Contact The Aesthetics and Wellness Sanctuary"
      />

      <Hero
        headline="Connect with Your Beauty Experts"
        subheadline="Reach out to us for personalised beauty and wellness advice. We're here to help you glow!"
        image="/assets/images/AdobeStock_215050004.jpeg"
        ctaText="Book Your Appointment Now"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                At The Aesthetics and Wellness Sanctuary, your journey to enhanced beauty and
                wellness begins with a simple conversation. Whether you have questions about our
                treatments, wish to book a consultation, or need expert advice tailored to your
                unique needs, we are here to assist you.
              </p>

              <h3>Visit Our Sanctuary</h3>
              <p>
                Experience the warmth and intimacy of our luxury home salon in person. Nestled in
                the heart of Worcestershire, our sanctuary offers a serene escape from the hustle
                and bustle of everyday life. To ensure personalised attention, we kindly ask that
                you schedule your visit in advance through our booking platform.
              </p>

              <h3>Our Location</h3>
              <p>
                Conveniently located in Bromsgrove, we are easily accessible for clients from
                Redditch, Droitwich, and South Birmingham. Our address and detailed directions
                will be provided upon booking confirmation.
              </p>
            </div>

            <div>
              <div className="section-card" style={{ marginBottom: '1.5rem' }}>
                <h3>Ready to Book?</h3>
                <p>
                  Take the first step towards radiant skin and enhanced beauty. Click the button
                  below to schedule your appointment and start your journey with us today.
                </p>
                <a
                  href="https://facesconsent.com/bookings/lisa-osborn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ marginTop: '1rem' }}
                >
                  Book Your Appointment
                </a>
              </div>

              <div className="section-card">
                <h3>Frequently Asked Questions</h3>
                <div style={{ marginTop: '1rem' }}>
                  <p><strong>How do I schedule an appointment?</strong></p>
                  <p>
                    You can easily book your appointment through our online booking platform by
                    clicking the 'Book Now' button.
                  </p>
                  <p><strong>What should I expect during my first visit?</strong></p>
                  <p>
                    Your first visit includes a comprehensive consultation to understand your needs
                    and tailor treatments to your preferences.
                  </p>
                  <p><strong>What if I need to reschedule?</strong></p>
                  <p>
                    Simply contact us at least 24 hours in advance, and we'll be happy to
                    accommodate your new schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container text-center">
          <h2>Meet Our Experts</h2>
          <div className="divider" />
          <p className="intro-text">
            Our team of professionals combines years of experience in beauty and healthcare to
            offer treatments that are both effective and safe. We're passionate about helping you
            achieve your beauty goals with personalised care.
          </p>
        </div>
      </section>
    </>
  )
}
