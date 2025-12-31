import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <Hero />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
        <section
          id="menu"
          className="rounded-2xl border border-white/5 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur"
        >
          <h2 className="text-2xl font-semibold text-primary">Menu Highlights</h2>
          <p className="mt-3 text-white/70">
            Signature buckets, hand-battered tenders, spicy wings, and sides that bring the heat.
          </p>
        </section>

        <section
          id="about"
          className="rounded-2xl border border-white/5 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur"
        >
          <h2 className="text-2xl font-semibold text-primary">About MagicFRY</h2>
          <p className="mt-3 text-white/70">
            Born from a love of bold flavor and late-night cravings, we fry with precision and pride.
          </p>
        </section>

        <section
          id="contact"
          className="rounded-2xl border border-white/5 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur"
        >
          <h2 className="text-2xl font-semibold text-primary">Visit or Order</h2>
          <p className="mt-3 text-white/70">
            Drop by our downtown kitchen or place an order online. Fast, fresh, and always crispy.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
