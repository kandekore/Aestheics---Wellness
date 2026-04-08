import { useState } from 'react'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import './Pages.css'

const faqs = [
  {
    q: 'What is microneedling and how does it benefit my skin?',
    a: 'Microneedling is a minimally invasive treatment that uses tiny, controlled needles to stimulate collagen production. It\'s ideal for enhancing skin texture, reducing fine lines, acne scars, and hyperpigmentation. The natural healing process it initiates leaves your complexion smoother, firmer, and more youthful.',
  },
  {
    q: 'How do skin boosters work?',
    a: 'Skin boosters are injectable treatments designed to hydrate and rejuvenate the skin from within. By using hyaluronic acid, they improve texture, elasticity, and radiance, offering a plump, refreshed, and more youthful appearance. They are perfect for anyone looking to restore skin vitality.',
  },
  {
    q: 'What can I expect from dermal fillers?',
    a: 'Dermal fillers are injectable treatments that enhance the shape, volume, and symmetry of facial features. Using hyaluronic acid, they deliver natural-looking results by adding definition, restoring fullness, and creating a smoother, more youthful appearance, especially in areas like the lips, nasolabial folds, and marionette lines.',
  },
  {
    q: 'How do anti-wrinkle treatments work?',
    a: 'Our anti-wrinkle treatments use Botox to temporarily relax facial muscles, reducing the appearance of fine lines and wrinkles. This non-surgical solution offers a smoother, rejuvenated appearance, targeting areas like the forehead, frown lines, and crow\'s feet.',
  },
  {
    q: 'How can I book a treatment?',
    a: 'Booking a treatment is easy! Simply click on the \'Book Now\' button that links to our secure booking platform. Our friendly team is also available to assist with any booking enquiries.',
  },
  {
    q: 'What happens during a consultation?',
    a: 'During a consultation, our professionals evaluate your skin type, discuss your skincare goals, and recommend tailored treatments. You\'ll receive expert guidance to help you achieve healthier, radiant skin.',
  },
  {
    q: 'How do you ensure treatment safety?',
    a: 'With our dual expertise in beauty and healthcare, your safety is our top priority. We adhere to the highest standards of care, using only industry-approved products and techniques. Each treatment is performed by experienced professionals dedicated to delivering optimal results.',
  },
  {
    q: 'What is fat dissolving treatment?',
    a: 'Fat dissolving is a non-surgical treatment that targets and reduces stubborn fat in areas such as the chin, stomach, thighs, and arms. It works by breaking down fat cells, which are naturally eliminated by the body, helping to sculpt and contour for a slimmer, more defined appearance.',
  },
  {
    q: 'What is semi-permanent makeup?',
    a: 'Semi-permanent makeup, also known as cosmetic tattooing, involves depositing pigment into the skin to enhance natural features. Our treatments include powder brow, combi brow, and lip blush, offering long-lasting results that simplify your daily beauty routine.',
  },
  {
    q: 'How long do results last?',
    a: 'Results vary depending on the treatment. Anti-wrinkle treatments typically last 3-4 months, dermal fillers 6-18 months, and semi-permanent makeup 1-3 years. Our practitioners will discuss expected longevity during your consultation.',
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {faq.q}
        <span className={open ? 'open' : ''}>+</span>
      </button>
      {open && <div className="faq-answer">{faq.a}</div>}
    </div>
  )
}

export default function FAQs() {
  return (
    <>
      <SEO
        title="Aesthetics and Wellness FAQs | Expert Insights and Guidance"
        description="Explore our FAQs to learn about treatments and book your consultation for expert skincare."
        keyword="Aesthetics and Wellness FAQs"
      />

      <Hero
        headline="Your Beauty Questions Answered"
        subheadline="Discover expert insights and detailed information about our treatments."
        image="/assets/images/AdobeStock_215050004.jpeg"
        ctaText="Book Your Consultation Today"
      />

      <section className="section">
        <div className="container">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <div className="divider" />
          <p className="text-center intro-text" style={{ marginBottom: '3rem' }}>
            At The Aesthetics and Wellness Sanctuary, we understand that choosing the right beauty
            or skincare treatment can be daunting. Here are answers to our most commonly asked
            questions.
          </p>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container text-center">
          <h2>Still Have Questions?</h2>
          <div className="divider" />
          <p className="intro-text">
            Our friendly team is here to help. Book a complimentary consultation and we'll be
            happy to discuss any concerns or questions you may have about our treatments.
          </p>
          <a
            href="https://facesconsent.com/bookings/lisa-osborn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginTop: '1.5rem' }}
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  )
}
