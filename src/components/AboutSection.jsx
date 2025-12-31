function AboutSection() {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-10">
      <h2 className="text-3xl font-bold text-primary sm:text-4xl">About MagicFRY</h2>
      <p className="mt-4 text-base text-white/75 sm:text-lg">
        Born from late-night kitchen experiments, MagicFRY obsesses over the perfect crunch. We hand
        brine, double dredge, and fry to order, pairing every bite with bold sauces and chef-crafted
        sides. From the midnight snackers to the spice seekers, we&apos;ve got your cravings covered.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
          <p className="text-sm font-semibold text-primary">12-Spice Signature Blend</p>
          <p className="mt-2 text-sm text-white/70">
            A closely guarded mix that layers heat, smoke, and citrus for addictive depth.
          </p>
        </div>
        <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
          <p className="text-sm font-semibold text-primary">Fresh, Never Frozen</p>
          <p className="mt-2 text-sm text-white/70">
            We prep daily with premium poultry, cold-brined for tenderness and flavor.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
