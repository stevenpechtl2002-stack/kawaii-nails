import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  'Gelnägel', 'Acryl', 'Nageldesign', 'Maniküre', 'Pediküre', 'Nail Art',
  'Basic Paket', 'Premium Paket', 'Luxe Paket',
]

export default function Booking() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', date: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', phone: '', service: '', date: '', message: '' })
  }

  const inputClass =
    'w-full font-lato text-[#5a4a52] bg-white border-2 border-pink-light rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 placeholder-[#c0b0b8]'

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
            Füll das Formular aus und wir melden uns innerhalb von 24h bei dir.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 shadow-sm border border-pink-light/50 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-lato text-xs text-[#7a6a72] font-bold uppercase tracking-wider mb-1.5 block">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Dein Name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="font-lato text-xs text-[#7a6a72] font-bold uppercase tracking-wider mb-1.5 block">
                E-Mail *
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="deine@email.de"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-lato text-xs text-[#7a6a72] font-bold uppercase tracking-wider mb-1.5 block">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="030 123456"
                className={inputClass}
              />
            </div>
            <div>
              <label className="font-lato text-xs text-[#7a6a72] font-bold uppercase tracking-wider mb-1.5 block">
                Leistung *
              </label>
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Leistung wählen</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="font-lato text-xs text-[#7a6a72] font-bold uppercase tracking-wider mb-1.5 block">
              Wunschtermin *
            </label>
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={inputClass}
            />
          </div>

          <div>
            <label className="font-lato text-xs text-[#7a6a72] font-bold uppercase tracking-wider mb-1.5 block">
              Nachricht
            </label>
            <textarea
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              placeholder="Besondere Wünsche, Inspirationen, Fragen..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#C9A84C] hover:bg-[#A07830] text-white font-lato font-bold py-4 rounded-full shadow-md hover:shadow-lg transition-colors duration-200 text-base"
          >
            ✨ Anfrage senden
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#5a4a52] text-white font-lato text-sm px-6 py-4 rounded-2xl shadow-xl z-50 flex items-center gap-3"
            >
              <span className="text-xl">🌸</span>
              <span>Danke! Wir melden uns bald bei dir.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
