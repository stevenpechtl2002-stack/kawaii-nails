import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Melisa da Silva',
    avatar: 'M',
    rating: 5,
    date: 'Google Rezension',
    text: 'Wenn ich meine Nägel machen lasse, dann nur HIER! Ich bin schon länger hier Kunde und bin immer zufrieden mit den Ergebnissen. Egal welche Wunsch-Nägel ich hatte, hier hat man mir diese erfüllt!',
  },
  {
    name: 'Linda Dorothea H.',
    avatar: 'L',
    rating: 5,
    date: 'Google Rezension',
    text: 'Ich lasse mir seit vielen Jahren bei Kawaii Nails die Nägel machen und kann die Arbeit von Christy ohne Bedenken weiterempfehlen! 💖 Farbe, Form und auch die Länge sind immer wie ich es mir wünsche. 🤩',
  },
  {
    name: 'Ebru C.',
    avatar: 'E',
    rating: 5,
    date: 'Google Rezension',
    text: 'Super schöne Nägel, tolle Arbeit und sehr freundlich – absolut empfehlenswert! 💅😊',
  },
  {
    name: 'Cora MMZ',
    avatar: 'C',
    rating: 5,
    date: 'Google Rezension',
    text: 'Ich bin sehr zufrieden, war heute das erste Mal bei Jade. Es war ein sehr freundlicher Empfang. Ich habe mich sofort wohl gefühlt und bin mit den Wimpern sehr zufrieden. Preisleistung stimmt — habe schon einen neuen Termin gemacht.',
  },
  {
    name: 'Daniela Wendt',
    avatar: 'D',
    rating: 5,
    date: 'Google Rezension',
    text: 'Ich war heute das erste Mal ohne Termin im Salon. Kam direkt dran, habe ein Foto gezeigt wie meine Nägel aussehen sollen — nach 30–45 Min. war ich schon fertig und das Ergebnis ist super. Liebe meine Nägel 😍',
  },
  {
    name: 'Stephan Kaschny',
    avatar: 'S',
    rating: 5,
    date: 'Google Rezension',
    text: 'Mitten auf der belebten Venloer Straße ist dieses saubere, nett geführte Studio. Als Mann eher einer der seltenen Gäste wurde ich nett empfangen und dann von Steven mit viel Können im luxuriösen Ledersessel mit Massagefunktion sehr gut bedient.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="w-10 h-10 rounded-full bg-[#FFB5C8] flex items-center justify-center font-playfair font-bold text-white text-sm">
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
