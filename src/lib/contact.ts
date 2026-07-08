const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER;
const PHONE_NUMBER = import.meta.env.PUBLIC_PHONE_NUMBER;
const BOOKING_URL = import.meta.env.PUBLIC_BOOKING_URL;
const INSTAGRAM_HANDLE = import.meta.env.PUBLIC_INSTAGRAM_HANDLE;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telUrl(): string {
  return `tel:+${PHONE_NUMBER}`;
}

export function bookingUrl(): string {
  return BOOKING_URL;
}

export function instagramUrl(): string {
  return `https://instagram.com/${INSTAGRAM_HANDLE}`;
}

export function formattedPhone(): string {
  // 5550564567 -> 55 5056 4567
  return `${PHONE_NUMBER.slice(0, 2)} ${PHONE_NUMBER.slice(2, 6)} ${PHONE_NUMBER.slice(6)}`;
}
