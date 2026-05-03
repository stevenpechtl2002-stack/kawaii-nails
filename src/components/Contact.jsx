import { motion } from 'framer-motion'

const info = [
  { icon: '📍', label: 'Adresse', value: 'Musterstraße 1, 10115 Berlin' },
  { icon: '📞', label: 'Telefon', value: '030 123456', href: 'tel:030123456' },
  { icon: '📸', label: 'Instagram', value: '@kawaii.nails.berlin', href: 'https://instagram.com/kawaii.nails.berlin' },
  { icon: '🕐', label: 'Öffnungszeiten', value: 'Mo–Sa 10:00–19:00 Uhr' },
]

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-lato text-[#C9A84C] tracking-[0.3em] uppercase text-sm font-bold mb-3">
            Wir sind für dich da
          </p>
          <h2 className="section-title">Kontakt & Anfahrt</h2>
          <span className="gold-underline" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-cream rounded-2xl p-4 border border-pink-light/50"
                style={{ background: 'linear-gradient(135deg, #fff8fb, #fff0f5)' }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-lato text-xs text-[#7a6a72] font-bold uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="font-lato text-[#5a4a52] hover:text-[#C9A84C] transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-lato text-[#5a4a52]">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-video relative"
            style={{ background: 'linear-gradient(135deg, #FFD6E3 0%, #FFE4CC 50%, #FFD6E3 100%)' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl mb-3"
              >
                📍
              </motion.div>
              <div className="bg-white/90 rounded-2xl px-6 py-3 text-center shadow-sm">
                <p className="font-playfair font-bold text-[#5a4a52]">Kawaii Nails</p>
                <p className="font-lato text-sm text-[#7a6a72]">Musterstraße 1, 10115 Berlin</p>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/80 rounded-xl px-3 py-1">
                <p className="font-lato text-xs text-[#7a6a72]">Karte folgt bald</p>
              </div>
            </div>

            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, #FFB5C8 30px, #FFB5C8 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, #FFB5C8 30px, #FFB5C8 31px)',
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-pink-light"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌸</span>
            <span className="font-playfair font-bold text-[#5a4a52]">Kawaii Nails</span>
          </div>
          <p className="font-lato text-xs text-[#7a6a72] text-center">
            © 2025 Kawaii Nails Berlin · Musterstraße 1 · 030 123456
          </p>
          <a
            href="https://instagram.com/kawaii.nails.berlin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-lato text-xs text-[#C9A84C] hover:text-[#A07830] transition-colors"
          >
            @kawaii.nails.berlin
          </a>
        </div>
      </motion.footer>
    </section>
  )
}
