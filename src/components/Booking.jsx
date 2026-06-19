import { motion } from 'framer-motion'

export default function Booking() {
  return (
    <section
      id="termin"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(135deg, #FFF0F5 0%, #FFE8F0 100%)' }}
    >
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-lato text-[#C9A84C] tracking-[0.3em] uppercase text-sm font-bold mb-3">
            Wir freuen uns auf dich
          </p>
          <h2 className="section-title">Termin buchen</h2>
          <span className="gold-underline" />
          <p className="font-lato text-[#7a6a72] mt-4 leading-relaxed">
            Buche deinen Wunschtermin einfach und unkompliziert online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-5"
        >
          <a
            href="https://www.treatwell.de/ort/kawaii-nails/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm bg-[#C9A84C] hover:bg-[#A07830] text-white font-lato font-bold text-lg px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <span>✨</span>
            <span>Online buchen via Treatwell</span>
          </a>

          <p className="font-lato text-[#7a6a72] text-sm mt-2">
            oder ruf uns an:{' '}
            <a href="tel:+4922116854093" className="text-[#C9A84C] font-bold hover:underline">
              (+49) 221 168 540 93
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
