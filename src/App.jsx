import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import AboutSection from './components/AboutSection'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'
import MenuCategories from './components/MenuCategories'
import chicken from './assets/images/chicken.jpg'

const heroSlides = [
  {
    bgImage: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    productImage: chicken,
    title: 'Yeni Smoky BURGER',
    description:
      '120gr Cajun baharatlı tavuk, burger sos, karamelize soğan ve cheddar ile dumanlı bir deneyim.',
  },
  {
    bgImage: 'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    productImage: chicken,
    title: 'CAJUN ROLL & BURRITO',
    description: 'Lezzet rulo haline geldi! Meksika ateşiyle yakan efsane çıtırlık.',
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    productImage: chicken,
    title: 'CAJUN MIX SEPET',
    description:
      'Tavuğa doyamayanlara: Dışı çıtır, içi sulu, efsanevi cajun baharatlarıyla kaplı parçalar.',
  },
]

function App() {
  const HomePage = () => (
    <>
      <Hero slides={heroSlides} />
      <MenuCategories />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
        <div className="flex flex-col gap-6">
          <MenuSection limit={3} />
          <div className="flex justify-center">
            <Link
              to="/menu"
              className="rounded-xl border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </main>
    </>
  )

  const MenuPage = () => (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
      <MenuSection />
    </main>
  )

  const AboutPage = () => (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
      <AboutSection />
    </main>
  )

  const ContactRoute = () => (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
      <ContactPage />
    </main>
  )

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactRoute />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
