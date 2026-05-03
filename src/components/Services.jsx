import { motion } from 'framer-motion'

const services = [
  {
    icon: '💅',
    title: 'Gel & Bio Gel',
    desc: 'Langanhaltende Gelmodellagen und Bio Gelnägel in jeder Form und Länge — ab 35 €',
  },
  {
    icon: '✨',
    title: 'Acrylmodellagen',
    desc: 'Robuste Acrylmodellage für maximale Länge und perfekte Stabilität — ab 25 €',
  },
  {
    icon: '💎',
    title: 'Shellac',
    desc: 'Hält 2–3 Wochen ohne Absplittern — perfekt für gepflegte Nägel — ab 20 €',
  },
  {
    icon: '🌸',
    title: 'Nagelpflege & Maniküre',
    desc: 'Klassische Nagelpflege für Damen und Herren, Feilen, Formen, Lackieren — ab 10 €',
  },
  {
    icon: '🦋',
    title: 'Pediküre & Zehenmodellage',
    desc: 'Verwöhnprogramm für Füße, Hornhautentfernung und Zehenmodellage — ab 40 €',
  },
  {
    icon: '🎨',
    title: 'Nail Art & Extras',
    desc: 'Glitzer, Folien, Sticker, Steine und individuelle Nageldesigns — ab 3 €',
  },
  {
    icon: '👁️',
    title: 'Wimpernverlängerung',
    desc: '2D, 3D und klassische Wimpernverlängerungen für einen strahlenden Blick — ab 10 €',
  },
  {
    icon: '🌿',
    title: 'Gesichtsbehandlungen',
    desc: 'Augenbrauen färben & zupfen, Wimpern färben und weitere Treatments — ab 20 €',
  },
  {
    icon: '👑',
    title: 'Permanent Make-Up',
    desc: 'Professionelles Permanent Make-Up für dauerhaft perfekte Ergebnisse — ab 150 €',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section id="leistungen" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-lato text-[#C9A84C] tracking-[0.3em] uppercase text-sm font-bold mb-3">
            Was wir anbieten
          </p>
          <h2 className="section-title">Unsere Leistungen</h2>
          <span className="gold-underline" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group rounded-3xl p-8 cursor-default border-2 border-transparent hover:border-[#C9A84C] transition-colors duration-300 shadow-sm hover:shadow-md"
              style={{ background: 'linear-gradient(135deg, #fff8fb, #fff0f5)' }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-playfair text-xl font-semibold text-[#5a4a52] mb-2">{s.title}</h3>
              <p className="font-lato text-[#7a6a72] text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 w-8 h-0.5 bg-[#FFB5C8] rounded-full group-hover:w-12 group-hover:bg-[#C9A84C] transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
