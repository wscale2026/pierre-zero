import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Wine } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/produit', label: 'Notre Vin' },
  { to: '/professionnels', label: 'Professionnels' },
  { to: '/a-propos', label: 'À Propos' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-pz-cream/95 backdrop-blur-md shadow-sm'
            : 'pt-0 sm:pt-4 md:pt-6'
        }`}
      >
        <div className="container-custom">
          <div className={`flex items-center justify-between h-16 md:h-20 transition-all duration-300 ${
            isScrolled
              ? ''
              : 'bg-white/50 backdrop-blur-sm -mx-4 sm:mx-0 px-4 sm:px-6 md:px-6 rounded-none md:rounded-full border-b border-transparent md:border-white/10'
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 z-10">
              <Wine className="w-6 h-6 md:w-7 md:h-7 transition-colors text-pz-navy" />
              <span className="font-cormorant text-xl md:text-2xl font-semibold tracking-wide transition-colors text-pz-navy">
                Pierre Zéro
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-inter text-sm font-medium transition-colors duration-200 ${
                    isActive(link.to) 
                      ? 'text-pz-navy' 
                      : (isScrolled ? 'text-pz-textsecondary hover:text-pz-gold' : 'text-pz-navy/80 hover:text-pz-navy')
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link
                to="/panier"
                className="relative p-2 hover:bg-pz-navy/10 rounded-full transition-colors"
              >
                <ShoppingCart className="w-5 h-5 transition-colors text-pz-navy" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-pz-whatsapp text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-pz-navy/10 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 transition-colors text-pz-navy" />
                ) : (
                  <Menu className="w-5 h-5 transition-colors text-pz-navy" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-pz-navy/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className="font-cormorant text-3xl font-semibold text-white hover:text-pz-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                href="https://wa.me/237694434821"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-4"
              >
                Commander sur WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
