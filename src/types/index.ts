export interface Product {
  id: string;
  name: string;
  description: string;
  origin: string;
  volume: string;
  abv: string;
  certifications: string[];
  tasteNotes: string[];
  formats: {
    single: { price: number; label: string };
    carton6: { price: number; label: string; savings: number };
  };
  badges: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  format: 'single' | 'carton6';
  quantity: number;
  price: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface B2BClientType {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}
