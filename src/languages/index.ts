import en from './en/translation.json'
import es from './es/translation.json'

const GeneralLanguages = { en, es }

export const translations = {
  en: {
    ...GeneralLanguages.en,
  },
  es: {
    ...GeneralLanguages.es,
  },
}

export type ITranslation = typeof translations.en
export type ILanguages = 'en' | 'es'
