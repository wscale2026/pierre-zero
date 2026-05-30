import { motion } from 'framer-motion';
import { Heart, Wine, Users, Globe } from 'lucide-react';
import { whyChooseItems } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-10 h-10" />,
  Wine: <Wine className="w-10 h-10" />,
  Users: <Users className="w-10 h-10" />,
  Globe: <Globe className="w-10 h-10" />,
};

export default function WhyChooseSection() {
  return (
    <section className="section-padding bg-pz-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-pz-navy font-normal mb-4">
            Pourquoi Choisir Pierre Zéro ?
          </h2>
          <p className="font-inter text-pz-textsecondary text-lg max-w-2xl mx-auto">
            Une expérience premium qui révolutionne vos moments de convivialité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-pz-surface border border-pz-border/50 rounded-lg p-8 card-hover"
            >
              <div className="text-pz-gold mb-5">{iconMap[item.icon]}</div>
              <h3 className="font-inter font-semibold text-pz-navy text-lg mb-3">
                {item.title}
              </h3>
              <p className="font-inter text-pz-textsecondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
