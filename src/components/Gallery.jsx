import { motion } from 'framer-motion'

const photos = [
  { src: '/images/nails-white-pink.jpg', label: 'Gelnägel', tall: true },
  { src: '/images/nails-pink-ombre.jpg', label: 'Ombre Nails' },
  { src: '/images/nails-purple-lv.jpg', label: 'Nail Art' },
  { src: '/images/nails-red.jpg', label: 'Gelnägel' },
  { src: '/images/nails-ombre-glitter.jpg', label: 'Glitzer Nails', tall: true },
  { src: '/images/nails-nude.jpg', label: 'Nude Nails' },
  { src: '/images/nails-white-glitter.jpg', label: 'Acryl' },
  { src: '/images/nails-purple-ombre.jpg', label: 'Ombre Nails' },
  { src: '/images/nails-red2.jpg', label: 'Gelnägel', tall: true },
  { src: '/images/lashes-3d.jpg', label: 'Wimpern 3D' },
  { src: '/images/nails-before-after.jpg', label: 'Vorher / Nachher' },
  { src: '/images/lashes-2.jpg', label: 'Wimpernverlängerung' },
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
            Lass dich von unseren echten Arbeiten inspirieren!
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4" style={{ columnFill: 'balance' }}>
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid mb-4 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full object-cover rounded-2xl"
                  style={{ height: p.tall ? '320px' : '220px' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl" />
                <span className="absolute bottom-3 left-3 font-lato text-white text-xs font-bold tracking-widest uppercase bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {p.label}
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
            href="https://www.instagram.com/kawaiinailskoeln/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-lato text-[#C9A84C] hover:text-[#A07830] font-bold border-b-2 border-[#C9A84C] pb-1 transition-colors duration-200"
          >
            @kawaiinailskoeln auf Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
