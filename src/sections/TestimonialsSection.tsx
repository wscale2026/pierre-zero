import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="section-padding bg-pz-goldpale">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-pz-navy font-normal mb-4">
            Ce que nos clients disent
          </h2>
          <p className="font-inter text-pz-textsecondary text-lg">
            Des avis vérifiés de nos clients au Cameroun
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-pz-surface rounded-xl p-8 md:p-12 shadow-card"
            >
              <Quote className="w-10 h-10 text-pz-gold/40 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-pz-gold fill-pz-gold'
                        : 'text-pz-border'
                    }`}
                  />
                ))}
              </div>

              <p className="font-inter text-pz-text text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pz-navy/10 flex items-center justify-center">
                  <span className="font-cormorant text-xl font-semibold text-pz-navy">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-inter font-semibold text-pz-navy">{testimonial.name}</p>
                  <p className="font-inter text-sm text-pz-textsecondary">
                    {testimonial.role} — {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-pz-border bg-white flex items-center justify-center hover:bg-pz-sand transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5 text-pz-navy" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? 'bg-pz-navy' : 'bg-pz-border'
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-pz-border bg-white flex items-center justify-center hover:bg-pz-sand transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5 text-pz-navy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
