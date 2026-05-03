import { motion } from 'framer-motion'

const packages = [
  {
    name: 'Basic',
    price: '39',
    tagline: 'Perfekt zum Einstieg',
    icon: '🌸',
    features: [
      'Klassische Maniküre',
      'Einfarbiger Gel-Lack',
      'Nagelformung',
      'Pflegebehandlung',
    ],
    cta: 'Jetzt buchen',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '69',
    tagline: 'Unser beliebtestes Paket',
    icon: '✨',
    features: [
      'Alles aus Basic',
      'Gel-Modellage',
      'Einfaches Nageldesign',
      'French oder Ombre',
      'Pflegeöl & Massage',
    ],
    cta: 'Jetzt buchen',
    highlight: true,
    badge: 'Beliebt',
  },
  {
    name: 'Luxe',
    price: '99',
    tagline: 'Das volle Verwöhnerlebnis',
    icon: '👑',
    features: [
      'Alles aus Premium',
      'Komplexes Nail Art',
      'Glitzer & Folien',
      'Handpeeling & Maske',
      'Paraffin-Behandlung',
      'Nachhause-Pflegeset',
    ],
    cta: 'Jetzt buchen',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="preise" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-lato text-[#C9A84C] tracking-[0.3em] uppercase text-sm font-bold mb-3">
            Transparente Preise
          </p>
          <h2 className="section-title">Unsere Pakete</h2>
          <span className="gold-underline" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                pkg.highlight
                  ? 'bg-[#5a4a52] text-white shadow-2xl scale-105 border-2 border-[#C9A84C]'
                  : 'bg-cream border-2 border-pink-light shadow-sm'
              }`}
              style={!pkg.highlight ? { background: 'linear-gradient(135deg, #fff8fb, #fff0f5)' } : {}}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-white font-lato font-bold text-xs px-4 py-1.5 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div className="text-4xl mb-4">{pkg.icon}</div>
              <h3 className={`font-playfair text-2xl font-bold mb-1 ${pkg.highlight ? 'text-white' : 'text-[#5a4a52]'}`}>
                {pkg.name}
              </h3>
              <p className={`font-lato text-xs mb-6 ${pkg.highlight ? 'text-pink-light' : 'text-[#7a6a72]'}`}>
                {pkg.tagline}
              </p>

              <div className="mb-6">
                <span className={`font-playfair text-5xl font-bold ${pkg.highlight ? 'text-[#E8CC82]' : 'text-[#C9A84C]'}`}>
                  {pkg.price}€
                </span>
                <span className={`font-lato text-sm ml-1 ${pkg.highlight ? 'text-pink-light' : 'text-[#7a6a72]'}`}>
                  / Termin
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-lato text-sm">
                    <span className={pkg.highlight ? 'text-[#E8CC82]' : 'text-[#C9A84C]'}>✓</span>
                    <span className={pkg.highlight ? 'text-white/90' : 'text-[#5a4a52]'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#termin"
                className={`block text-center font-lato font-bold py-3 rounded-full transition-all duration-200 ${
                  pkg.highlight
                    ? 'bg-[#C9A84C] hover:bg-[#E8CC82] text-white'
                    : 'bg-[#FFB5C8] hover:bg-[#FF8FAD] text-white'
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-lato text-[#7a6a72] text-sm mt-8"
        >
          Alle Preise inklusive Material. Individuelle Wünsche auf Anfrage.
        </motion.p>
      </div>
    </section>
  )
}
