import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen((prev) => !prev)
  const handleClose = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 shadow-lg shadow-primary/25 ring-1 ring-white/10">
            <span className="text-lg font-semibold text-primary">MF</span>
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">Magic</p>
            <p className="text-xl font-semibold text-white">FRY</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-white transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={handleToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-primary/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden border-t border-white/5 bg-background/95 px-4 shadow-lg shadow-black/30 transition-[max-height,opacity] duration-200 ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <nav className="flex flex-col gap-3 py-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleClose}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:bg-white/5 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
