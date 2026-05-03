import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import Booking from './components/Booking'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-lato">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Reviews />
      <Pricing />
      <Booking />
      <Contact />
    </div>
  )
}
