import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { CartProvider } from '@/context/CartContext';
import HomePage from '@/pages/HomePage';
import ProductPage from '@/pages/ProductPage';
import CartPage from '@/pages/CartPage';
import B2BPage from '@/pages/B2BPage';
import AboutPage from '@/pages/AboutPage';

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <CartProvider>
      <div className="min-h-screen bg-pz-cream flex flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <HomePage />
                </PageWrapper>
              }
            />
            <Route
              path="/produit"
              element={
                <PageWrapper>
                  <ProductPage />
                </PageWrapper>
              }
            />
            <Route
              path="/panier"
              element={
                <PageWrapper>
                  <CartPage />
                </PageWrapper>
              }
            />
            <Route
              path="/professionnels"
              element={
                <PageWrapper>
                  <B2BPage />
                </PageWrapper>
              }
            />
            <Route
              path="/a-propos"
              element={
                <PageWrapper>
                  <AboutPage />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
        <WhatsAppWidget />
      </div>
    </CartProvider>
  );
}

export default App;
