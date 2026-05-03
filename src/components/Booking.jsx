import { motion } from 'framer-motion'

export default function Booking() {
  return (
    <section
      id="termin"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(135deg, #FFF0F5 0%, #FFE8F0 100%)' }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-lato text-[#C9A84C] tracking-[0.3em] uppercase text-sm font-bold mb-3">
            Wir freuen uns auf dich
          </p>
          <h2 className="section-title">Termin buchen</h2>
          <span className="gold-underline" />
          <p className="font-lato text-[#7a6a72] mt-2">
            Wähle deinen Wunschtermin direkt hier oder schreib uns per{' '}
            <a
              href="https://wa.me/4922116854093"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] font-bold hover:underline"
            >
              WhatsApp: 0221-16854093
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <iframe
            src="https://buchung.treatwell.de/ort/kawaii-nails/"
            width="100%"
            height="720"
            frameBorder="0"
            style={{
              maxWidth: '480px',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(0,0,0,.1)',
            }}
            title="Termin buchen bei Kawaii Nails"
          />
        </motion.div>
      </div>
    </section>
  )
}
