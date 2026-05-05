import { businessData } from '../data/business';

export function getWhatsAppLink(): string {
  if (businessData.whatsapp) {
    return `https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(businessData.whatsappMessage)}`;
  }
  return '/pedidos';
}
