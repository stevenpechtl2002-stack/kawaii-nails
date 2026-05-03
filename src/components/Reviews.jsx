import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Sophie K.',
    avatar: '👩',
    rating: 5,
    date: 'März 2025',
    text: 'Absolut begeistert! Die Nägel halten schon seit 4 Wochen und sehen immer noch perfekt aus. Das Team ist super freundlich und die Atmosphäre ist einfach traumhaft. Komme definitiv wieder!',
  },
  {
    name: 'Lena M.',
    avatar: '👩‍🦱',
    rating: 5,
    date: 'April 2025',
    text: 'Mein neuer Lieblingssalon! Die Nail Artists haben meine Wünsche perfekt umgesetzt — ich hatte gar keine richtige Vorstellung und sie haben einfach magisches draus gemacht. ✨',
  },
  {
    name: 'Julia R.',
    avatar: '👩‍🦰',
    rating: 5,
    date: 'April 2025',
    text: 'Ich war schon in vielen Salons in Berlin, aber Kawaii Nails ist einfach unschlagbar. Die Qualität, das Design, der Service — alles top. Kann ich nur empfehlen!',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'text-[#C9A84C]' : 'text-gray-200'}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section
      id="bewertungen"
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
            Was unsere Kunden sagen
          </p>
          <h2 className="section-title">Bewertungen</h2>
          <span className="gold-underline" />

          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-sm border border-pink-light mt-2">
            <div className="text-3xl font-playfair font-bold text-[#5a4a52]">4.9</div>
            <div>
              <Stars count={5} />
              <p className="font-lato text-xs text-[#7a6a72] mt-0.5">basierend auf Google Bewertungen</p>
            </div>
            <div className="text-2xl ml-2">🌟</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-pink-light/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-light flex items-center justify-center text-xl">
                  {r.avatar}
                </div>
                <div>
                  <p className="font-lato font-bold text-[#5a4a52] text-sm">{r.name}</p>
                  <p className="font-lato text-xs text-[#7a6a72]">{r.date}</p>
                </div>
                <div className="ml-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#4285F4">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
                  </svg>
                </div>
              </div>
              <Stars count={r.rating} />
              <p className="font-lato text-[#7a6a72] text-sm leading-relaxed mt-3">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
