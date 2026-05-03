import React from 'react'
import { motion } from 'framer-motion'

const reviews = [
  {
    text: 'Wenn ich meine Nägel machen lasse, dann nur HIER! Ich bin schon länger hier Kunde und bin immer zufrieden mit den Ergebnissen. Egal welche Wunsch-Nägel ich hatte, hier hat man mir diese erfüllt!',
    name: 'Melisa da Silva',
    role: 'Google Rezension ⭐⭐⭐⭐⭐',
    image: null,
    initials: 'M',
  },
  {
    text: 'Ich lasse mir seit vielen Jahren bei Kawaii Nails die Nägel machen und kann die Arbeit von Christy ohne Bedenken weiterempfehlen! 💖 Farbe, Form und auch die Länge sind immer wie ich es mir wünsche. 🤩',
    name: 'Linda Dorothea H.',
    role: 'Google Rezension ⭐⭐⭐⭐⭐',
    image: null,
    initials: 'L',
  },
  {
    text: 'Super schöne Nägel, tolle Arbeit und sehr freundlich – absolut empfehlenswert! 💅😊',
    name: 'Ebru C.',
    role: 'Google Rezension ⭐⭐⭐⭐⭐',
    image: null,
    initials: 'E',
  },
  {
    text: 'Ich bin sehr zufrieden, war heute das erste Mal bei Jade. Es war ein sehr freundlicher Empfang. Ich habe mich sofort wohl gefühlt und bin mit den Wimpern sehr zufrieden. Preisleistung stimmt — habe schon einen neuen Termin gemacht.',
    name: 'Cora MMZ',
    role: 'Google Rezension ⭐⭐⭐⭐⭐',
    image: null,
    initials: 'C',
  },
  {
    text: 'Ich war heute das erste Mal ohne Termin im Salon. Kam direkt dran, habe ein Foto gezeigt wie meine Nägel aussehen sollen — nach 30–45 Min. war ich schon fertig und das Ergebnis ist super. Liebe meine Nägel 😍',
    name: 'Daniela Wendt',
    role: 'Google Rezension ⭐⭐⭐⭐⭐',
    image: null,
    initials: 'D',
  },
  {
    text: 'Mitten auf der belebten Venloer Straße ist dieses saubere, nett geführte Studio. Als Mann eher einer der seltenen Gäste wurde ich nett empfangen und von Steven mit viel Können im luxuriösen Ledersessel mit Massagefunktion sehr gut bedient.',
    name: 'Stephan Kaschny',
    role: 'Google Rezension ⭐⭐⭐⭐⭐',
    image: null,
    initials: 'S',
  },
  {
    text: 'Wirklich wunderbare Nägel 😍 Jedes Mal bin ich zufrieden, sie halten super. 🫶',
    name: 'Sabrina',
    role: 'Google Rezension ⭐⭐⭐⭐⭐',
    image: null,
    initials: 'S',
  },
  {
    text: 'Man kann super einfach Termine online machen, was ich schon mal toll finde. Alle sind immer super freundlich und egal was ich bisher für Wünsche bei den Nägeln hatte, wurde alles umgesetzt.',
    name: 'Janet A.',
    role: 'Google Rezension ⭐⭐⭐⭐⭐',
    image: null,
    initials: 'J',
  },
  {
    text: 'Trotz vieler schlechter Bewertungen bin ich hingegangen und habe mir selbst ein Bild verschafft. Ich bin positiv überrascht. Ich kenne andere Läden in dieser Preisklasse, wo man deutlich mehr schlechte Kriterien findet.',
    name: 'Mary Suzy',
    role: 'Google Rezension ⭐⭐⭐⭐⭐',
    image: null,
    initials: 'M',
  },
]

const Avatar = ({ initials }) => (
  <div className="h-10 w-10 rounded-full bg-[#FFB5C8] flex items-center justify-center font-playfair font-bold text-white text-sm flex-shrink-0">
    {initials}
  </div>
)

const TestimonialsColumn = ({ testimonials, duration = 10, className = '' }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      animate={{ translateY: '-50%' }}
      transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          {testimonials.map(({ text, name, role, image, initials }, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl border border-pink-100 shadow-lg shadow-[#FFB5C8]/20 max-w-xs w-full"
              style={{ background: 'linear-gradient(135deg, #fff8fb, #fff0f5)' }}
            >
              <p className="font-lato text-[#5a4a52] text-sm leading-relaxed">{text}</p>
              <div className="flex items-center gap-3 mt-5">
                {image
                  ? <img src={image} alt={name} className="h-10 w-10 rounded-full object-cover" />
                  : <Avatar initials={initials} />
                }
                <div>
                  <div className="font-lato font-bold text-[#5a4a52] text-sm leading-5">{name}</div>
                  <div className="font-lato text-xs text-[#C9A84C] leading-5">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
)

const firstColumn = reviews.slice(0, 3)
const secondColumn = reviews.slice(3, 6)
const thirdColumn = reviews.slice(6, 9)

export default function Reviews() {
  return (
    <section
      id="bewertungen"
      className="py-24 px-6 relative"
      style={{ background: 'linear-gradient(180deg, #FFF5F8 0%, #FFE8F0 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-14"
        >
          <p className="font-lato text-[#C9A84C] tracking-[0.3em] uppercase text-sm font-bold mb-3">
            Was unsere Kunden sagen
          </p>
          <h2 className="section-title">Bewertungen</h2>
          <span className="gold-underline" />
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-sm border border-pink-100 mt-6">
            <div className="font-playfair text-3xl font-bold text-[#5a4a52]">4.9</div>
            <div>
              <div className="flex gap-0.5 text-[#C9A84C] text-lg">★★★★★</div>
              <p className="font-lato text-xs text-[#7a6a72] mt-0.5">basierend auf Google Bewertungen</p>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </div>
    </section>
  )
}
