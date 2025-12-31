import { useEffect, useMemo, useRef, useState } from 'react'

function Hero({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)
  const autoplayDelay = 3000

  const safeSlides = useMemo(() => (slides.length > 0 ? slides : []), [slides])

  const resetInterval = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current)
    if (!safeSlides.length) return
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeSlides.length)
    }, autoplayDelay)
  }

  useEffect(() => {
    resetInterval()
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [safeSlides, activeIndex])

  const handleNext = () => {
    if (!safeSlides.length) return
    setActiveIndex((prev) => (prev + 1) % safeSlides.length)
    resetInterval()
  }

  const handlePrev = () => {
    if (!safeSlides.length) return
    setActiveIndex((prev) => (prev - 1 + safeSlides.length) % safeSlides.length)
    resetInterval()
  }

  const goToSlide = (index) => {
    if (!safeSlides.length) return
    setActiveIndex(index)
    resetInterval()
  }

  return (
    <section className="relative isolate flex min-h-[80vh] w-full items-center overflow-hidden bg-background font-inter md:h-screen">
      {safeSlides.map((slide, index) => {
        const isActive = index === activeIndex
        const bg = slide.bgImage || slide.imageSrc
        return (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              isActive ? 'opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-105'
            }`}
            aria-hidden={!isActive}
          >
            <div className="absolute inset-0 z-0">
              <img
                src={bg}
                alt={slide.title}
                className="h-full w-full object-cover bg-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.6),transparent_55%)]" />
            </div>

            <div className="relative z-10 mx-auto flex h-full w-full items-center px-4 py-12">
              <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 text-center sm:text-left md:grid-cols-2">
                <div className="space-y-6">
                  <h1
                    className={`text-4xl font-extrabold uppercase leading-tight text-primary sm:text-5xl md:text-6xl transition-all duration-800 ease-out ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`max-w-xl text-base text-white/90 sm:text-lg md:text-xl transition-all duration-800 ease-out delay-100 ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                  >
                    {slide.description}
                  </p>
                  <div
                    className={`transition-all duration-800 ease-out delay-900 ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                  >
                    <button
                      type="button"
                      className="rounded-full border-2 border-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      ÜRÜNLER
                    </button>
                  </div>
                </div>

                <div className="flex w-full justify-center md:justify-end">
                  {slide.productImage && (
                    <img
                      src={slide.productImage}
                      alt={slide.title}
                      className={`h-64 w-64 max-w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-2000 ease-out md:h-80 md:w-80 ${
                        isActive ? 'opacity-100 translate-x-0 animate-bounce-slow' : 'opacity-0 translate-x-10'
                      }`}
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {safeSlides.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white shadow-lg shadow-black/40 backdrop-blur transition hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white shadow-lg shadow-black/40 backdrop-blur transition hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute inset-x-0 bottom-8 z-20 mx-auto flex w-full max-w-xs gap-3 px-4 sm:max-w-sm md:max-w-md">
            {safeSlides.map((_, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className="flex-1 overflow-hidden rounded-full bg-white/15"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div
                    className={`h-1.5 bg-primary transition-[width] ease-linear ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                    style={{ transitionDuration: `${autoplayDelay}ms` }}
                  />
                </button>
              )
            })}
          </div>
        </>
      )}
    </section>
  )
}

export default Hero
