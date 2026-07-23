import type { SiteCopy } from './types';

export const en: SiteCopy = {
  meta: {
    title: 'Bacaanda Barbershop — Barber Shop in Polanco, Mexico City',
    description:
      'The only barbershop studio in Polanco. Haircuts, beard work and hot shaves by master barbers. Book online or message us on WhatsApp.',
  },
  nav: {
    services: 'Services',
    gallery: 'Gallery',
    reviews: 'Reviews',
    location: 'Location',
    book: 'Book now',
  },
  hero: {
    eyebrow: 'Polanco · Est. 2022',
    title: 'The only barbershop studio in Polanco',
    subtitle:
      'Precision cuts, hot towel shaves, and a drink on the house while you wait. Master barbers, bilingual environment.',
    ratingLabel: 'on Google · 249 reviews',
    ctaBook: 'Book a slot',
    ctaWhatsapp: 'WhatsApp',
    whatsappMessage: "Hi! I'd like to book an appointment at Bacaanda 💈",
  },
  about: {
    heading: 'A barbershop, not a salon',
    body: "Since 2022, Bacaanda has been a barbershop studio in the heart of Polanco — not just another hair salon. We work with straight razors, hot towels, and enough time to actually do it right. Clients come for the cut; they come back for the experience.",
    stats: [
      { value: '4.8★', label: '249 Google reviews' },
      { value: '2022', label: 'Opened in Polanco' },
      { value: 'ES/EN', label: 'Bilingual environment' },
      { value: '100%', label: 'Master barbers' },
    ],
  },
  services: {
    heading: 'Services',
    subheading: 'Real prices, straight from our booking system. Every service includes a drink on the house.',
    items: [
      {
        name: 'Haircut',
        price: '$450 MXN',
        duration: '1 hr',
        description: 'Includes ear and nose waxing, massage, wash, and a 3-day guarantee.',
      },
      {
        name: 'Beard trim & shape',
        price: '$370 MXN',
        duration: '45 min',
        description: 'Cleanup, lining, and trim with hot and cold towels.',
      },
      {
        name: 'Straight-razor shave',
        price: '$370 MXN',
        duration: '45 min',
        description: 'Pre-shave oil, hot towel, lather, straight razor, and after-shave.',
      },
      {
        name: 'Full pack',
        price: '$720 MXN',
        duration: '2 hrs',
        description: 'Haircut, beard work, facial cleanse, and mask — the complete service.',
      },
      {
        name: 'Fade trim',
        price: '$350 MXN',
        duration: '40 min',
        description: 'Fades the sides and lines up the contours.',
      },
      {
        name: "Kids' haircut",
        price: '$400 MXN',
        duration: '1 hr',
        description: 'For kids up to age 11. Includes massage and hair wash.',
      },
    ],
    ctaLabel: 'See all services',
  },
  booking: {
    heading: 'Book your appointment',
    subheading: 'Pick a service, barber, and time without leaving the page.',
    fallbackLabel: "Not loading? Open it in a new tab",
  },
  gallery: {
    heading: 'The studio',
    subheading: "A mural you won't forget, and barbers you won't either.",
  },
  reviews: {
    heading: 'What people say',
    ratingValue: '4.8',
    ratingCount: '249 Google reviews',
    quotes: [
      {
        text: "Excellent experience at Barbería Bacaanda. From the moment you arrive you can tell the level of the place: modern, clean, very comfortable facilities, with a great, well-kept atmosphere.",
        author: 'Ivan Guerra Betancourt',
        meta: 'Google',
      },
      {
        text: "Great service, everyone's really friendly, they play football and good music. I've been going for 4 years and it's always been great.",
        author: 'Jairo Medina Perez',
        meta: 'Google',
      },
      {
        text: 'A nice extra that makes you feel at home: you can ask for a beer, coffee, or soda.',
        author: 'Google review',
        meta: 'Google',
      },
    ],
  },
  location: {
    heading: 'Find us',
    addressLines: [
      'Av. Emilio Castelar 208',
      'Polanco III Secc., Miguel Hidalgo',
      '11550, Mexico City',
    ],
    hoursHeading: 'Hours',
    hours: [
      { label: 'Monday to Friday', time: '10 AM – 10 PM' },
      { label: 'Saturday', time: '08 AM – 08 PM' },
      { label: 'Sunday', time: '08 AM – 07 PM' },
    ],
    hoursNote: 'Real-time availability when you book online or message us on WhatsApp.',
    phoneLabel: 'Call us',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    wazeLabel: 'Waze',
    mapsLabel: 'Google Maps',
    mapQuery: 'Barberia Bacaanda, Av. Emilio Castelar 208, Polanco, Mexico City',
  },
  finalCta: {
    heading: 'Your next haircut starts here',
    subheading: 'Book online in seconds or message us directly on WhatsApp.',
    whatsappMessage: "Hi! I'd like to book an appointment at Bacaanda 💈",
  },
  footer: {
    tagline: 'Barbershop studio in Polanco since 2022.',
    quickLinksHeading: 'Explore',
    contactHeading: 'Contact',
    rights: 'All rights reserved.',
  },
};
