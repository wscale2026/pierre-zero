import type { CartState } from '@/types';

const WHATSAPP_NUMBER = '237694434821';

export function generateWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (message) {
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}?text=${encodedMessage}`;
  }
  return baseUrl;
}

export function generateOrderMessage(cart: CartState, city?: string): string {
  const items = cart.items
    .map((item) => {
      const format = item.format === 'single' ? 'Bouteille' : 'Carton de 6';
      return `• ${item.quantity} x ${format} — ${(item.price * item.quantity).toLocaleString()} FCFA`;
    })
    .join('\n');

  return `Bonjour Pierre Zéro Cameroun ! 👋\n\nJe souhaite passer commande :\n\n🍾 Pierre Zéro Chardonnay\n${items}\n\n📦 Livraison : ${city || 'Douala'}\n💰 Total : ${cart.total.toLocaleString()} FCFA\n\nMon nom : \nMon téléphone : \n\nMerci !`;
}

export function generateB2BMessage(
  establishment: string,
  city: string,
  volume: string
): string {
  return `Bonjour Pierre Zéro Cameroun ! 👋\n\nJe suis intéressé par vos tarifs professionnels.\n\n🏢 Type d'établissement : ${establishment}\n📍 Ville : ${city}\n📦 Volume souhaité : ${volume} cartons\n\nMerci de me contacter pour un devis.\n\nMon nom : \nMon téléphone : `;
}
