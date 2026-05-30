import { motion } from 'framer-motion';
import { ShieldCheck, Wine, Check, CreditCard } from 'lucide-react';
import { trustItems } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-10 h-10 text-pz-gold" />,
  Wine: <Wine className="w-10 h-10 text-pz-gold" />,
  Check: <Check className="w-10 h-10 text-pz-gold" />,
  CreditCard: <CreditCard className="w-10 h-10 text-pz-gold" />,
};

export default function TrustBar() {
  return (
    <section className="bg-pz-goldpale py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="mb-1">{iconMap[item.icon]}</div>
              <h3 className="font-inter text-base font-semibold text-pz-navy">
                {item.title}
              </h3>
              <p className="font-inter text-sm text-pz-textsecondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
