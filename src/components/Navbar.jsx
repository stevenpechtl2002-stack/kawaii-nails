import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Preise', href: '#preise' },
  { label: 'Termin', href: '#termin' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          <span className="font-playfair font-bold text-xl text-[#5a4a52]">Kawaii Nails</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-lato text-sm text-[#5a4a52] hover:text-[#C9A84C] transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A84C] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#termin"
              className="bg-[#FFB5C8] hover:bg-[#FF8FAD] text-white font-lato text-sm font-bold px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Termin buchen
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-[#5a4a52] p-2"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-light px-6 pb-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-lato text-[#5a4a52] hover:text-[#C9A84C] border-b border-pink-light/50 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#termin"
              onClick={() => setOpen(false)}
              className="mt-3 block text-center bg-[#FFB5C8] text-white font-lato font-bold px-5 py-2.5 rounded-full"
            >
              Termin buchen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
