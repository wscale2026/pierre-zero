import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Wine, Award, Heart, Globe } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

export default function AboutPage() {
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
              Notre Histoire
            </h1>
            <p className="font-inter text-white/70 text-lg max-w-2xl mx-auto">
              Pierre Zéro Cameroun est né d'une vision simple : offrir au Cameroun et à l'Afrique
              francophone un vin sans alcool premium, à la hauteur de vos moments de célébration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-pz-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/hero-celebration.webp"
                  alt="Célébration avec Pierre Zéro"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-cormorant text-3xl md:text-4xl text-pz-navy">
                Le Luxe du Vin Sans Alcool, Enfin au Cameroun
              </h2>
              <p className="font-inter text-pz-textsecondary leading-relaxed">
                Importé de France, Pierre Zéro Chardonnay est le fruit d'un savoir-faire
                œnologique d'excellence. Notre vin effervescent est désalcoolisé avec soin pour
                préserver tous les arômes et la finesse des bulles d'un vrai champagne.
              </p>
              <p className="font-inter text-pz-textsecondary leading-relaxed">
                Nous croyons que le plaisir du vin ne devrait pas être réservé aux seuls buveurs
                d'alcool. Que vous soyez en période de grossesse, conducteur, sportif, ou que vous
                fassiez simplement le choix d'une vie sans alcool — Pierre Zéro est là pour vous.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-pz-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-inter font-semibold text-pz-navy text-sm">Qualité Premium</h4>
                    <p className="font-inter text-xs text-pz-textsecondary">Chardonnay français authentique</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-pz-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-inter font-semibold text-pz-navy text-sm">Pour Tous</h4>
                    <p className="font-inter text-xs text-pz-textsecondary">Halal, vegan, 0% alcool</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-pz-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-inter font-semibold text-pz-navy text-sm">100% Cameroun</h4>
                    <p className="font-inter text-xs text-pz-textsecondary">Service et livraison locaux</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wine className="w-6 h-6 text-pz-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-inter font-semibold text-pz-navy text-sm">Convivialité</h4>
                    <p className="font-inter text-xs text-pz-textsecondary">Partagez sans exclusion</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              Contactez-nous
            </h2>
            <p className="font-inter text-pz-textsecondary">
              Nous sommes là pour vous aider. Écrivez-nous sur WhatsApp !
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-pz-surface rounded-lg p-6 text-center border border-pz-border card-hover"
            >
              <MessageCircle className="w-10 h-10 text-pz-whatsapp mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-pz-navy mb-1">WhatsApp</h3>
              <p className="font-inter text-sm text-pz-textsecondary">+237 694 434 821</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-pz-surface rounded-lg p-6 text-center border border-pz-border"
            >
              <Phone className="w-10 h-10 text-pz-gold mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-pz-navy mb-1">Téléphone</h3>
              <p className="font-inter text-sm text-pz-textsecondary">+237 694 434 821</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-pz-surface rounded-lg p-6 text-center border border-pz-border"
            >
              <MapPin className="w-10 h-10 text-pz-navy mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-pz-navy mb-1">Localisation</h3>
              <p className="font-inter text-sm text-pz-textsecondary">Douala & Yaoundé</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
