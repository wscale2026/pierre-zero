import type { Product, Testimonial, FAQItem, ProcessStep, TrustItem, WhyChooseItem } from '@/types';

export const product: Product = {
  id: 'pierre-zero-chardonnay',
  name: 'Pierre Zéro Chardonnay Effervescent',
  description:
    'Notes d\'agrumes frais, de pomme croquante et de fleurs blanches délicates. Une bulle fine et délicate, une texture onctueuse en bouche. Rafraîchissant et élégant, parfait pour toutes vos célébrations.',
  origin: 'France',
  volume: '75cl',
  abv: '0%',
  certifications: ['0% Alcool', 'Halal', 'Vegan', 'Importé de France'],
  tasteNotes: ['Agrumes', 'Pomme croquante', 'Fleurs blanches', 'Vanille'],
  formats: {
    single: { price: 15000, label: '1 Bouteille' },
    carton6: { price: 75000, label: 'Carton de 6', savings: 15000 },
  },
  badges: ['0% Alcool', 'Halal', 'Vegan', 'Premium'],
  inStock: true,
};

export const trustItems: TrustItem[] = [
  {
    icon: 'ShieldCheck',
    title: '0% Alcool Garanti',
    description: 'Le plaisir du vin sans les effets de l\'alcool',
  },
  {
    icon: 'Wine',
    title: 'Importé de France',
    description: 'Un Chardonnay authentique, désalcoolisé avec soin',
  },
  {
    icon: 'Check',
    title: 'Halal & Vegan',
    description: 'Convient à tous, sans exception',
  },
  {
    icon: 'CreditCard',
    title: 'Paiement Mobile Money',
    description: 'Payez facilement avec Orange Money ou MTN MoMo',
  },
];

export const whyChooseItems: WhyChooseItem[] = [
  {
    icon: 'Heart',
    title: 'Santé',
    description:
      'Sans alcool, sans compromis sur le goût. Profitez de tous les arômes du Chardonnay sans les effets secondaires.',
  },
  {
    icon: 'Wine',
    title: 'Élégance',
    description:
      'Un vin pétillant premium qui sublime vos moments de convivialité avec classe et raffinement.',
  },
  {
    icon: 'Users',
    title: 'Accessibilité',
    description:
      'Pour tous : femmes enceintes, conducteurs, sportifs, et tous ceux qui choisissent de ne pas boire d\'alcool.',
  },
  {
    icon: 'Globe',
    title: 'Communauté',
    description:
      'Rejoignez le mouvement du lifestyle sans alcool au Cameroun et en Afrique francophone.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Amélie N.',
    role: 'Cliente particulière',
    content:
      'J\'ai découvert Pierre Zéro lors d\'un dîner entre amis. Le goût est incroyable, on oublie complètement que c\'est sans alcool ! Je recommande à toutes mes amies.',
    rating: 5,
    location: 'Douala',
  },
  {
    id: 2,
    name: 'Chef Jean-Pierre K.',
    role: 'Propriétaire de restaurant',
    content:
      'Nous proposons Pierre Zéro à notre carte depuis 3 mois. Nos clients adorent ! C\'est devenu notre meilleure vente de boissons non-alcoolisées.',
    rating: 5,
    location: 'Yaoundé',
  },
  {
    id: 3,
    name: 'Marie-Claire T.',
    role: 'Organisatrice d\'événements',
    content:
      'Parfait pour les mariages et les événements corporatifs. Les invités sont toujours impressionnés par la qualité. La commande via WhatsApp est super pratique !',
    rating: 5,
    location: 'Douala',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Ajoutez au Panier',
    description: 'Choisissez votre format et ajoutez à votre panier',
    icon: 'ShoppingCart',
  },
  {
    number: 2,
    title: 'Validez sur WhatsApp',
    description: 'Envoyez-nous votre commande en un clic',
    icon: 'MessageCircle',
  },
  {
    number: 3,
    title: 'Payez par Mobile Money',
    description: 'Orange Money ou MTN MoMo, simple et sécurisé',
    icon: 'CreditCard',
  },
  {
    number: 4,
    title: 'Recevez à Domicile',
    description: 'Livraison à Douala et Yaoundé en 24-48h',
    icon: 'Truck',
  },
];

