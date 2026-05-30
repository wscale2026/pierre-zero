import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Plus, Minus, ShoppingCart, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { product, faqProduct } from '@/data/content';
import { useCart } from '@/context/CartContext';
import { generateWhatsAppUrl, generateOrderMessage } from '@/lib/whatsapp';

const galleryImages = [
  '/images/hero-bottle.jpg',
  '/images/hero-glass.jpg',
  '/images/hero-carton.jpg',
  '/images/hero-degustation.jpg',
];

const benefits = [
  { icon: 'Heart', title: 'Santé', desc: 'Sans alcool, sans risque. Profitez du goût authentique du Chardonnay sans les effets secondaires.' },
  { icon: 'Users', title: 'Convivialité', desc: 'Partagez des moments de plaisir avec tous vos proches, sans exclusion.' },
  { icon: 'Wine', title: 'Élégance', desc: 'Un vin pétillant premium qui sublime chaque occasion spéciale.' },
  { icon: 'ShieldCheck', title: 'Inclusivité', desc: 'Pour tous les styles de vie, toutes les croyances, toutes les situations.' },
];

const nutritionData = [
  { label: 'Énergie', value: '18 kcal / 100ml' },
  { label: 'Glucides', value: '4.2g / 100ml' },
  { label: 'Sucres', value: '3.8g / 100ml' },
  { label: 'Protéines', value: '0.1g / 100ml' },
  { label: 'Lipides', value: '0g / 100ml' },
  { label: 'Sel', value: '0.01g / 100ml' },
];

