import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const PETAL_COUNT = 18
const GLITTER_COUNT = 35

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

function Petal({ id }) {
  const size = randomBetween(12, 22)
  const startX = randomBetween(0, 100)
  const duration = randomBetween(6, 12)
  const delay = randomBetween(0, 8)
  const rotation = randomBetween(-30, 30)

  return (
    <motion.div
      key={id}
      className="absolute pointer-events-none select-none"
      style={{ left: `${startX}%`, top: '-40px', fontSize: size }}
      animate={{
        y: ['0vh', '110vh'],
        x: [0, randomBetween(-60, 60)],
        rotate: [rotation, rotation + randomBetween(180, 360)],
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeIn',
      }}
    >
      🌸
    </motion.div>
  )
}

function GlitterDot({ id }) {
  const top = randomBetween(5, 95)
  const left = randomBetween(0, 100)
  const size = randomBetween(2, 5)
  const delay = randomBetween(0, 4)
  const colors = ['#FFB5C8', '#C9A84C', '#E8CC82', '#FFD6E3', '#ffffff']
  const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <motion.div
      key={id}
      className="absolute rounded-full pointer-events-none"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: size,
        height: size,
        backgroundColor: color,
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0.5, 1.5, 0.5],
      }}
      transition={{
        duration: randomBetween(1.5, 3),
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

const headingWords = ['Deine', 'Nägel.', 'Dein', 'Ausdruck.']

export default function Hero() {
  const [petals] = useState(() => Array.from({ length: PETAL_COUNT }, (_, i) => i))
  const [glitter] = useState(() => Array.from({ length: GLITTER_COUNT }, (_, i) => i))

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFF0F5 0%, #FFD6E3 40%, #FFE4CC 100%)',
      }}
    >
      {petals.map((id) => <Petal key={id} id={id} />)}
      {glitter.map((id) => <GlitterDot key={id} id={id} />)}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-lato text-[#C9A84C] tracking-[0.3em] uppercase text-sm font-bold mb-6"
          >
            Nagelsalon Berlin
          </motion.p>

          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#5a4a52] leading-tight mb-6">
            {headingWords.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="font-lato text-[#7a6a72] text-lg md:text-xl mb-10 leading-relaxed"
          >
            Wir zaubern dir Nägel, die zu dir passen — verspielt, elegant und immer einzigartig.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
          >
            <a
              href="#termin"
              className="bg-[#C9A84C] hover:bg-[#A07830] text-white font-lato font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              ✨ Termin buchen
            </a>
            <a
              href="#leistungen"
              className="bg-white/70 hover:bg-white text-[#5a4a52] font-lato font-bold text-base px-8 py-4 rounded-full border border-[#FFB5C8] hover:border-[#C9A84C] transition-all duration-300"
            >
              Unsere Leistungen
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-lato text-[#7a6a72]"
          >
            <span>⭐ 4.9 Google</span>
            <span className="w-px h-4 bg-[#FFB5C8]" />
            <span>500+ Kunden</span>
            <span className="w-px h-4 bg-[#FFB5C8]" />
            <span>Berlin Mitte</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:block relative flex-shrink-0"
        >
          <div className="relative w-80 h-96">
            <img
              src="/images/nails-ombre-glitter.jpg"
              alt="Kawaii Nails Beispiel"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl"
              style={{ boxShadow: '0 20px 60px rgba(255,181,200,0.5)' }}
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3"
            >
              <p className="font-playfair text-xs text-[#5a4a52] font-semibold">Kawaii Nails</p>
              <p className="font-lato text-xs text-[#C9A84C]">✨ Berlin</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3"
            >
              <p className="font-lato text-xs text-[#7a6a72]">⭐ 4.9</p>
              <p className="font-playfair text-xs font-bold text-[#5a4a52]">Top bewertet</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, #FFF5F8)',
        }}
      />

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FFB5C8]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  )
}
