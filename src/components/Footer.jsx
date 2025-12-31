function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/60 py-6 text-center text-sm text-white/60 backdrop-blur">
      <p className="font-medium text-white">MagicFRY</p>
      <p className="mt-1 text-white/60">Crispy, juicy, unforgettable. Crafted nightly with love and spice.</p>
      <p className="mt-2 text-white/40">© {new Date().getFullYear()} MagicFRY. All rights reserved.</p>
    </footer>
  )
}

export default Footer
