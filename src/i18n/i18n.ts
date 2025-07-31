import i18next from 'i18next'
import { fr } from './fr'
import { en } from './en'

export const defaultLang = 'fr'

// i18n utilisé par Astro
export async function initI18n(lang: string) {
  const resources = {
    en: { translation: en },
    fr: { translation: fr }
  }

  await i18next.init({
    lng: lang,
    fallbackLng: defaultLang,
    resources,
    interpolation: {
      escapeValue: false // Astro n’a pas besoin d’échapper les valeurs
    }
  })

  return i18next.t.bind(i18next)
}

export const languages = {
  en: 'English',
  fr: 'Français'
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in languages) return lang as keyof typeof languages
  return defaultLang
}
