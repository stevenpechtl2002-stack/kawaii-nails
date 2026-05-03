import { motion } from 'framer-motion'

const services = [
  {
    icon: '💅',
    title: 'Gelnägel',
    desc: 'Langanhaltende Gelnägel in jeder Form und Länge — von natürlich bis dramatisch.',
  },
  {
    icon: '✨',
    title: 'Acryl',
    desc: 'Robuste Acrylmodellage für maximale Länge und perfekte Stabilität.',
  },
  {
    icon: '🎨',
    title: 'Nageldesign',
    desc: 'Von klassisch bis extravagant — wir setzen deine Wünsche kreativ um.',
  },
  {
    icon: '🌸',
    title: 'Maniküre',
    desc: 'Klassische Pflege für gepflegte Hände: Feilen, Formen, Lackieren.',
  },
  {
    icon: '🦋',
    title: 'Pediküre',
    desc: 'Verwöhnprogramm für deine Füße — Hornhautentfernung und Pflege inklusive.',
  },
  {
    icon: '🌟',
    title: 'Nail Art',
    desc: 'Individuelle Kunstwerke auf deinen Nägeln: Glitzer, Folien, Sticker & mehr.',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
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
              className="group bg-cream rounded-3xl p-8 cursor-default border-2 border-transparent hover:border-[#C9A84C] transition-colors duration-300 shadow-sm hover:shadow-md"
              style={{ background: 'linear-gradient(135deg, #fff8fb, #fff0f5)' }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-playfair text-xl font-semibold text-[#5a4a52] mb-2">
                {s.title}
              </h3>
              <p className="font-lato text-[#7a6a72] text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 w-8 h-0.5 bg-[#FFB5C8] rounded-full group-hover:w-12 group-hover:bg-[#C9A84C] transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
