import { useState } from 'react';
import { motion } from 'framer-motion';
import { Percent, Truck, Headphones, Megaphone, UtensilsCrossed, Hotel, GlassWater, CakeSlice, Building2, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { b2bPricing, b2bAdvantages, b2bClientTypes, faqB2B } from '@/data/content';
import { generateWhatsAppUrl, generateB2BMessage } from '@/lib/whatsapp';

const advantageIcons: Record<string, React.ReactNode> = {
  Percent: <Percent className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
  Headphones: <Headphones className="w-8 h-8" />,
  Megaphone: <Megaphone className="w-8 h-8" />,
};

const clientIcons: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-8 h-8" />,
  Hotel: <Hotel className="w-8 h-8" />,
  GlassWater: <GlassWater className="w-8 h-8" />,
  CakeSlice: <CakeSlice className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
};

export default function B2BPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    establishment: 'restaurant',
    city: 'Douala',
    volume: '5',
  });

  const handleQuoteRequest = () => {
    const message = generateB2BMessage(formData.establishment, formData.city, formData.volume);
    window.open(generateWhatsAppUrl(message), '_blank');
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="bg-pz-navy py-20 md:py-28">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-6">
              Offrez Pierre Zéro à Vos Clients
            </h1>
            <p className="font-inter text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Rejoignez notre réseau de partenaires professionnels et proposez le meilleur vin sans
              alcool premium au Cameroun.
            </p>
            <a
              href="#devis"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-pz-gold text-pz-gold font-inter font-semibold rounded-lg hover:bg-pz-gold hover:text-pz-navy transition-all duration-200"
            >
              Demander un Devis
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding bg-pz-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-cormorant text-3xl md:text-4xl text-pz-navy mb-4">
              Tarifs Professionnels
            </h2>
            <p className="font-inter text-pz-textsecondary">
              Des prix dégressifs selon vos volumes
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border border-pz-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-pz-navy text-white">
                  <th className="px-6 py-4 font-inter font-semibold text-left text-sm">Quantité</th>
                  <th className="px-6 py-4 font-inter font-semibold text-right text-sm">Prix Public</th>
                  <th className="px-6 py-4 font-inter font-semibold text-right text-sm">Pro 5+ cartons</th>
                  <th className="px-6 py-4 font-inter font-semibold text-right text-sm">Pro 10+ cartons</th>
                </tr>
              </thead>
              <tbody>
                {b2bPricing.map((row, i) => (
                  <tr
                    key={i}
                    className={`${i % 2 === 0 ? 'bg-pz-surface' : 'bg-white'} border-t border-pz-border`}
                  >
                    <td className="px-6 py-4 font-inter text-pz-text">{row.quantity}</td>
                    <td className="px-6 py-4 font-inter text-pz-textsecondary text-right">
                      {row.public}
                    </td>
                    <td className="px-6 py-4 font-inter text-pz-navy font-medium text-right">
                      {row.pro5}
                    </td>
                    <td className="px-6 py-4 font-inter text-pz-gold font-semibold text-right">
                      {row.pro10}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-pz-goldpale">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-cormorant text-3xl md:text-4xl text-pz-navy mb-4">
              Avantages Partenaires
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bAdvantages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-pz-surface rounded-lg p-6 text-center card-hover"
              >
                <div className="text-pz-gold mb-4 flex justify-center">{advantageIcons[item.icon]}</div>
                <h3 className="font-inter font-semibold text-pz-navy mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-pz-textsecondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="section-padding bg-pz-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-cormorant text-3xl md:text-4xl text-pz-navy mb-4">
              Qui sont nos partenaires ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {b2bClientTypes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-pz-surface rounded-lg p-6 border border-pz-border card-hover"
              >
                <div className="text-pz-navy mb-4">{clientIcons[item.icon]}</div>
                <h3 className="font-inter font-semibold text-pz-navy mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-pz-textsecondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="devis" className="section-padding bg-pz-navy">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto"
          >
            <h2 className="font-cormorant text-3xl md:text-4xl text-white text-center mb-8">
              Demandez un Devis Personnalisé
            </h2>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 space-y-5">
              <div>
                <label className="block font-inter text-sm text-white/70 mb-2">
                  Type d'établissement
                </label>
                <select
                  value={formData.establishment}
                  onChange={(e) => setFormData({ ...formData, establishment: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-inter text-white focus:outline-none focus:ring-2 focus:ring-pz-gold"
                >
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hôtel</option>
                  <option value="lounge">Lounge / Bar</option>
                  <option value="traiteur">Traiteur</option>
                  <option value="entreprise">Entreprise</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block font-inter text-sm text-white/70 mb-2">Ville</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-inter text-white focus:outline-none focus:ring-2 focus:ring-pz-gold"
                >
                  <option value="Douala">Douala</option>
                  <option value="Yaoundé">Yaoundé</option>
                  <option value="Autre">Autre ville</option>
                </select>
              </div>

              <div>
                <label className="block font-inter text-sm text-white/70 mb-2">
                  Volume souhaité (cartons)
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-inter text-white focus:outline-none focus:ring-2 focus:ring-pz-gold"
                />
              </div>

              <button
                onClick={handleQuoteRequest}
                className="w-full btn-whatsapp justify-center gap-2 mt-4"
              >
                <MessageCircle className="w-5 h-5" />
                Envoyer sur WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-pz-goldpale">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-cormorant text-3xl text-pz-navy mb-4">FAQ Professionnels</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqB2B.map((faq, i) => (
              <div
                key={i}
                className="bg-pz-surface rounded-lg border border-pz-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-inter font-medium text-pz-navy pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-pz-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-pz-textsecondary flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    <p className="font-inter text-sm text-pz-textsecondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
