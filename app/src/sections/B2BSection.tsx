import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Percent, Truck, Headphones, Megaphone } from 'lucide-react';
import { b2bAdvantages } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  Percent: <Percent className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
  Headphones: <Headphones className="w-8 h-8" />,
  Megaphone: <Megaphone className="w-8 h-8" />,
};

export default function B2BSection() {
  return (
    <section className="bg-pz-navy py-20 md:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-white font-normal mb-4">
            Vous êtes Restaurateur, Hôtelier ou Traiteur ?
          </h2>
          <p className="font-inter text-white/70 text-lg max-w-2xl mx-auto">
            Offrez à vos clients une alternative premium sans alcool. Tarifs dégressifs et livraison express.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {b2bAdvantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center"
            >
              <div className="text-pz-gold mb-4 flex justify-center">{iconMap[item.icon]}</div>
              <h3 className="font-inter font-semibold text-white mb-2">{item.title}</h3>
              <p className="font-inter text-sm text-white/60">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/professionnels"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-pz-gold text-pz-gold font-inter font-semibold rounded-lg hover:bg-pz-gold hover:text-pz-navy transition-all duration-200"
          >
            Demander un Devis Pro
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
