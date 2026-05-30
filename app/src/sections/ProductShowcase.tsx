import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { product } from '@/data/content';

const formatTypes = [
  { key: 'single' as const, label: '1 Bouteille', price: product.formats.single.price },
  { key: 'carton6' as const, label: 'Carton de 6', price: product.formats.carton6.price },
];

export default function ProductShowcase() {
  const [selectedFormat, setSelectedFormat] = useState<'single' | 'carton6'>('single');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const currentFormat = formatTypes.find((f) => f.key === selectedFormat)!;
  const savings = selectedFormat === 'carton6' ? product.formats.carton6.savings : 0;
  const totalPrice = currentFormat.price * quantity;

  const handleAddToCart = () => {
    addItem(product, selectedFormat);
    setQuantity(1);
  };

  return (
    <section id="produit" className="section-padding bg-pz-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-pz-goldpale rounded-lg p-8 md:p-12 flex items-center justify-center aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <img
                src="/images/hero-bottle.jpg"
                alt={product.name}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              {savings > 0 && (
                <div className="absolute top-4 right-4 bg-pz-urgency text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                  Économisez {savings.toLocaleString()} FCFA
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm font-inter font-medium text-pz-gold uppercase tracking-wider">
                Pierre Zéro
              </span>
              <h2 className="font-cormorant text-4xl md:text-5xl font-normal text-pz-navy mt-2 leading-tight">
                {product.name}
              </h2>
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

            {/* Description */}
            <p className="font-inter text-pz-textsecondary leading-relaxed">
              {product.description}
            </p>

            {/* Taste Notes */}
            <div>
              <h4 className="font-inter text-sm font-semibold text-pz-navy uppercase tracking-wider mb-2">
                Notes de dégustation
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.tasteNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1.5 bg-pz-sand/50 rounded-full text-sm font-inter text-pz-navy"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Format Selector */}
            <div>
              <h4 className="font-inter text-sm font-semibold text-pz-navy uppercase tracking-wider mb-3">
                Choisir le format
              </h4>
              <div className="flex gap-3">
                {formatTypes.map((format) => (
                  <button
                    key={format.key}
                    onClick={() => {
                      setSelectedFormat(format.key);
                      setQuantity(1);
                    }}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-inter text-sm font-medium transition-all duration-200 ${
                      selectedFormat === format.key
                        ? 'border-pz-navy bg-pz-navy text-white'
                        : 'border-pz-border bg-white text-pz-textsecondary hover:border-pz-gold'
                    }`}
                  >
                    {format.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Add to Cart */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <div className="flex-1">
                <span className="font-inter text-3xl font-bold text-pz-navy">
                  {totalPrice.toLocaleString()} FCFA
                </span>
                {savings > 0 && (
                  <span className="ml-2 text-sm text-pz-urgency font-medium">
                    (Économisez {savings.toLocaleString()} FCFA)
                  </span>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-pz-border flex items-center justify-center hover:bg-pz-sand transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-inter font-semibold text-lg w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-pz-border flex items-center justify-center hover:bg-pz-sand transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={handleAddToCart} className="btn-cta2 gap-2">
                <ShoppingCart className="w-4 h-4" />
                Ajouter au Panier
              </button>
              <Link to="/produit" className="btn-secondary text-center">
                Voir les détails
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
