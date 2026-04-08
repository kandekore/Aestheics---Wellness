import './Hero.css'

export default function Hero({ headline, subheadline, image, ctaText, ctaUrl }) {
  return (
    <section
      className="hero"
      style={image ? { backgroundImage: `linear-gradient(rgba(15,15,15,0.45), rgba(15,15,15,0.45)), url(${image})` } : {}}
    >
      <div className="hero__content container">
        <h1 className="hero__headline">{headline}</h1>
        <div className="divider" style={{ backgroundColor: '#fff' }} />
        <p className="hero__subheadline">{subheadline}</p>
        {ctaText && (
          <a
            href={ctaUrl || 'https://facesconsent.com/bookings/lisa-osborn'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary hero__cta"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  )
}