export default function ProductPage() {
  const [mainImage, setMainImage] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState<'single' | 'carton6'>('single');
  const [quantity, setQuantity] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { addItem } = useCart();

  const currentFormat = selectedFormat === 'single' ? product.formats.single : product.formats.carton6;
  const savings = selectedFormat === 'carton6' ? product.formats.carton6.savings : 0;

  const handleAddToCart = () => {
    addItem(product, selectedFormat);
    setQuantity(1);
  };

  const handleBuyNow = () => {
    const cartState = {
      items: [{
        product,
        format: selectedFormat,
        quantity,
        price: currentFormat.price,
      }],
      total: currentFormat.price * quantity,
    };
    const message = generateOrderMessage(cartState);
    window.open(generateWhatsAppUrl(message), '_blank');
  };

  return (
    <main className="pt-20 md:pt-24 bg-pz-cream min-h-screen">
      {/* Product Detail */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-pz-goldpale rounded-xl overflow-hidden aspect-[3/4] max-w-lg mx-auto lg:max-w-none mb-4">
                <img
                  src={galleryImages[mainImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3 justify-center lg:justify-start">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImage(i)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      mainImage === i ? 'border-pz-navy' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="text-sm font-inter font-medium text-pz-gold uppercase tracking-wider">
                  Pierre Zéro
                </span>
                <h1 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-pz-navy font-normal mt-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-pz-gold fill-pz-gold" />
                    ))}
                  </div>
                  <span className="text-sm text-pz-textsecondary font-inter">4.9 (128 avis)</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert) => (
                  <span
                    key={cert}
                    className={`badge-pill ${
                      cert === '0% Alcool'
                        ? 'bg-green-50 text-green-700'
                        : cert === 'Halal'
                        ? 'bg-orange-50 text-orange-700'
                        : cert === 'Vegan'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-pz-navy text-pz-gold'
                    }`}
                  >
                    {cert}
                  </span>
                ))}
              </div>

              <p className="font-inter text-pz-textsecondary leading-relaxed">
                {product.description}
              </p>

              {/* Format Selector */}
              <div>
                <h4 className="font-inter text-sm font-semibold text-pz-navy uppercase tracking-wider mb-3">
                  Format
                </h4>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedFormat('single')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-inter text-sm font-medium transition-all ${
                      selectedFormat === 'single'
                        ? 'border-pz-navy bg-pz-navy text-white'
                        : 'border-pz-border bg-white text-pz-textsecondary'
                    }`}
                  >
                    1 Bouteille
                    <span className="block text-xs mt-1 opacity-70">
                      {product.formats.single.price.toLocaleString()} FCFA
                    </span>
                  </button>
                  <button
                    onClick={() => setSelectedFormat('carton6')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-inter text-sm font-medium transition-all ${
                      selectedFormat === 'carton6'
                        ? 'border-pz-navy bg-pz-navy text-white'
                        : 'border-pz-border bg-white text-pz-textsecondary'
                    }`}
                  >
                    Carton de 6
                    <span className="block text-xs mt-1 opacity-70">
                      {product.formats.carton6.price.toLocaleString()} FCFA
                      <span className="text-pz-urgency ml-1">(Éco {product.formats.carton6.savings.toLocaleString()} FCFA)</span>
                    </span>
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="font-inter text-sm font-semibold text-pz-navy uppercase tracking-wider">
                  Quantité
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-pz-border flex items-center justify-center hover:bg-pz-sand"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-inter font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-pz-border flex items-center justify-center hover:bg-pz-sand"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="pt-4 border-t border-pz-border">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-inter text-3xl font-bold text-pz-navy">
                    {(currentFormat.price * quantity).toLocaleString()} FCFA
                  </span>
                  {savings > 0 && (
                    <span className="text-sm text-pz-urgency font-medium">
                      Économisez {savings.toLocaleString()} FCFA
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={handleAddToCart} className="btn-cta2 gap-2 flex-1">
                    <ShoppingCart className="w-4 h-4" />
                    Ajouter au Panier
                  </button>
                  <button onClick={handleBuyNow} className="btn-whatsapp gap-2 flex-1">
                    <MessageCircle className="w-4 h-4" />
                    Commander sur WhatsApp
                  </button>
                </div>
                <p className="text-xs text-pz-success font-medium mt-2 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-pz-success inline-block" />
                  En stock — Livraison 24-48h
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-pz-goldpale">
        <div className="container-custom">
          <h2 className="font-cormorant text-3xl text-pz-navy text-center mb-10">Bénéfices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-pz-navy/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-pz-gold text-2xl">{b.title.charAt(0)}</span>
                </div>
                <h3 className="font-inter font-semibold text-pz-navy mb-1">{b.title}</h3>
                <p className="font-inter text-sm text-pz-textsecondary">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Table */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <h2 className="font-cormorant text-3xl text-pz-navy text-center mb-8">
              Valeurs Nutritionnelles
            </h2>
            <p className="text-center text-sm text-pz-textsecondary mb-6">Pour 100ml</p>
            <div className="border border-pz-border rounded-lg overflow-hidden">
              {nutritionData.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex justify-between px-6 py-3 ${
                    i % 2 === 0 ? 'bg-pz-surface' : 'bg-white'
                  }`}
                >
                  <span className="font-inter text-pz-text">{item.label}</span>
                  <span className="font-inter font-medium text-pz-navy">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-pz-goldpale">
        <div className="container-custom">
          <h2 className="font-cormorant text-3xl text-pz-navy text-center mb-10">
            Questions Fréquentes
          </h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqProduct.map((faq, i) => (
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

      {/* Mobile Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-pz-border p-4 lg:hidden z-30">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="font-inter font-bold text-lg text-pz-navy">
              {(currentFormat.price * quantity).toLocaleString()} FCFA
            </span>
          </div>
          <div className="flex gap-2">
            <button onClick={handleAddToCart} className="btn-cta2 text-sm py-2.5 px-4">
              <ShoppingCart className="w-4 h-4" />
            </button>
            <button onClick={handleBuyNow} className="btn-whatsapp text-sm py-2.5 px-4">
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Bottom spacer for mobile CTA */}
      <div className="h-20 lg:hidden" />
    </main>
  );
}