export const faqProduct: FAQItem[] = [
  {
    question: 'Pour qui est Pierre Zéro ?',
    answer:
      'Pierre Zéro est pour tous ! Parfait pour les personnes qui ne consomment pas d\'alcool pour des raisons de santé, de religion, de grossesse, ou simplement par choix personnel. Il convient également aux sportifs et aux conducteurs.',
  },
  {
    question: 'Comment servir Pierre Zéro ?',
    answer:
      'Servez Pierre Zéro bien frais (entre 6 et 8°C) dans une flûte à champagne pour préserver les bulles. Agitez doucement la bouteille avant d\'ouvrir. Idéal pour les apéritifs, les célébrations et les repas.',
  },
  {
    question: 'Quelle est la durée de conservation ?',
    answer:
      'Pierre Zéro se conserve jusqu\'à 24 mois dans un endroit frais et sec, à l\'abri de la lumière directe. Une fois ouvert, consommez-le dans les 3 jours en le gardant réfrigéré.',
  },
  {
    question: 'Comment se passe la livraison ?',
    answer:
      'Nous livrons à Douala et Yaoundé sous 24 à 48 heures. La livraison est gratuite à partir de 2 cartons commandés. Pour les autres villes du Cameroun, contactez-nous sur WhatsApp pour un devis.',
  },
];

export const faqB2B: FAQItem[] = [
  {
    question: 'Quels sont les délais de livraison pour les professionnels ?',
    answer:
      'Pour les commandes professionnelles, nous garantissons une livraison sous 24-48h à Douala et Yaoundé. Pour les autres villes, les délais sont de 3 à 5 jours ouvrés.',
  },
  {
    question: 'Quelles sont les conditions pour les tarifs B2B ?',
    answer:
      'Nos tarifs professionnels s\'appliquent à partir de 5 cartons commandés. Plus vous commandez, plus le prix unitaire est avantageux. Contactez-nous pour un devis personnalisé.',
  },
  {
    question: 'Proposez-vous une exclusivité territoriale ?',
    answer:
      'Oui, selon les volumes et l\'engagement, nous pouvons discuter d\'une exclusivité de distribution sur certaines zones géographiques. Contactez notre équipe commerciale pour en savoir plus.',
  },
  {
    question: 'Quel support marketing proposez-vous ?',
    answer:
      'Nous fournissons du matériel de communication (affiches, menus, présentoirs), formons votre personnel à la dégustation et vous accompagnons dans vos campagnes de promotion.',
  },
];

export const b2bPricing = [
  { quantity: '1 carton (6 bouteilles)', public: '75 000 FCFA', pro5: '67 500 FCFA', pro10: '60 000 FCFA' },
  { quantity: '5 cartons', public: '—', pro5: '67 500 FCFA/carton', pro10: '60 000 FCFA/carton' },
  { quantity: '10+ cartons', public: '—', pro5: '—', pro10: '60 000 FCFA/carton' },
];

export const b2bAdvantages = [
  { icon: 'Percent', title: 'Marge Attractive', description: 'Marges compétitives pour maximiser votre rentabilité' },
  { icon: 'Truck', title: 'Livraison Express', description: '24-48h à Douala et Yaoundé' },
  { icon: 'Headphones', title: 'Support Dédié', description: 'Un interlocuteur privilégié pour vos commandes' },
  { icon: 'Megaphone', title: 'Marketing Proximité', description: 'Matériel promo et formations dégustation' },
];

export const b2bClientTypes = [
  { icon: 'UtensilsCrossed', title: 'Restaurants', description: 'Enrichissez votre carte de boissons avec une option premium sans alcool' },
  { icon: 'Hotel', title: 'Hôtels', description: 'Offrez une expérience complète à vos clients avec le minibar Pierre Zéro' },
  { icon: 'GlassWater', title: 'Lounges & Bars', description: 'Créez des cocktails signature sans alcool' },
  { icon: 'CakeSlice', title: 'Traiteurs', description: 'Proposez une alternative élégante pour vos événements' },
  { icon: 'Building2', title: 'Entreprises', description: 'Cadeaux corporatifs et événements d\'entreprise' },
];

export const heroImages = [
  '/images/hero-bottle.png',
  '/images/hero-glass.jpg',
  '/images/hero-table.jpg',
  '/images/hero-carton.png',
  '/images/hero-degustation.jpg',
  '/images/hero-grapes.jpg',
  '/images/hero-lounge.jpeg',
  '/images/hero-celebration.jpg',
  '/images/hero-ingredients.png',
  '/images/hero-family.jpg',
];
