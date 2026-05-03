import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="ueber-uns" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-lato text-[#C9A84C] tracking-[0.3em] uppercase text-sm font-bold mb-4">
              Über uns
            </p>
            <h2 className="font-playfair text-4xl font-bold text-[#5a4a52] leading-tight mb-6">
              Lust auf Fresh &amp; Freaky?
            </h2>
            <p className="font-lato text-[#7a6a72] leading-relaxed mb-4">
              Wenn Nägel zu echten Kunstwerken werden sollen, sind wir die perfekte Adresse! Wir von Kawaii Nails erfüllen Deine Wünsche für tolle, kreative Nageldesigns.
            </p>
            <p className="font-lato text-[#7a6a72] leading-relaxed mb-8">
              Besuche unseren Salon im Kölner Stadtteil Ehrenfeld und lass es dir mal wieder richtig gut gehen! Wir freuen uns auf dich — buche deinen Termin einfach online oder per WhatsApp.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { number: '10.000+', label: 'Zufriedene Kunden' },
                { number: '10+', label: 'Jahre Erfahrung' },
                { number: '4.9★', label: 'Google Bewertung' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-playfair text-2xl font-bold text-[#C9A84C]">{stat.number}</div>
                  <div className="font-lato text-xs text-[#7a6a72] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <img
                src="/images/salon-overview.jpg"
                alt="Salon Übersicht"
                className="rounded-2xl w-full h-56 object-cover col-span-2 shadow-md"
              />
              <img
                src="/images/salon-station.jpg"
                alt="Nagelstation"
                className="rounded-2xl w-full h-40 object-cover shadow-md"
              />
              <img
                src="/images/salon-pedicure.jpg"
                alt="Pediküre Bereich"
                className="rounded-2xl w-full h-40 object-cover shadow-md"
              />
            </div>

            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-2xl p-3 shadow-sm">
              <p className="font-playfair text-xs text-[#5a4a52] font-semibold">Kawaii Nails</p>
              <p className="font-lato text-xs text-[#C9A84C]">Köln Ehrenfeld ✨</p>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-pink-light"
            >
              <p className="font-lato text-xs text-[#7a6a72]">Nächster freier Termin</p>
              <p className="font-playfair text-sm font-bold text-[#5a4a52]">Heute noch verfügbar</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
