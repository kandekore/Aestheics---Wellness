import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keyword }) {
  const fullTitle = title || 'The Aesthetics and Wellness Sanctuary'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Your premier haven for facial rejuvenation and holistic wellness in Bromsgrove, Worcestershire.'} />
      {keyword && <meta name="keywords" content={keyword} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Your premier haven for facial rejuvenation and holistic wellness.'} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
    </Helmet>
  )
}
