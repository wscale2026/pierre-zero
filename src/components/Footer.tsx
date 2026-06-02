import { Link } from 'react-router-dom';
import { Wine, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const footerLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/produit', label: 'Notre Vin' },
  { to: '/professionnels', label: 'Professionnels' },
  { to: '/a-propos', label: 'À Propos' },
  { to: '/panier', label: 'Mon Panier' },
];

export default function Footer() {
  return (
    <footer className="bg-pz-navy text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Wine className="w-6 h-6 text-pz-gold" />
              <span className="font-cormorant text-2xl font-semibold tracking-wide">
                Pierre Zéro
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed font-inter">
              Le luxe du vin sans alcool, maintenant au Cameroun. Pierre Zéro Chardonnay — 0% Alcool, 100% Plaisir.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-sm uppercase tracking-wider text-pz-gold">
              Liens Rapides
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-white transition-colors text-sm font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-sm uppercase tracking-wider text-pz-gold">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/237655607048"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-pz-whatsapp transition-colors text-sm font-inter"
              >
                <Phone className="w-4 h-4" />
                <span>+237 6 55 60 70 48</span>
              </a>
              <div className="flex items-center gap-2 text-white/70 text-sm font-inter">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Douala & Yaoundé, Cameroun</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-sm uppercase tracking-wider text-pz-gold">
              Suivez-nous
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pz-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pz-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="text-white/50 text-xs font-inter">
              Livraison gratuite à Douala et Yaoundé pour 2 cartons+
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs font-inter">
            © 2025 Pierre Zéro Cameroun. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-white/50 text-xs font-inter">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
