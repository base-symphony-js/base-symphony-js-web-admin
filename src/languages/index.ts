/*
 * Copyright (c) 2024 Luis Solano. All rights reserved.
 * Licensed under the MIT License. See the LICENSE file in the root of this repository for more information.
 */
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
