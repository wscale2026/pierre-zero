import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle, CreditCard, Truck } from 'lucide-react';
import { processSteps } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  ShoppingCart: <ShoppingCart className="w-7 h-7" />,
  MessageCircle: <MessageCircle className="w-7 h-7" />,
  CreditCard: <CreditCard className="w-7 h-7" />,
  Truck: <Truck className="w-7 h-7" />,
};

export default function ProcessStepsSection() {
  return (
    <section className="section-padding bg-pz-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-pz-navy font-normal mb-4">
            Commander en 4 Étapes
          </h2>
          <p className="font-inter text-pz-textsecondary text-lg max-w-2xl mx-auto">
            Un processus simple et rapide pour recevoir votre Pierre Zéro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-pz-navy flex items-center justify-center mx-auto mb-4">
                  <span className="font-cormorant text-2xl font-semibold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-pz-gold mb-3 flex justify-center">
                  {iconMap[step.icon]}
                </div>

                {/* Content */}
                <h3 className="font-inter font-semibold text-pz-navy text-lg mb-2">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-pz-textsecondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on mobile and last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-calc(50%-40px)] h-[2px] bg-pz-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-pz-border border-b-[6px] border-b-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
