const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER;
const PHONE_NUMBER = import.meta.env.PUBLIC_PHONE_NUMBER;
const BOOKING_URL = import.meta.env.PUBLIC_BOOKING_URL;
const AGENDAPRO_IFRAME_SRC = import.meta.env.PUBLIC_AGENDAPRO_IFRAME_SRC;
const INSTAGRAM_HANDLE = import.meta.env.PUBLIC_INSTAGRAM_HANDLE;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telUrl(): string {
  // PHONE_NUMBER is stored without the Mexico country code (52) for display purposes
  return `tel:+52${PHONE_NUMBER}`;
}

export function bookingUrl(): string {
  return BOOKING_URL;
}

export function agendaProIframeSrc(): string {
  return AGENDAPRO_IFRAME_SRC;
}

export function instagramUrl(): string {
  return `https://instagram.com/${INSTAGRAM_HANDLE}`;
}

// Exact coordinates for Barbería Bacaanda (Av. Emilio Castelar 208, Polanco), confirmed via Google Maps
const LAT = 19.4311103;
const LNG = -99.201133;

export function wazeUrl(): string {
  return `https://waze.com/ul?ll=${LAT},${LNG}&navigate=yes`;
}

export function googleMapsUrl(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;
}

export function formattedPhone(): string {
  // 5550564567 -> 55 5056 4567
  return `${PHONE_NUMBER.slice(0, 2)} ${PHONE_NUMBER.slice(2, 6)} ${PHONE_NUMBER.slice(6)}`;
}
