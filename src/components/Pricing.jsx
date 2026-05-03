import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Nägel',
    icon: '💅',
    items: [
      { name: 'Nagelpflege & Maniküre', price: 'ab 10 €' },
      { name: 'Shellac (hält 2–3 Wochen)', price: 'ab 20 €' },
      { name: 'Acrylmodellagen', price: 'ab 25 €' },
      { name: 'Bio Gelnägel', price: 'ab 35 €' },
      { name: 'Gelmodellagen', price: 'ab 35 €' },
      { name: 'Zehenmodellage', price: 'ab 40 €' },
      { name: 'Nail-Extras (Glitzer, Folien, Steine …)', price: 'ab 3 €' },
    ],
  },
  {
    title: 'Beauty',
    icon: '✨',
    items: [
      { name: 'Wimpernverlängerung', price: 'ab 10 €' },
      { name: 'Augenbrauen färben & zupfen', price: '20 €' },
      { name: 'Augenbrauen & Wimpern färben', price: '30 €' },
      { name: 'Gesichtsbehandlungen', price: 'ab 39 €' },
      { name: 'Kopfmassage', price: 'ab 60 €' },
      { name: 'Permanent Make-Up', price: 'ab 150 €' },
    ],
  },
]

export default function Pricing() {
  return (
    <section id="preise" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-lato text-[#C9A84C] tracking-[0.3em] uppercase text-sm font-bold mb-3">
            Transparente Preise
          </p>
          <h2 className="section-title">Preisliste</h2>
          <span className="gold-underline" />
          <p className="font-lato text-[#7a6a72] mt-4 text-sm">
            Alle Preise inklusive Material. Individuelle Wünsche auf Anfrage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="rounded-3xl overflow-hidden shadow-sm border border-pink-100"
              style={{ background: 'linear-gradient(135deg, #fff8fb, #fff0f5)' }}
            >
              <div className="px-8 py-5 border-b border-pink-100 flex items-center gap-3"
                style={{ background: 'linear-gradient(135deg, #5a4a52, #7a5a66)' }}
              >
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-playfair text-xl font-bold text-white">{cat.title}</h3>
              </div>

              <ul className="divide-y divide-pink-100/60">
                {cat.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + i * 0.05 }}
                    className="flex items-center justify-between px-8 py-4 hover:bg-pink-50/50 transition-colors duration-150"
                  >
                    <span className="font-lato text-sm text-[#5a4a52]">{item.name}</span>
                    <span className="font-lato text-sm font-bold text-[#C9A84C] whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#termin"
            className="inline-block bg-[#C9A84C] hover:bg-[#A07830] text-white font-lato font-bold px-10 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            ✨ Jetzt Termin buchen
          </a>
        </motion.div>
      </div>
    </section>
  )
}
