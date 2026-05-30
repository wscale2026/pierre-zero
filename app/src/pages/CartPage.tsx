import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingCart, MessageCircle, MapPin } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { generateWhatsAppUrl, generateOrderMessage } from '@/lib/whatsapp';

const cities = [
  { name: 'Douala', freeThreshold: 2 },
  { name: 'Yaoundé', freeThreshold: 2 },
  { name: 'Autre ville', freeThreshold: 999 },
];

function calculateShipping(city: string, cartonCount: number): number {
  if (city === 'Autre ville') return -1; // Sur devis
  if (cartonCount >= 2) return 0;
  if (cartonCount === 1) return 2000;
  return 1000; // Just bottles
}

export default function CartPage() {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const [selectedCity, setSelectedCity] = useState('Douala');

  const cartonCount = state.items
    .filter((item) => item.format === 'carton6')
    .reduce((sum, item) => sum + item.quantity, 0);

  const shipping = calculateShipping(selectedCity, cartonCount);
  const totalWithShipping = shipping >= 0 ? state.total + shipping : state.total;

  const handleCheckout = () => {
    const message = generateOrderMessage({ ...state, total: totalWithShipping }, selectedCity);
    window.open(generateWhatsAppUrl(message), '_blank');
  };

  if (state.items.length === 0) {
    return (
      <main className="pt-24 md:pt-28 bg-pz-cream min-h-screen">
        <div className="container-custom py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto"
          >
            <ShoppingCart className="w-16 h-16 text-pz-border mx-auto mb-6" />
            <h1 className="font-cormorant text-3xl text-pz-navy mb-4">Votre panier est vide</h1>
            <p className="font-inter text-pz-textsecondary mb-8">
              Découvrez notre Pierre Zéro Chardonnay et ajoutez-le à votre panier.
            </p>
            <Link to="/produit" className="btn-cta2">
              Découvrir Notre Vin
            </Link>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 md:pt-28 bg-pz-cream min-h-screen">
      <div className="container-custom py-8 md:py-12">
        <h1 className="font-cormorant text-3xl md:text-4xl text-pz-navy mb-8">Votre Panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <motion.div
                key={`${item.product.id}-${item.format}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-pz-surface rounded-lg border border-pz-border p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-pz-goldpale flex-shrink-0">
                  <img
                    src="/images/hero-bottle.jpg"
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-inter font-semibold text-pz-navy truncate">
                    {item.product.name}
                  </h3>
                  <p className="font-inter text-sm text-pz-textsecondary">
                    {item.format === 'single' ? '1 Bouteille (75cl)' : 'Carton de 6 bouteilles'}
                  </p>
                  <p className="font-inter font-semibold text-pz-navy mt-1">
                    {item.price.toLocaleString()} FCFA
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.format, item.quantity - 1)
                    }
                    className="w-8 h-8 rounded-full border border-pz-border flex items-center justify-center hover:bg-pz-sand"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="font-inter font-semibold w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.format, item.quantity + 1)
                    }
                    className="w-8 h-8 rounded-full border border-pz-border flex items-center justify-center hover:bg-pz-sand"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.product.id, item.format)}
                  className="p-2 text-pz-textsecondary hover:text-pz-urgency transition-colors"
                  aria-label="Supprimer"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm font-inter text-pz-textsecondary hover:text-pz-urgency transition-colors underline"
            >
              Vider le panier
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-pz-surface rounded-lg border border-pz-border p-6 sticky top-24">
              <h2 className="font-inter font-semibold text-pz-navy text-lg mb-6">
                Récapitulatif
              </h2>

              {/* City Selector */}
              <div className="mb-6">
                <label className="flex items-center gap-2 font-inter text-sm font-medium text-pz-navy mb-2">
                  <MapPin className="w-4 h-4" />
                  Ville de livraison
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-2.5 border border-pz-border rounded-lg font-inter text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pz-gold"
                >
                  {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between font-inter text-sm">
                  <span className="text-pz-textsecondary">Sous-total</span>
                  <span className="text-pz-navy font-medium">{state.total.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between font-inter text-sm">
                  <span className="text-pz-textsecondary">Livraison</span>
                  <span className="text-pz-navy font-medium">
                    {shipping === 0
                      ? 'Gratuite'
                      : shipping === -1
                      ? 'Sur devis'
                      : `${shipping.toLocaleString()} FCFA`}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-pz-success font-medium">
                    Livraison gratuite (2+ cartons)
                  </p>
                )}
                <div className="border-t border-pz-border pt-3 flex justify-between font-inter">
                  <span className="font-semibold text-pz-navy">Total</span>
                  <span className="font-bold text-pz-navy text-lg">
                    {totalWithShipping.toLocaleString()} FCFA
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button onClick={handleCheckout} className="btn-whatsapp w-full justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Finaliser sur WhatsApp
              </button>

              <p className="text-xs text-pz-textsecondary text-center mt-4 leading-relaxed">
                Cliquez ci-dessus pour nous envoyer votre commande sur WhatsApp. Nous vous
                confirmerons la disponibilité et les modalités de paiement Mobile Money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
