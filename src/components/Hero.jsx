import { useEffect, useState } from 'react'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  const fadeIn = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070"
          alt="Crispy fried chicken on a dark platter"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-background" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:gap-8">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.35em] text-white/60 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          Flavor that hits different
        </p>

        <h1
          className={`text-4xl font-extrabold leading-tight text-primary sm:text-5xl md:text-6xl transition-all duration-700 ease-out delay-75 ${fadeIn}`}
        >
          MagicFRY: The Secret is in the Spice
        </h1>

        <p
          className={`max-w-3xl text-base text-white/85 sm:text-lg md:text-xl transition-all duration-700 ease-out delay-150 ${fadeIn}`}
        >
          Experience the ultimate crunch with our signature 12-spice blend and hand-crafted sauces.
        </p>

        <div
          className={`mt-2 flex flex-wrap justify-center gap-3 sm:gap-4 transition-all duration-700 ease-out delay-200 ${fadeIn}`}
        >
          <a
            href="#menu"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

