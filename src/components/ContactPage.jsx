function ContactPage() {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-10">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">Contact Us</h2>
        <p className="text-base text-white/75 sm:text-lg">
          Questions, cravings, or catering requests? We&apos;re here to make it happen.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-white/5 bg-black/30 p-5 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/60">Visit</p>
          <p className="text-lg font-semibold text-white">123 Flavor Street, Downtown</p>
          <p className="text-sm text-white/70">Open daily · 11AM — Midnight</p>
        </div>
        <div className="space-y-4 rounded-2xl border border-white/5 bg-black/30 p-5 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/60">Contact</p>
          <p className="text-lg font-semibold text-primary">+1 (555) 123-4567</p>
          <p className="text-sm text-white/70">orders@magicfry.com</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="tel:+15551234567"
          className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Call Now
        </a>
        <a
          href="mailto:orders@magicfry.com"
          className="rounded-xl border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Email Us
        </a>
      </div>
    </section>
  )
}

export default ContactPage
