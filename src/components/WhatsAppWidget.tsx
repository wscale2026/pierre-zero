import { MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

export default function WhatsAppWidget() {
  return (
    <a
      href={generateWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-pz-whatsapp rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 animate-pulse-subtle"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" fill="white" />
    </a>
  );
}
