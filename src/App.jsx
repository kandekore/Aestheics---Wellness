import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import AestheticsBar from './pages/AestheticsBar'
import SkinBar from './pages/SkinBar'
import CosmeticTattooingBar from './pages/CosmeticTattooingBar'
import Contact from './pages/Contact'
import Consultations from './pages/Consultations'
import FAQs from './pages/FAQs'
import LocationPage from './pages/LocationPage'
import FloatingBookButton from './components/FloatingBookButton'

const locations = [
  {
    slug: 'services-in-redditch',
    title: 'Luxury Skincare & Beauty in Redditch',
    subtitle: 'Discover personalised treatments that enhance your natural beauty and rejuvenate your skin in a warm, intimate setting.',
    seoTitle: 'Skincare Services in Redditch - Aesthetics & Wellness Sanctuary',
    seoDescription: 'Discover personalised skincare services in Redditch at The Aesthetics and Wellness Sanctuary. Enhance your beauty and rejuvenate your skin today.',
    location: 'Redditch',
  },
  {
    slug: 'services-in-droitwich',
    title: 'Luxury Skincare in Droitwich',
    subtitle: 'Experience bespoke beauty treatments tailored to your needs in our intimate home salon.',
    seoTitle: 'Luxury Skincare Services in Droitwich',
    seoDescription: 'Discover bespoke skincare in Droitwich at The Aesthetics and Wellness Sanctuary. Book now for personalised beauty treatments.',
    location: 'Droitwich',
  },
  {
    slug: 'services-in-bromsgrove',
    title: 'Luxury Skincare in Bromsgrove',
    subtitle: 'Discover bespoke beauty treatments in a warm, intimate setting with expert care.',
    seoTitle: 'Luxury Skincare Treatments in Bromsgrove',
    seoDescription: 'Discover bespoke skincare in Bromsgrove with personalised treatments from expert professionals.',
    location: 'Bromsgrove',
  },
  {
    slug: 'services-in-birmingham',
    title: 'Luxury Skincare in Birmingham',
    subtitle: 'Experience bespoke beauty treatments in an intimate home salon setting, where your needs and safety come first.',
    seoTitle: 'Luxury Skincare Treatments in Birmingham | Aesthetics & Wellness',
    seoDescription: 'Discover bespoke skincare treatments in Birmingham. Experience luxury and safety with our expert beauty and nursing professionals.',
    location: 'Birmingham',
  },
]

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/aesthetics-bar" element={<AestheticsBar />} />
          <Route path="/skin-bar" element={<SkinBar />} />
          <Route path="/cosmetic-tattooing-bar" element={<CosmeticTattooingBar />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/faqs" element={<FAQs />} />
          {locations.map((loc) => (
            <Route
              key={loc.slug}
              path={`/${loc.slug}`}
              element={<LocationPage {...loc} />}
            />
          ))}
        </Route>
      </Routes>
      <FloatingBookButton />
    </>
  )
}

export default App
