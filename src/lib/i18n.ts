export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function alternateLangUrl(url: URL, lang: Lang): string {
  const rest = url.pathname.replace(/^\/(es|en)\/?/, '');
  return `/${lang}/${rest}`;
}
