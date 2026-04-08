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
              <div className="contact-form-card">
                <h3>Send Us a Message</h3>
                <form
                  action="https://formsubmit.co/Aestheticsandwellnesssanctuary@gmail.com"
                  method="POST"
                  className="contact-form"
                >
                  <input type="hidden" name="_subject" value="New enquiry from website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required />
                  </div>
                  <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
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
