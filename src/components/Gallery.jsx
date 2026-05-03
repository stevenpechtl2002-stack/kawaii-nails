import { motion } from 'framer-motion'

const placeholders = [
  { gradient: 'from-pink-200 to-rose-300', label: 'Gelnägel', span: 'row-span-2' },
  { gradient: 'from-yellow-200 to-amber-300', label: 'Nail Art' },
  { gradient: 'from-purple-200 to-pink-300', label: 'Acryl' },
  { gradient: 'from-rose-200 to-pink-400', label: 'Maniküre' },
  { gradient: 'from-amber-200 to-yellow-300', label: 'Pediküre', span: 'row-span-2' },
  { gradient: 'from-fuchsia-200 to-rose-300', label: 'Nageldesign' },
  { gradient: 'from-pink-300 to-fuchsia-300', label: 'Glitzer Nails' },
  { gradient: 'from-orange-200 to-rose-300', label: 'French Tips' },
  { gradient: 'from-rose-300 to-pink-400', label: 'Ombre Nails', span: 'row-span-2' },
  { gradient: 'from-yellow-300 to-amber-400', label: 'Chrome Nails' },
  { gradient: 'from-pink-200 to-rose-400', label: 'Nail Art' },
  { gradient: 'from-fuchsia-300 to-purple-300', label: 'Stiletto' },
]

export default function Gallery() {
  return (
    <section
      id="galerie"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #FFF5F8 0%, #FFE8F0 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-lato text-[#C9A84C] tracking-[0.3em] uppercase text-sm font-bold mb-3">
            Unsere Arbeiten
          </p>
          <h2 className="section-title">Galerie</h2>
          <span className="gold-underline" />
          <p className="font-lato text-[#7a6a72] mt-4 max-w-md mx-auto">
            Lass dich inspirieren — eigene Fotos folgen bald!
          </p>
        </motion.div>

        <div
          className="columns-2 md:columns-3 gap-4 space-y-4"
          style={{ columnFill: 'balance' }}
        >
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`break-inside-avoid mb-4 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                i % 3 === 0 ? 'h-64' : i % 5 === 0 ? 'h-80' : 'h-48'
              }`}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${p.gradient} flex flex-col items-center justify-center relative group`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
                <span className="text-3xl mb-2">💅</span>
                <span className="font-lato text-white/80 text-xs font-bold tracking-widest uppercase bg-black/20 px-3 py-1 rounded-full">
                  {p.label}
                </span>
                <span className="absolute bottom-3 right-3 text-white/40 text-xs font-lato">
                  Foto kommt bald
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/kawaii.nails.berlin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-lato text-[#C9A84C] hover:text-[#A07830] font-bold border-b-2 border-[#C9A84C] pb-1 transition-colors duration-200"
          >
            Mehr auf Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
