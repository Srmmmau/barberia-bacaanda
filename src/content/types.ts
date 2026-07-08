export interface SiteCopy {
  meta: { title: string; description: string };
  nav: { services: string; gallery: string; reviews: string; location: string; book: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ratingLabel: string;
    ctaBook: string;
    ctaWhatsapp: string;
    whatsappMessage: string;
  };
  about: {
    heading: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  services: {
    heading: string;
    subheading: string;
    items: { name: string; description: string }[];
    ctaLabel: string;
  };
  gallery: { heading: string; subheading: string };
  reviews: {
    heading: string;
    ratingValue: string;
    ratingCount: string;
    quotes: { text: string; author: string; meta: string }[];
  };
  location: {
    heading: string;
    addressLines: string[];
    hoursHeading: string;
    hours: { label: string; time: string }[];
    hoursNote: string;
    phoneLabel: string;
    whatsappLabel: string;
    instagramLabel: string;
    mapQuery: string;
  };
  finalCta: { heading: string; subheading: string; whatsappMessage: string };
  footer: { tagline: string; quickLinksHeading: string; contactHeading: string; rights: string };
}
