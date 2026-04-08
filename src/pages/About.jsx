import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

export default function About() {
  return (
    <>
      <SEO
        title="About Us - Aesthetics and Wellness Sanctuary"
        description="Learn about The Aesthetics and Wellness Sanctuary where beauty meets care in a luxurious setting."
        keyword="Aesthetics and Wellness Sanctuary"
      />

      <Hero
        headline="Discover Your Sanctuary"
        subheadline="Where beauty meets care in a luxurious, intimate setting."
        image="/assets/images/AdobeStock_967493104.jpeg"
        ctaText="Book Your Consultation Now"
      />

      <section className="section">
        <div className="container body-content">
          <h2>Welcome to The Aesthetics and Wellness Sanctuary</h2>
          <p>
            At The Aesthetics and Wellness Sanctuary, we are more than just a beauty clinic; we are
            a haven for those seeking to enhance their natural beauty with expert care and attention.
            Founded by two friends with extensive backgrounds in both beauty and nursing, we bring a
            unique blend of luxury and clinical expertise to every treatment. Our cosy home salon
            offers a warm, inviting atmosphere where you can relax and rejuvenate, knowing you're in
            safe, skilled hands.
          </p>

          <h2>Our Unique Approach</h2>
          <p>
            What sets us apart is our commitment to personalised care. We believe that beauty is
            deeply individual, and so are our treatments. Every client receives a bespoke
            consultation, ensuring that each service is tailored to meet their specific needs and
            desires. We take pride in providing a personalised experience that combines the latest
            advancements in skincare with a nurturing touch.
          </p>

          <h2>Our Expertise</h2>
          <p>
            Our team consists of highly trained professionals who are passionate about delivering
            exceptional results. With a dual focus on aesthetics and wellness, we offer a
            comprehensive range of treatments including facials, dermal fillers, anti-wrinkle
            treatments, and advanced skincare solutions like polynucleotide treatments. Our
            background in healthcare ensures that we maintain the highest standards of safety and
            hygiene, giving you peace of mind as you indulge in our luxurious services.
          </p>

          <h2>Client-Centric Experience</h2>
          <p>
            We understand the importance of feeling confident and cared for. This is why every
            visit to our sanctuary is crafted to be a transformative experience. Our clients
            appreciate our dedication to creating a serene environment where they feel truly
            special and valued. It's not just about the treatments, but the entire journey — from
            the moment you step through our doors to the moment you leave, feeling refreshed and
            revitalised.
          </p>

          <h2>Our Promise</h2>
          <ul>
            <li>Individualised consultations to tailor each treatment</li>
            <li>Expert practitioners with a commitment to excellence</li>
            <li>A luxurious, intimate setting for a relaxing experience</li>
            <li>A focus on safety, hygiene, and client satisfaction</li>
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container text-center">
          <h2>Join Our Sanctuary</h2>
          <div className="divider" />
          <p className="intro-text">
            Join us at The Aesthetics and Wellness Sanctuary, where every treatment is a step
            towards enhancing your natural beauty and boosting your confidence. We invite you to
            book a consultation and discover the difference that personalised, professional care
            can make in your beauty regimen.
          </p>
          <a
            href="https://facesconsent.com/bookings/lisa-osborn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginTop: '1.5rem' }}
          >
            Book Your Consultation Now
          </a>
        </div>
      </section>
    </>
  )
}
